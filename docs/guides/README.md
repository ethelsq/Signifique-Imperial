# Developer Guides

Setup, deployment, and troubleshooting guides.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set Gemini API key
echo "GEMINI_API_KEY=your-key-here" > .env.local

# Start development server
npm run dev
```

Server runs on `http://localhost:3000`

## 🏗️ Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to hosting
# Static files in dist/ can be deployed to:
# - GitHub Pages
# - Vercel (recommended for Vite projects)
# - Netlify
# - Any static host
```

## 📝 Environment Setup

### Required
- Node.js 18+ (currently v22.22.0)
- npm 10.x (currently 10.9.4)
- Git 2.39+ (currently 2.39.5)
- GitHub CLI for repository operations

### Optional but Recommended
- Supabase CLI (database management)
- Docker Desktop (local Supabase, MCP toolkit)
- Railway (cloud deployment)

## 🔧 Common Tasks

### Update Dependencies
```bash
npm update
```

### Run TypeScript Check
```bash
npm run typecheck
```

### Format Code
See project configuration for preferred formatter

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
npm run dev
```

### Gemini API Errors
- Verify `GEMINI_API_KEY` in `.env.local`
- Check API quota and rate limits
- See `geminiService.ts` for implementation details

### Build Failures
```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📚 References

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Google Gemini API](https://ai.google.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)

---

*For development workflow, see [CLAUDE.md](../.claude/CLAUDE.md)*
