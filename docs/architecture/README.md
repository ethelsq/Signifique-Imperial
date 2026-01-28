# Architecture Documentation

System design, component architecture, and technical decisions.

## 📐 Architecture Overview

**Signifique Imperial** is a full-stack React + Vite application with:

- **Frontend:** React 19 with TypeScript, Tailwind CSS
- **Build:** Vite 6 with ES modules
- **AI Integration:** Google Gemini API for brand analysis
- **State Management:** React hooks (useState)
- **Styling:** Custom Tailwind utilities + inline styles

## 🏗️ System Components

### App Layer (`App.tsx`)
- Main application component with three tab sections
- Handles state management for activeTab, loading, analysis results
- Form submission to Gemini API
- Result display with grid layouts

### Components
- `PillarCard.tsx` - Reusable card for INCAS methodology pillars
- Custom Tailwind utilities for gold gradient and obsidian panel styling

### Services
- `geminiService.ts` - Gemini API integration with structured JSON responses
- Uses extended thinking (4000 tokens) for sophisticated analysis

## 🔄 Data Flow

1. User submits brand archaeology form
2. `handleArcheology()` calls `performBrandArcheology()`
3. Gemini API returns structured JSON (BrandArcheologyResult)
4. Results rendered in multi-card layout

## 📦 Key Files

- `types.ts` - TypeScript interfaces (Pillar, RitualPhase, BrandArcheologyResult)
- `constants.tsx` - INCAS_PILLARS and RITUAL_CYCLES data
- `vite.config.ts` - Build configuration with environment variable injection

## 🚀 Deployment

- Vite build to `dist/`
- Static hosting ready (GitHub Pages, Vercel, Netlify)
- Environment variables via `.env.local`

---

See [CLAUDE.md](../.claude/CLAUDE.md) for development patterns and critical files.
