# Environment Configuration

## Environment Files

This project uses Vite's environment variable system with different configurations for development and production.

### Available Environment Files

- **`.env.development`** - Used when running `npm run dev`
- **`.env.production`** - Used when running `npm run build`
- **`.env.example`** - Template file showing all available variables

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API endpoint URL | `http://localhost:3000/api` |
| `VITE_APP_ENV` | Application environment | `development` |
| `VITE_ENABLE_DEBUG` | Enable console debug logging | `true` |
| `VITE_CACHE_DURATION` | Frontend cache duration (ms) | `300000` (5 min) |

## Setup Instructions

### Development
```bash
# Uses .env.development automatically
npm run dev
```

### Production Build
```bash
# Uses .env.production automatically
npm run build
```

### Development Build
```bash
# Build with development settings
npm run build:dev
```

## Customization

1. Copy `.env.example` to create custom local overrides:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your specific configuration (this file is gitignored)

3. Update production API URL in `.env.production`:
   ```env
   VITE_API_BASE_URL=https://your-production-api.com/api
   ```

## Debug Mode

When `VITE_ENABLE_DEBUG=true`, the BlogService will log:
- 🚀 Initialization info
- 🌐 API requests
- ✅ Successful responses
- 💾 Cache hits
- ❌ Errors

Set to `false` in production to reduce console noise.

## Notes

- All Vite environment variables must be prefixed with `VITE_`
- Variables are embedded at build time
- Changes to `.env.*` files require restarting the dev server
