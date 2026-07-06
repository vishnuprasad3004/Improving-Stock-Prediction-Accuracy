# API Reference

Complete API documentation for Foursight backend services.

## Base URL

```
Development: http://localhost:8787/api/v1
Production: https://api.foursight.harshiyer.in/api/v1
```

## Authentication

All API endpoints require authentication via JWT (JSON Web Token) except for public endpoints.

### Authentication Header

```
Authorization: Bearer <JWT_TOKEN>
```

### Getting a Token

```bash
curl -X POST http://localhost:8787/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "usr_123",
    "email": "user@example.com",
    "username": "johndoe"
  }
}
```

---

## Rate Limiting

- **Requests per minute**: 100
- **Requests per hour**: 1000

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1234567890
```

---

## Response Format

All API responses follow this format:

**Success (2xx):**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error (4xx/5xx):**
```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Detailed error message",
    "details": { ... }
  }
}
```

---

## Authentication Endpoints

### Register User

**POST** `/auth/register`

Creates a new user account.

**Request:**
```json
{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "usr_123",
    "email": "user@example.com",
    "username": "johndoe",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Error Responses:**
- `400` - Invalid email or password format
- `409` - Email already registered

---

### Login

**POST** `/auth/login`

Authenticates a user and returns a JWT token.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "usr_123",
      "email": "user@example.com",
      "username": "johndoe"
    }
  }
}
```

**Error Responses:**
- `401` - Invalid email or password
- `404` - User not found

---

### Logout

**POST** `/auth/logout`

Invalidates the user's session (requires authentication).

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## Stock Endpoints

### List All Stocks

**GET** `/stocks`

Retrieves a paginated list of all available stocks.

**Query Parameters:**
- `page` (optional): Page number, default: 1
- `limit` (optional): Items per page, default: 50, max: 100
- `search` (optional): Search by symbol or name
- `sector` (optional): Filter by sector

**Example:**
```bash
GET /stocks?page=1&limit=50&search=TCS
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "stocks": [
      {
        "symbol": "TCS",
        "name": "Tata Consultancy Services",
        "sector": "IT",
        "marketCap": 15000000000,
        "peRatio": 25.5,
        "dividendYield": 1.2,
        "currentPrice": 3500.50,
        "change": 45.25,
        "changePercent": 1.31
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 5000,
      "totalPages": 100
    }
  }
}
```

---

### Get Stock Details

**GET** `/stocks/:symbol`

Gets detailed information for a specific stock.

**Parameters:**
- `symbol` (required): Stock symbol (e.g., TCS, INFY)

**Example:**
```bash
GET /stocks/TCS
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "symbol": "TCS",
    "name": "Tata Consultancy Services",
    "sector": "Information Technology",
    "industry": "IT Services",
    "marketCap": 15000000000,
    "peRatio": 25.5,
    "pbRatio": 8.2,
    "dividendYield": 1.2,
    "eps": 137.50,
    "bookValue": 427.15,
    "currentPrice": 3500.50,
    "52WeekHigh": 3850.00,
    "52WeekLow": 2900.00,
    "averageVolume": 5000000,
    "lastUpdated": "2024-01-15T15:30:00Z"
  }
}
```

---

### Get Price History

**GET** `/stocks/:symbol/prices`

Retrieves historical price data for a stock.

**Parameters:**
- `symbol` (required): Stock symbol
- `from` (optional): Start date (ISO 8601 format)
- `to` (optional): End date (ISO 8601 format)
- `interval` (optional): Candle interval (1m, 5m, 15m, 1h, 1d, 1w, 1mo)

**Example:**
```bash
GET /stocks/TCS/prices?from=2024-01-01&to=2024-01-15&interval=1d
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "symbol": "TCS",
    "interval": "1d",
    "prices": [
      {
        "timestamp": "2024-01-15T15:30:00Z",
        "open": 3450.00,
        "high": 3520.00,
        "low": 3440.00,
        "close": 3500.50,
        "volume": 2500000
      }
    ]
  }
}
```

---

### Get Market Movers

**GET** `/stocks/market/movers`

Gets top gainers and losers.

**Query Parameters:**
- `type` (optional): 'gainers' or 'losers', default: both
- `limit` (optional): Number of results, default: 10, max: 50

**Example:**
```bash
GET /stocks/market/movers?type=gainers&limit=10
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "gainers": [
      {
        "symbol": "WIPRO",
        "name": "Wipro Limited",
        "currentPrice": 620.50,
        "change": 25.50,
        "changePercent": 4.28,
        "volume": 3500000
      }
    ],
    "losers": [
      {
        "symbol": "INFY",
        "name": "Infosys Limited",
        "currentPrice": 1820.00,
        "change": -15.00,
        "changePercent": -0.82,
        "volume": 2000000
      }
    ]
  }
}
```

---

## Portfolio Endpoints

### List User Portfolios

**GET** `/portfolio`

Gets all portfolios for the authenticated user.

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "portfolios": [
      {
        "id": "pf_123",
        "name": "My Trading Portfolio",
        "initialBalance": 100000,
        "currentBalance": 105234.50,
        "totalReturn": 5234.50,
        "totalReturnPercent": 5.23,
        "createdAt": "2024-01-01T10:00:00Z",
        "updatedAt": "2024-01-15T15:30:00Z"
      }
    ]
  }
}
```

---

### Create Portfolio

**POST** `/portfolio`

Creates a new portfolio for the user.

**Request:**
```json
{
  "name": "My Trading Portfolio",
  "initialBalance": 100000,
  "description": "Learning portfolio for stock trading"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "pf_123",
    "name": "My Trading Portfolio",
    "initialBalance": 100000,
    "currentBalance": 100000,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### Get Portfolio Details

**GET** `/portfolio/:id`

Gets detailed information for a specific portfolio.

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "pf_123",
    "name": "My Trading Portfolio",
    "initialBalance": 100000,
    "currentBalance": 105234.50,
    "totalReturn": 5234.50,
    "totalReturnPercent": 5.23,
    "holdings": [
      {
        "symbol": "TCS",
        "quantity": 10,
        "avgCost": 3400,
        "currentPrice": 3500.50,
        "currentValue": 35005,
        "unrealizedGain": 1005,
        "unrealizedGainPercent": 2.95
      }
    ],
    "createdAt": "2024-01-01T10:00:00Z"
  }
}
```

---

### Update Portfolio

**PUT** `/portfolio/:id`

Updates portfolio details.

**Request:**
```json
{
  "name": "Updated Portfolio Name",
  "description": "Updated description"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "pf_123",
    "name": "Updated Portfolio Name"
  }
}
```

---

### Delete Portfolio

**DELETE** `/portfolio/:id`

Deletes a portfolio.

**Response:** `204 No Content`

---

## Trade Endpoints

### Execute Trade

**POST** `/trades`

Executes a buy or sell order.

**Request:**
```json
{
  "portfolioId": "pf_123",
  "symbol": "TCS",
  "type": "BUY",
  "quantity": 10,
  "price": 3500.50
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "tr_123",
    "portfolioId": "pf_123",
    "symbol": "TCS",
    "type": "BUY",
    "quantity": 10,
    "pricePerUnit": 3500.50,
    "totalValue": 35005,
    "status": "EXECUTED",
    "timestamp": "2024-01-15T15:30:00Z"
  }
}
```

---

### Get Trade History

**GET** `/trades`

Gets all trades for a portfolio.

**Query Parameters:**
- `portfolioId` (required): Portfolio ID
- `page` (optional): Page number
- `limit` (optional): Items per page
- `status` (optional): Filter by status (PENDING, EXECUTED, CANCELLED)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "trades": [
      {
        "id": "tr_123",
        "symbol": "TCS",
        "type": "BUY",
        "quantity": 10,
        "pricePerUnit": 3500.50,
        "totalValue": 35005,
        "status": "EXECUTED",
        "timestamp": "2024-01-15T15:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 100
    }
  }
}
```

---

### Cancel Trade

**DELETE** `/trades/:id`

Cancels a pending trade.

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Trade cancelled successfully"
}
```

---

## Watchlist Endpoints

### List Watchlists

**GET** `/watchlists`

Gets all watchlists for the authenticated user.

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "watchlists": [
      {
        "id": "wl_123",
        "name": "My Favorites",
        "description": "Stocks I'm watching",
        "stocks": ["TCS", "INFY", "WIPRO"],
        "createdAt": "2024-01-01T10:00:00Z"
      }
    ]
  }
}
```

---

### Create Watchlist

**POST** `/watchlists`

Creates a new watchlist.

**Request:**
```json
{
  "name": "My Favorites",
  "description": "Stocks I'm watching"
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": "wl_123",
    "name": "My Favorites",
    "stocks": []
  }
}
```

---

### Add Stock to Watchlist

**POST** `/watchlists/:id/stocks`

Adds a stock to a watchlist.

**Request:**
```json
{
  "symbol": "TCS"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "wl_123",
    "stocks": ["TCS"]
  }
}
```

---

### Remove Stock from Watchlist

**DELETE** `/watchlists/:id/stocks/:symbol`

Removes a stock from a watchlist.

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Stock removed from watchlist"
}
```

---

## Error Codes

| Code | Status | Description |
|------|--------|-------------|
| INVALID_REQUEST | 400 | Invalid request parameters |
| UNAUTHORIZED | 401 | Authentication required |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource conflict |
| RATE_LIMITED | 429 | Too many requests |
| SERVER_ERROR | 500 | Internal server error |

---

## Pagination

Paginated endpoints support:

```
?page=1&limit=50
```

Response includes:
```json
{
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 1000,
    "totalPages": 20
  }
}
```

---

## WebSocket API

Real-time price updates via WebSocket:

```javascript
const ws = new WebSocket('wss://api.foursight.harshiyer.in/ws');

// Subscribe to stock prices
ws.send(JSON.stringify({
  type: 'SUBSCRIBE',
  symbols: ['TCS', 'INFY']
}));

// Listen for updates
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};
```

---

## Rate Limiting

All API endpoints are rate limited to prevent abuse:

- **100 requests per minute** (per user)
- **1000 requests per hour** (per user)

When rate limited, the API returns:
```
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1234567890
```

---

## Support & Documentation

- **Issues**: [GitHub Issues](https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/vishnuprasad3004/Improving-Stock-Prediction-Accuracy/discussions)
- **Architecture**: See [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Setup Guide**: See [SETUP.md](./SETUP.md)
