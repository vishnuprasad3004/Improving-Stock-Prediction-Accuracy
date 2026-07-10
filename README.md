# Foursight - Stock Prediction & Paper Trading Platform

<div align="center">

[![Website](https://img.shields.io/badge/Website-foursight.harshiyer.in-blue?style=flat-square)](https://foursight.harshiyer.in)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-95.1%25-blue?style=flat-square)](#techstack)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

**Your AI-Powered Paper Trading & Stock Analysis Platform for the Indian Stock Market**

[Live Demo](https://foursight.harshiyer.in) • [Documentation](#documentation) • [Getting Started](#getting-started)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Benefits](#benefits)
- [Techstack](#techstack)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## 🎯 Overview

**Foursight** is a cutting-edge web application designed to empower Indian stock market enthusiasts with a comprehensive paper trading and analysis platform. Whether you're a beginner looking to learn trading strategies or an experienced investor testing new approaches, Foursight provides the tools to practice, analyze, and improve your trading decisions in a **risk-free environment**.

### Why Foursight?

- **Learn Without Loss**: Perfect your trading strategies without risking real capital
- **Real-Time Data**: Access live market data from NSE and BSE
- **Data-Driven Decisions**: Advanced charting and analytics for informed trading
- **Global Access**: Deployed worldwide on Cloudflare's edge network
- **Production-Ready**: Built with modern tech stack and best practices

---

## ✨ Key Features

### 📊 Live Market Data
- Real-time stock prices and market updates for Indian stocks (NSE & BSE)
- Support for all major equity scrips
- Market depth and order book information

### 📈 Interactive Charts & Analysis
- Historical data visualization with interactive Highcharts
- Technical analysis tools and indicators
- Customizable timeframes and chart types
- Price action analysis capabilities

### 💼 Paper Trading Simulation
- Simulate real-world trading without capital risk
- Execute buy/sell orders with virtual funds
- Track trade execution and profit/loss in real-time
- Practice various trading strategies

### 🎯 Portfolio Management
- Build and manage multiple virtual portfolios
- Real-time portfolio valuation and performance tracking
- Position-level profit/loss monitoring
- Historical trade records and analytics

### 📌 Watchlists & Market Insights
- Create and organize personal watchlists
- Track top market movers and gainers/losers
- Get market trends and sector performance data
- Custom alerts and notifications (feature-ready)

### 🔐 Secure Authentication
- JWT-based authentication system
- Secure session management
- Password encryption with bcrypt

### 📱 Responsive UI
- Mobile-friendly interface with Tailwind CSS
- Modern, intuitive design
- Accessible components using Radix UI
- Real-time notifications with Toast system

---

## 🎁 Benefits

### For Beginners
- **Risk-Free Learning**: Hone your trading skills in a safe environment
- **Zero Financial Loss**: Learn from mistakes without losing money
- **Market Simulation**: Practice in real market conditions

### For Traders
- **Improved Decision Making**: Gain valuable experience before live trading
- **Strategy Backtesting**: Test multiple strategies simultaneously
- **Market Research**: Access historical data and trends

### For Investors
- **Portfolio Tracking**: Monitor your paper trading progress
- **Performance Analytics**: Detailed P&L analysis and metrics
- **Long-Term Success**: Refine strategies based on historical data

---

## 🛠 Techstack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) - React-based full-stack framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) (95.1%) + JavaScript (4.9%)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Charting**: 
  - [Highcharts](https://www.highcharts.com/) - Advanced financial charts
  - [Recharts](https://recharts.org/) - React charting library
  - [React Minimal Pie Chart](https://www.npmjs.com/package/react-minimal-pie-chart)
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **Utilities**: Moment.js, Cookie management, Form handling
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

### Backend
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless edge computing
- **Framework**: [Hono](https://hono.dev/) - Lightweight web framework for edge runtime
- **Database**: [Cloudflare D1](https://developers.cloudflare.com/d1/) - Serverless SQLite database
- **Cache/Storage**: [Cloudflare KV](https://developers.cloudflare.com/kv/) - Distributed key-value store

### Infrastructure
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) (Frontend)
- **Compute**: [Cloudflare Workers](https://workers.cloudflare.com/) (Backend)
- **Global Deployment**: Cloudflare's global edge network

### Development Tools
- **Package Manager**: npm / Bun
- **Linting**: ESLint with Next.js config
- **Build Tool**: Next.js bundler
- **Dev Dependencies**: TypeScript, ESLint, PostCSS, Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** or **Bun** package manager
- **Git** for version control
- **Cloudflare Account** (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy.git
   cd Improving-Stock-Prediction-Accuracy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The API will be available at `http://localhost:8787`

### Build for Production

```bash
npm run build
npm start
```

---

## 🔧 Environment Setup

Create a `.env.local` file in the root directory with the following variables:

### Application Configuration
```env
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8787
```

### Cloudflare Configuration
```env
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ZONE_ID=your_zone_id_here
CLOUDFLARE_DATABASE_ID=your_d1_database_id_here
CLOUDFLARE_KV_NAMESPACE_ID=your_kv_namespace_id_here
```

### Stock Market APIs
```env
NSE_API_KEY=your_nse_api_key_here
BSE_API_KEY=your_bse_api_key_here
POLYGON_API_KEY=your_polygon_api_key_here
```

### Authentication
```env
JWT_SECRET=your_jwt_secret_key_here
SESSION_SECRET=your_session_secret_here
JWT_EXPIRY=7d
```

### Email Configuration
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=noreply@foursight.com
```

### Feature Flags
```env
ENABLE_PAPER_TRADING=true
ENABLE_REAL_TIME_DATA=true
ENABLE_ADVANCED_CHARTS=true
ENABLE_SOCIAL_FEATURES=false
```

For complete environment configuration, see [.env.example](.env.example)

---

## 📁 Project Structure

```
Improving-Stock-Prediction-Accuracy/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   ├── (routes)/                 # Page routes
│   └── layout.tsx                # Root layout
├── components/                   # Reusable React components
│   ├── ui/                       # UI component library
│   ├── charts/                   # Chart components
│   └── forms/                    # Form components
├── lib/                          # Utility functions
│   ├── api.ts                    # API client setup
│   ├── auth.ts                   # Authentication helpers
│   └── utils.ts                  # Common utilities
├── styles/                       # Global styles
│   └── globals.css               # Tailwind CSS
├── public/                       # Static assets
│   ├── images/                   # Image assets
│   └── icons/                    # Icon files
├── docs/                         # Documentation
├── middleware.ts                 # Next.js middleware
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 📚 Documentation

### Available Documentation
- **User Guide**: See `docs/USER_GUIDE.md` for detailed usage instructions
- **API Reference**: See `docs/API.md` for API endpoint documentation
- **Contributing Guide**: See `CONTRIBUTING.md` for development guidelines

### Screenshots
- 📊 Dashboard - Real-time market overview
- 📈 Stock Page - Detailed stock analysis with charts
- 🎯 Portfolio - Virtual portfolio tracking
- ⭐ Watchlist - Custom stock monitoring
- 📊 Top Movers - Market leaders and laggards

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/Improving-Stock-Prediction-Accuracy.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m "feat: Add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Link any related issues
   - Wait for review and feedback

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules: `npm run lint`
- Format code with Prettier (auto-formatted on commit)
- Write descriptive commit messages

### Reporting Issues
Found a bug? Have a feature request? Please [open an issue](https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy/issues) with:
- Clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Your environment details

---

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a complete list of changes in each version.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Free for personal and commercial use
- ✅ Can modify and distribute
- ✅ Must include license and copyright notice
- ❌ No warranty or liability

---

## 💬 Support & Community

### Get Help
- **Documentation**: Visit our [docs](./docs) folder
- **Issues**: Search [existing issues](https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy/issues)
- **Email**: Open an issue for priority support

### Connect With Us
- **Website**: [foursight.harshiyer.in](https://foursight.harshiyer.in)
- **GitHub**: [vishnuprasad3004](https://github.com/vishnuprasad3004)

### Community Resources
- **Discussions**: Share ideas and ask questions
- **Wiki**: Community-maintained documentation
- **Projects**: Track development progress

---

## 🎓 Learning Resources

### Stock Market Basics
- [NSE India - Educational Resources](https://www.nseindia.com/)
- [BSE India - Investor Information](https://www.bseindia.com/)

### Technical Analysis
- [Investopedia - Technical Analysis](https://www.investopedia.com/terms/t/technicalanalysis.asp)
- [TradingView - Learning](https://www.tradingview.com/education/)

### Web Development
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🚀 Roadmap

### Upcoming Features
- [ ] Advanced ML-based price predictions
- [ ] Options trading simulation
- [ ] Social trading and strategy sharing
- [ ] Mobile app (React Native)
- [ ] Real trading integration (with safety limits)
- [ ] API for third-party integrations
- [ ] Advanced backtesting engine

### Current Focus
- Improving prediction accuracy
- Enhancing real-time data handling
- Building scalable backend infrastructure

---

## ⚡ Performance & Optimization

### Current Metrics
- **Frontend**: Next.js with SSR for optimal performance
- **Backend**: Cloudflare Workers for sub-100ms latency globally
- **Database**: Optimized D1 queries with intelligent caching
- **Caching**: Multi-level caching strategy with KV store

### Performance Tips
- Browser caching enabled for static assets
- Optimized images and lazy loading
- Database query optimization
- Edge-side caching with Cloudflare

---

## 🔒 Security

### Security Features
- ✅ HTTPS enforcement
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ CORS protection
- ✅ Rate limiting on API endpoints
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF token validation

### Responsible Disclosure
Found a security vulnerability? Please email us privately instead of using issues. We take security seriously and will respond promptly.

---

## 📊 Analytics & Monitoring

- **Error Tracking**: Integrated Sentry for error monitoring
- **Analytics**: Vercel Analytics for performance insights
- **Database Logging**: Optional query logging for debugging
- **Request Logging**: Track API usage and performance

---

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Cloudflare**: For reliable infrastructure and edge computing
- **Open Source Community**: For all the incredible libraries used

---

## 💰 Monetization & Support

Foursight is open-source and free to use. If you find it valuable, consider:
- ⭐ Star the repository
- 📣 Share with your network
- 🐛 Report bugs and suggest improvements
- 💡 Contribute code and documentation

---

## 📞 Contact & Social

- **GitHub**: [@vishnuprasad3004](https://github.com/vishnuprasad3004)
- **Website**: [foursight.harshiyer.in](https://foursight.harshiyer.in)

---

<div align="center">

### Made with ❤️ by [Vishnu Prasad](https://github.com/vishnuprasad3004)

**Last Updated**: July 2026

[⬆ back to top](#foursight---stock-prediction--paper-trading-platform)

</div>
