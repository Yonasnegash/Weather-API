# 🌤️ Weather API

A Node.js + Express API that retrieves and caches weather data for a given location using the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-data-editions).
Project URL: https://roadmap.sh/projects/weather-api-wrapper-service

## ✨ Features

- Retrieve current and forecast weather by city
- Redis caching to reduce API calls
- Rate limiting to prevent abuse
- Graceful error handling (invalid cities, API downtime)
- TypeScript support

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Redis server (Docker or local)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/Yonasnegash/Weather-API
cd weatherapi
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

```env
PORT=3001
WEATHER_API_KEY=your_visual_crossing_api_key
REDIS_HOST=localhost
REDIS_PORT=6379
```

4. Start Redis
Using Docker

```bash
docker run -d --name redis -p 6379:6379 redis:8
```

5. Run the server

```bash
npm run dev
```

### Usage
Endpoint

```bash
/api/weather/:location?ttl=
```

## Licence
MIT © 2025