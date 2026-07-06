# Setup & Development Guide

Complete guide to setting up and running Foursight locally.

## Table of Contents

- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## System Requirements

### Required
- **OS**: macOS, Linux, or Windows (WSL2)
- **Node.js**: 18.17.0 or higher
- **npm**: 9.0.0 or higher (or equivalent package manager)
- **Git**: 2.30.0 or higher
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: Minimum 2GB free

### Optional
- **Bun**: 1.0.0 or higher (faster package manager)
- **Docker**: For containerized deployment
- **Cloudflare CLI**: For advanced deployment options

### Verified Compatibility

| OS | Node | npm | Status |
|---|---|---|---|
| macOS 12+ (Intel) | 18+ | 9+ | ✅ Fully Supported |
| macOS 12+ (Apple Silicon) | 18+ | 9+ | ✅ Fully Supported |
| Ubuntu 20.04+ | 18+ | 9+ | ✅ Fully Supported |
| Windows 10/11 (WSL2) | 18+ | 9+ | ✅ Fully Supported |

## Installation

### Step 1: Clone Repository

```bash
# Clone via HTTPS
git clone https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy.git

# OR clone via SSH (recommended if SSH key configured)
git clone git@github.com:vishnuprasad3004/Improving-Stock-Prediction-Accuracy.git

# Navigate to project
cd Improving-Stock-Prediction-Accuracy
```

### Step 2: Install Dependencies

**Option A: Using Bun (Recommended - Faster)**

```bash
# Install bun globally
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install
```

**Option B: Using npm**

```bash
npm install
```

**Option C: Using Yarn**

```bash
yarn install
```

### Step 3: Verify Installation

```bash
# Check Node version
node --version  # Should be 18+

# Check package manager version
bun --version   # If using Bun
npm --version   # If using npm

# Verify dependencies
npm list | head -20
```

## Configuration

### Step 1: Environment Variables

```bash
# Copy environment template
cp .env.example .env.local

# Edit the file with your credentials
nano .env.local
```

### Step 2: Configure Environment Variables

Create `.env.local` file with the following variables:

```env
# ===== Application Configuration =====
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8787

# ===== Cloudflare Configuration =====
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ZONE_ID=your_zone_id_here
CLOUDFLARE_DATABASE_ID=your_d1_database_id_here
CLOUDFLARE_KV_NAMESPACE_ID=your_kv_namespace_id_here

# ===== Database Configuration =====
DATABASE_URL=file:./data/app.db
DATABASE_DEBUG=false

# ===== API Keys =====
NSE_API_KEY=your_nse_api_key_here
BSE_API_KEY=your_bse_api_key_here
POLYGON_API_KEY=your_polygon_api_key_here

# ===== Authentication =====
JWT_SECRET=your_jwt_secret_key_here
SESSION_SECRET=your_session_secret_here

# ===== Third-party Services =====
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# ===== Feature Flags =====
ENABLE_PAPER_TRADING=true
ENABLE_REAL_TIME_DATA=true
ENABLE_ADVANCED_CHARTS=true
```

### Step 3: Cloudflare Setup

```bash
# Install Wrangler CLI (if not already installed)
npm install -g @cloudflare/wrangler

# Authenticate with Cloudflare
wrangler login

# Create D1 database
wrangler d1 create foursight-db

# Create KV namespace
wrangler kv:namespace create foursight-kv
```

### Step 4: Database Setup

```bash
# Run migrations
npm run db:migrate

# Seed sample data (optional)
npm run db:seed
```

## Development

### Start Development Server

```bash
# Start all services (frontend + backend)
bun run dev
# or
npm run dev

# Frontend will be available at: http://localhost:3000
# Backend API will be available at: http://localhost:8787
```

### Development Commands

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend

# Watch mode for backend
npm run dev:backend:watch

# Build frontend
npm run build:frontend

# Build backend
npm run build:backend

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Folder Structure During Development

```
Improving-Stock-Prediction-Accuracy/
├── .env.local                    # Your local environment variables
├── .next/                        # Next.js build artifacts (generated)
├── dist/                         # Build output (generated)
├── node_modules/                 # Dependencies (generated)
├── frontend/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   └── styles/
├── backend/
│   ├── src/
│   └── wrangler.toml
└── docs/
```

### Hot Reload Setup

Both frontend and backend support hot reload:

- **Frontend**: Automatically reloads when files in `frontend/` change
- **Backend**: Automatically restarts when files in `backend/src/` change

### Debugging

**Frontend Debugging:**

```typescript
// Use React DevTools browser extension
// Chrome DevTools: F12 or Cmd+Option+I
// Check Network tab for API calls
```

**Backend Debugging:**

```bash
# Run with debug logging
DEBUG=* npm run dev:backend

# Or enable debug in environment
NODE_DEBUG=* npm run dev:backend
```

## Deployment

### Deploy to Cloudflare Pages & Workers

```bash
# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy

# Or deploy specific service
npm run deploy:frontend
npm run deploy:backend
```

### Environment Variables for Production

```bash
# Set production environment variables in Cloudflare dashboard
# Settings > Environment variables

# Copy from .env.production.example and update with production values
```

### Database Migrations in Production

```bash
# Run migrations on production database
npm run db:migrate:prod

# Backup database before migrations
npm run db:backup:prod
```

### Monitoring & Logs

```bash
# View Cloudflare Workers logs
wrangler tail

# View specific worker logs
wrangler tail --service backend
```

## Troubleshooting

### Issue: Port 3000 or 8787 already in use

```bash
# Find process using the port
lsof -i :3000  # or :8787

# Kill the process
kill -9 <PID>

# Or use different ports
PORT=3001 npm run dev:frontend
BACKEND_PORT=8788 npm run dev:backend
```

### Issue: Module not found errors

```bash
# Clean install dependencies
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: Cloudflare authentication fails

```bash
# Re-authenticate with Cloudflare
wrangler login

# Or use API token
export CLOUDFLARE_API_TOKEN=your_token
wrangler whoami
```

### Issue: Database connection errors

```bash
# Check database file exists
ls -la data/app.db

# Reset database
npm run db:reset

# Re-run migrations
npm run db:migrate
```

### Issue: TypeScript compilation errors

```bash
# Clear TypeScript cache
rm -rf .tsbuildinfo

# Rebuild
npm run build

# Check for type errors
npm run type-check
```

### Issue: npm/Bun installation slow

```bash
# Use npm cache clean
npm cache clean --force

# Try using a faster registry
npm config set registry https://registry.npmmirror.com

# Or install with Bun (faster)
bun install
```

## Performance Tips

1. **Use Bun** - It's 3-4x faster than npm for installing dependencies
2. **Enable SSD** - Ensure your drive is SSD for faster builds
3. **Increase Node heap** - For large projects:
   ```bash
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```
4. **Use development mode** - Don't minify during development
5. **Cache dependencies** - Use npm/yarn cache for faster rebuilds

## Getting Help

If you encounter issues:

1. Check [Troubleshooting](#troubleshooting) section above
2. Search [GitHub Issues](https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy/issues)
3. Start a [GitHub Discussion](https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy/discussions)
4. Check project [Documentation](./docs)

## Next Steps

After setup is complete:

1. Read [Architecture Documentation](./ARCHITECTURE.md)
2. Review [API Documentation](./API.md)
3. Check [Contributing Guidelines](./CONTRIBUTING.md)
4. Start making changes!
