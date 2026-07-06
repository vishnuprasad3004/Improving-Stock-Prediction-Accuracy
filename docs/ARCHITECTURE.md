# System Architecture

High-level overview of Foursight's system design and architecture.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Browser (Chrome, Firefox, Safari, Edge)                 │   │
│  │  ┌──────────────────────────────────────────────────┐    │   │
│  │  │  Next.js Frontend Application (TypeScript/React) │    │   │
│  │  │  - Dashboard                                      │    │   │
│  │  │  - Charts & Technical Analysis                    │    │   │
│  │  │  - Portfolio Management                           │    │   │
│  │  │  - Watchlists                                     │    │   │
│  │  └──────────────────────────────────────────────────┘    │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓ HTTPS
┌─────────────────────────────────────────────────────────────────┐
│                    Edge Layer (Cloudflare)                       │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Cloudflare Pages (CDN + Static Hosting)               │   │
│  │  - Edge Caching                                         │   │
│  │  - DDoS Protection                                      │   │
│  │  - SSL/TLS Encryption                                  │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓ REST API
┌─────────────────────────────────────────────────────────────────┐
│                   Application Layer                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Cloudflare Workers (Serverless Compute)               │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │  Hono Framework                                  │   │   │
│  │  │  - REST API Endpoints                            │   │   │
│  │  │  - Request Routing                               │   │   │
│  │  │  - Middleware (Auth, CORS, Validation)           │   │   │
│  │  │  - WebSocket Support                             │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
         ↓                    ↓                    ↓
┌──────────────┐    ┌──────────────────┐    ┌────────────────┐
│ Database     │    │ Cache Layer      │    │ External APIs  │
│ (D1/SQLite)  │    │ (KV Store)       │    │                │
│              │    │                  │    │ - NSE/BSE Data │
│ - Users      │    │ - Sessions       │    │ - Price Feeds  │
│ - Portfolios │    │ - Stock Data     │    │ - News/Events  │
│ - Trades     │    │ - Watchlists     │    │ - Indicators   │
│ - Stocks     │    │ - User Cache     │    └────────────────┘
└──────────────┘    └──────────────────┘
```

## Technology Stack Details

### Frontend Architecture

```
Next.js Application (TypeScript)
├── Pages & Routes (App Router)
│   ├── Dashboard (/dashboard)
│   ├── Market (/market)
│   ├── Portfolio (/portfolio)
│   └── Settings (/settings)
│
├── Components (React)
│   ├── Presentational Components
│   ├── Container Components
│   └── Layout Components
│
├── State Management
│   ├── React Query (Server State)
│   ├── Zustand (Client State)
│   └── Context API (Theme, Auth)
│
├── Services
│   ├── API Client (Fetch/Axios)
│   ├── WebSocket Client
│   └── Data Processing
│
├── Hooks
│   ├── Custom Data Fetching
│   ├── Form Handling
│   └── UI Interactions
│
└── Styling
    ├── Tailwind CSS
    ├── CSS Modules
    └── Design System
```

### Backend Architecture

```
Cloudflare Workers
├── Entry Point (index.ts)
│   └── Hono Application Setup
│
├── Routes (REST API)
│   ├── /api/v1/auth
│   │   ├── POST /register
│   │   ├── POST /login
│   │   └── POST /logout
│   │
│   ├── /api/v1/stocks
│   │   ├── GET /list
│   │   ├── GET /:symbol
│   │   ├── GET /:symbol/prices
│   │   └── GET /:symbol/indicators
│   │
│   ├── /api/v1/portfolio
│   │   ├── GET / (list portfolios)
│   │   ├── POST / (create portfolio)
│   │   ├── GET /:id
│   │   ├── PUT /:id
│   │   └── DELETE /:id
│   │
│   ├── /api/v1/trades
│   │   ├── POST / (execute trade)
│   │   ├── GET / (history)
│   │   ├── GET /:id
│   │   └── DELETE /:id (cancel)
│   │
│   └── /api/v1/watchlists
│       ├── GET /
│       ├── POST /
│       ├── PUT /:id
│       └── DELETE /:id
│
├── Middleware
│   ├── Authentication
│   ├── Authorization
│   ├── Rate Limiting
│   ├── CORS
│   ├── Logging
│   └── Error Handling
│
├── Services (Business Logic)
│   ├── Stock Service
│   ├── Portfolio Service
│   ├── Trade Service
│   ├── User Service
│   ├── Price Service
│   └── Analysis Service
│
├── Models (Data Layer)
│   ├── User
│   ├── Stock
│   ├── Portfolio
│   ├── Trade
│   ├── Watchlist
│   └── Price History
│
├── Utils
│   ├── Validation
│   ├── Formatting
│   ├── Calculations
│   ├── Date Utilities
│   └── Error Handling
│
└── Config
    ├── Database Connection
    ├── Cache Configuration
    └── API Keys
```

### Database Schema

```
Users Table
├── id (PRIMARY KEY)
├── email (UNIQUE)
├── password_hash
├── username
├── first_name
├── last_name
├── created_at
├── updated_at
└── settings (JSON)

Portfolios Table
├── id (PRIMARY KEY)
├── user_id (FOREIGN KEY)
├── name
├── initial_balance
├── current_balance
├── description
├── created_at
└── updated_at

Trades Table
├── id (PRIMARY KEY)
├── portfolio_id (FOREIGN KEY)
├── stock_symbol
├── trade_type (BUY/SELL)
├── quantity
├── price_per_unit
├── total_value
├── timestamp
├── status (PENDING/EXECUTED/CANCELLED)
└── notes

Stocks Table
├── symbol (PRIMARY KEY)
├── name
├── sector
├── market_cap
├── pe_ratio
├── dividend_yield
├── last_updated
└── metadata (JSON)

Price_History Table
├── id (PRIMARY KEY)
├── symbol (FOREIGN KEY)
├── open
├── high
├── low
├── close
├── volume
├── timestamp
└── period (1m/5m/15m/1h/1d)

Watchlists Table
├── id (PRIMARY KEY)
├── user_id (FOREIGN KEY)
├── name
├── description
├── created_at
└── updated_at

Watchlist_Items Table
├── id (PRIMARY KEY)
├── watchlist_id (FOREIGN KEY)
├── symbol (FOREIGN KEY)
└── added_at
```

## Data Flow

### User Authentication Flow

```
1. User submits credentials
   ↓
2. Frontend sends POST /api/v1/auth/login
   ↓
3. Backend validates credentials against database
   ↓
4. Backend generates JWT token
   ↓
5. Frontend stores JWT in secure cookie
   ↓
6. Subsequent requests include JWT in Authorization header
   ↓
7. Middleware verifies JWT before processing request
```

### Trade Execution Flow

```
1. User submits buy/sell order
   ↓
2. Frontend sends POST /api/v1/trades to backend
   ↓
3. Backend validates order (balance, market hours, etc.)
   ↓
4. Backend updates portfolio balance
   ↓
5. Backend records trade in database
   ↓
6. Backend fetches current stock price
   ↓
7. Backend calculates realized/unrealized P&L
   ↓
8. Backend returns trade confirmation to frontend
   ↓
9. Frontend updates portfolio display
```

### Stock Data Update Flow

```
1. External API (NSE/BSE) provides price updates
   ↓
2. Backend receives price update via scheduled job/webhook
   ↓
3. Backend stores price in database
   ↓
4. Backend updates KV cache with latest price
   ↓
5. Frontend polls /api/v1/stocks/:symbol endpoint
   ↓
6. Backend returns cached data (fast response)
   ↓
7. Frontend updates charts and displays
```

## Caching Strategy

```
┌──────────────────────────────────┐
│   Request from Frontend           │
└──────────────────────────────────┘
           ↓
┌──────────────────────────────────┐
│   Check KV Cache                  │
│   (Cloudflare Edge Cache)         │
└──────────────────────────────────┘
           ↓
      Cache Hit?
      ↙        ↘
    YES        NO
    ↓           ↓
Return      Database
Cached      Query
Data        ↓
        Update Cache
        ↓
       Return Data
```

**Cache Strategies:**
- Stock prices: 5 second TTL
- Historical data: 1 hour TTL
- User sessions: 24 hour TTL
- Market movers: 10 second TTL

## Security Architecture

```
┌─────────────────────────────────────────┐
│     Cloudflare DDoS Protection          │
│     & WAF Rules                         │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│     SSL/TLS Encryption                  │
│     (In Transit)                        │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│     CORS Validation                     │
│     & Request Validation                │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│     JWT Authentication                  │
│     & Authorization                     │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│     Rate Limiting                       │
│     & Abuse Prevention                  │
└─────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────┐
│     Database (Encrypted)                │
│     & Data at Rest                      │
└─────────────────────────────────────────┘
```

## Scalability Considerations

### Horizontal Scaling
- Cloudflare Workers automatically scale horizontally
- Database replicas for read scaling
- KV store distributed across edge locations

### Vertical Optimization
- Code splitting and lazy loading on frontend
- Query optimization on backend
- Efficient caching strategies

### Performance Optimization
1. **CDN Caching**: Static assets cached at edge
2. **Database Indexing**: Optimized for common queries
3. **API Optimization**: Pagination and filtering
4. **Frontend Optimization**: Code splitting, lazy loading

## Disaster Recovery

```
Regular Backups
    ↓
Backup Verification
    ↓
Disaster Recovery Plan
    ↓
Point-in-Time Recovery Capability
```

## Deployment Pipeline

```
Code Commit
    ↓
GitHub Actions CI
├── Lint & Format Check
├── Unit Tests
├── Build Frontend
├── Build Backend
└── Type Checking
    ↓
Manual Approval
    ↓
Cloudflare Deployment
├── Deploy Frontend (Pages)
├── Deploy Backend (Workers)
└── Database Migrations
    ↓
Smoke Tests
    ↓
Production Live
```

## Monitoring & Observability

```
Application Metrics
├── Request count/latency
├── Error rates
├── Resource usage
└── User analytics

Cloudflare Analytics
├── Traffic patterns
├── Edge performance
├── Security events
└── Cache hit rates

Database Monitoring
├── Query performance
├── Connection pools
├── Backup status
└── Storage usage

Alerting
├── Error thresholds
├── Performance degradation
├── Service unavailability
└── Security anomalies
```

## Future Architecture Considerations

1. **Machine Learning Integration**: Stock prediction models
2. **Real-time WebSocket**: Live price streaming
3. **Advanced Analytics**: Backtesting engine
4. **Mobile Apps**: React Native / Flutter
5. **Microservices**: Domain-driven decomposition
6. **GraphQL**: Alternative to REST API
