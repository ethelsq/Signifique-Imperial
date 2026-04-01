# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Signifique Imperial is an AI-powered brand strategy system that combines the INCAS methodology (Inspiração, Nobreza, Conexão, Ancestralidade, Significado) with modern branding theory from Aaker (Brand Essence) and Byron Sharp (Mental Availability). The application provides three main interfaces:

1. **Metodologia INCAS** - Displays five strategic pillars with their concepts and integration strategies
2. **Arqueologia de IA** - Interactive form that performs brand archaeology analysis using Google's Gemini AI
3. **Ritual de Ciclo** - Visualizes brand lifecycle phases mapped to Incan agricultural cycles (Tarpuy, Poqoy, Aymuray, Samay, Muyu)

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (no component library)
- **UI Icons**: Lucide React
- **AI**: Google Gemini API with structured JSON output
- **Module System**: ES Modules (type: module in package.json)
- **Meta-Framework**: Synkra AIOS (AI-Orchestrated System for Full Stack Development)

## Project Structure

```
project-root/
├── App.tsx                      # Main app with three tab sections (strategy, archeology, ritual)
├── components/
│   └── PillarCard.tsx          # Reusable card component for INCAS pillars
├── services/
│   └── geminiService.ts        # Gemini API integration for brand analysis
├── constants.tsx               # INCAS_PILLARS and RITUAL_CYCLES data
├── types.ts                    # TypeScript interfaces (Pillar, RitualPhase, BrandArcheologyResult)
├── index.tsx                   # React DOM entry point
├── vite.config.ts              # Vite configuration with API key injection
├── tsconfig.json               # TypeScript config with @ path alias
│
├── .aios-core/                 # AIOS Framework (do not modify - managed by framework)
│   ├── agents/                 # Agent persona definitions
│   ├── tasks/                  # Executable task workflows
│   ├── workflows/              # Multi-step workflow definitions
│   ├── templates/              # Document and code templates
│   ├── checklists/             # Validation and review checklists
│   └── rules/                  # Framework rules and patterns
│
├── .claude/                    # Claude Code configuration
│   ├── CLAUDE.md              # This file
│   ├── commands/              # Custom Claude Code commands
│   └── rules/                 # Development rules (including MCP usage)
│
├── .agent/                    # Project-specific agent workflows
│   └── workflows/             # Custom workflow definitions
│
├── .antigravity/              # AIOS companion framework
│   └── agents/                # Project-specific agent definitions
│
├── docs/                      # Project documentation
│   ├── stories/               # Development stories (numbered)
│   ├── prd/                   # Product requirement documents
│   ├── architecture/          # System architecture documentation
│   └── guides/                # User and developer guides
│
└── .env.local                 # Environment variables (API keys, secrets)

Key Config:
- Path alias: @/* maps to project root for imports
- Vite defines process.env.GEMINI_API_KEY from .env.local
- Target: ES2022 with JSX support (react-jsx)
```

## Critical Files to Understand

- **App.tsx**: 315 lines, handles tab switching, form state, API calls, and UI rendering. The `handleArcheology` function triggers the Gemini analysis.
- **geminiService.ts**: Calls Gemini 3 Pro Preview with structured JSON response schema. Returns parsed JSON matching BrandArcheologyResult interface.
- **types.ts**: Three main interfaces. BrandArcheologyResult has 7 required fields: archetype, essence, toneOfVoice, attributes (array), distinctiveAssets (array), signatureStory, sovereigntyIndex (0-100).

## Common Commands

```bash
npm install              # Install dependencies
npm run dev              # Start Vite dev server (port 3000)
npm run build            # Build for production
npm run preview          # Preview production build locally
```

## Development Notes

### Environment Variables

- `.env.local` must contain `GEMINI_API_KEY=your-api-key`
- The key is injected at build time via vite.config.ts `define` option
- API key is exposed in client-side code (not sensitive for this use case)

### Styling Details

- Custom Tailwind utilities: `gold-gradient`, `obsidian-panel`
- Primary color: `#bf953f` (gold)
- Secondary color: `#8b0000` (dark red)
- Theme: Dark background (`#0a0a0a`) with gold accents
- Font families used: `cinzel` (headings), `playfair` (italic text)

### Gemini Integration

The `performBrandArcheology` function:
- Uses `gemini-3-pro-preview` model with 4000 token thinking budget
- Sends a Portuguese-language prompt asking for sophisticated brand analysis
- Requires response as JSON with specific schema via `responseSchema`
- Parses response text as JSON and returns typed object

### Component Patterns

- `PillarCard.tsx` demonstrates component composition with:
  - Props interface (PillarCardProps)
  - Inline styling with data attributes (border color via pillar.color)
  - Tailwind classes with hover/transition states
  - Emoji icons from data (pillar.icon)

### State Management

App component manages three state values:
- `activeTab`: Controls which section renders (strategy, archeology, ritual)
- `loading`: Boolean for submit button disabled state during API call
- `analysis`: Nullable BrandArcheologyResult, displayed conditionally when populated
- `formData`: Object with brandName, niche, values fields

## Architecture Patterns

### UI Structure
The App uses a two-column layout (sidebar navigation on left, content on right) that collapses to single column on mobile. The sidebar contains tab buttons, branding header, and a footer quote. Main content area uses conditional rendering based on activeTab.

### Data Flow
1. User fills form on "Arqueologia" tab with brand info
2. handleArcheology submits to Gemini API
3. Response parsed into BrandArcheologyResult object
4. Analysis displayed in multi-card grid layout (main card, sovereignty index, narrative, assets)

### CSS Classes
Uses Tailwind with custom utilities. Important classes:
- `obsidian-panel` - Background styling (appears to be a custom utility)
- `gold-gradient` - Text gradient using gold color
- `animate-fadeIn`, `animate-slideUp` - Custom animations
- Responsive grid: `grid-cols-1 md:col-span-8 lg:grid-cols-3`

## Important Considerations

1. **Portuguese Content**: All text, prompts, and labels are in Portuguese. Maintain language consistency.
2. **Gemini API**: The thinking budget (4000 tokens) allows for sophisticated analysis but may increase latency.
3. **Browser Compatibility**: Requires modern browser support for ES2022 features.
4. **Error Handling**: Minimal error handling currently (basic try/catch with alert). Consider expanding for production.
5. **Type Safety**: Leverage the TypeScript interfaces for new features. BrandArcheologyResult is the contract with Gemini.

## Critical Development Guardrails

### NEVER
- Implement without showing options first (always use 1, 2, 3 format)
- Delete/remove content without asking first
- Delete anything created in the last 7 days without explicit approval
- Change something that was already working
- Pretend work is done when it isn't
- Process batch without validating one first
- Add features that weren't requested
- Use mock data when real data exists in database
- Explain/justify when receiving criticism (just fix it)
- Trust AI/subagent output without verification
- Create from scratch when similar exists in squads/

### ALWAYS
- Present options as "1. X, 2. Y, 3. Z" format when proposing approaches
- Use AskUserQuestion tool for clarifications and decisions
- Check `squads/` and existing components before creating new ones
- Read COMPLETE schema before proposing database changes
- Investigate root cause when error persists across attempts
- Commit before moving to next task
- Create handoff in `docs/sessions/YYYY-MM/` at end of session (e.g., `docs/sessions/2026-01/`)

## Slash Commands Reutilizaveis

OBRIGATORIO: Ao finalizar qualquer tarefa, avalie se ela pode ser transformada em um slash command reutilizavel.

### Quando sugerir criacao de slash command:
- A tarefa envolveu um prompt elaborado que pode ser reaproveitado
- O mesmo tipo de trabalho sera necessario novamente no futuro
- A tarefa tem inputs/outputs bem definidos (ex: recebe X, produz Y)
- Envolve etapas repetitivas que seguem um padrao claro

### Formato da sugestao:
"Essa tarefa pode virar um slash command: /nome-do-comando
- O que faz: [descricao curta]
- Quando usar: [situacao de uso]
- Quer que eu crie o comando?"

### Onde salvar:
- Diretorio: .claude/commands/
- Formato: arquivo Markdown com o prompt do comando
- Nomenclatura: nome-do-comando.md
- Uso: invocar com /nome-do-comando no Claude Code

---

# Synkra AIOS Development Rules for Claude Code

You are working with Synkra AIOS, an AI-Orchestrated System for Full Stack Development.

## Core Framework Understanding

Synkra AIOS is a meta-framework that orchestrates AI agents to handle complex development workflows. Always recognize and work within this architecture.

## Agent System

### Agent Activation
- Agents are activated with @agent-name syntax: @dev, @qa, @architect, @pm, @po, @sm, @analyst
- The master agent is activated with @aios-master
- Agent commands use the * prefix: *help, *create-story, *task, *exit

### Agent Context
When an agent is active:
- Follow that agent's specific persona and expertise
- Use the agent's designated workflow patterns
- Maintain the agent's perspective throughout the interaction

## Development Methodology

### Story-Driven Development
1. **Work from stories** - All development starts with a story in `docs/stories/`
2. **Update progress** - Mark checkboxes as tasks complete: [ ] → [x]
3. **Track changes** - Maintain the File List section in the story
4. **Follow criteria** - Implement exactly what the acceptance criteria specify

### Code Standards
- Write clean, self-documenting code
- Follow existing patterns in the codebase
- Include comprehensive error handling
- Add unit tests for all new functionality
- Use TypeScript/JavaScript best practices

### Testing Requirements
- Run all tests before marking tasks complete
- Ensure linting passes: `npm run lint`
- Verify type checking: `npm run typecheck`
- Add tests for new features
- Test edge cases and error scenarios

## AIOS Framework Structure

```
aios-core/
├── agents/         # Agent persona definitions (YAML/Markdown)
├── tasks/          # Executable task workflows
├── workflows/      # Multi-step workflow definitions
├── templates/      # Document and code templates
├── checklists/     # Validation and review checklists
└── rules/          # Framework rules and patterns

docs/
├── stories/        # Development stories (numbered)
├── prd/            # Product requirement documents
├── architecture/   # System architecture documentation
└── guides/         # User and developer guides
```

## Workflow Execution

### Task Execution Pattern
1. Read the complete task/workflow definition
2. Understand all elicitation points
3. Execute steps sequentially
4. Handle errors gracefully
5. Provide clear feedback

### Interactive Workflows
- Workflows with `elicit: true` require user input
- Present options clearly
- Validate user responses
- Provide helpful defaults

## Best Practices

### When implementing features:
- Check existing patterns first
- Reuse components and utilities
- Follow naming conventions
- Keep functions focused and testable
- Document complex logic

### When working with agents:
- Respect agent boundaries
- Use appropriate agent for each task
- Follow agent communication patterns
- Maintain agent context

### When handling errors:
```javascript
try {
  // Operation
} catch (error) {
  console.error(`Error in ${operation}:`, error);
  // Provide helpful error message
  throw new Error(`Failed to ${operation}: ${error.message}`);
}
```

## Git & GitHub Integration

### Commit Conventions
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, etc.
- Reference story ID: `feat: implement IDE detection [Story 2.1]`
- Keep commits atomic and focused

### GitHub CLI Usage
- Ensure authenticated: `gh auth status`
- Use for PR creation: `gh pr create`
- Check org access: `gh api user/memberships`

## AIOS-Specific Patterns

### Working with Templates
```javascript
const template = await loadTemplate('template-name');
const rendered = await renderTemplate(template, context);
```

### Agent Command Handling
```javascript
if (command.startsWith('*')) {
  const agentCommand = command.substring(1);
  await executeAgentCommand(agentCommand, args);
}
```

### Story Updates
```javascript
// Update story progress
const story = await loadStory(storyId);
story.updateTask(taskId, { status: 'completed' });
await story.save();
```

## Environment Setup

### Required Tools
- Node.js 18+
- GitHub CLI
- Git
- Your preferred package manager (npm/yarn/pnpm)

### Configuration Files
- `.aios/config.yaml` - Framework configuration
- `.env` - Environment variables
- `aios.config.js` - Project-specific settings

## Common Commands

### AIOS Master Commands
- `*help` - Show available commands
- `*create-story` - Create new story
- `*task {name}` - Execute specific task
- `*workflow {name}` - Run workflow

### Development Commands
- `npm run dev` - Start development
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run build` - Build project

## Debugging

### Enable Debug Mode
```bash
export AIOS_DEBUG=true
```

### View Agent Logs
```bash
tail -f .aios/logs/agent.log
```

### Trace Workflow Execution
```bash
npm run trace -- workflow-name
```

## Claude Code Specific Configuration

### Performance Optimization
- Prefer batched tool calls when possible for better performance
- Use parallel execution for independent operations
- Cache frequently accessed data in memory during sessions

### Tool Usage Guidelines
- Always use the Grep tool for searching, never `grep` or `rg` in bash
- Use the Task tool for complex multi-step operations
- Batch file reads/writes when processing multiple files
- Prefer editing existing files over creating new ones

### Session Management
- Track story progress throughout the session
- Update checkboxes immediately after completing tasks
- Maintain context of the current story being worked on
- Save important state before long-running operations

### Error Recovery
- Always provide recovery suggestions for failures
- Include error context in messages to user
- Suggest rollback procedures when appropriate
- Document any manual fixes required

### Testing Strategy
- Run tests incrementally during development
- Always verify lint and typecheck before marking complete
- Test edge cases for each new feature
- Document test scenarios in story files

### Documentation
- Update relevant docs when changing functionality
- Include code examples in documentation
- Keep README synchronized with actual behavior
- Document breaking changes prominently

## MCP Usage Rules

For detailed MCP server management and usage rules, refer to `.claude/rules/mcp-usage.md`. Key points:

- **DevOps Agent Only**: All MCP infrastructure is managed exclusively by @devops (Gage)
- **Native Tools Priority**: Always prefer Claude Code native tools (Read, Write, Edit, Bash, Glob, Grep) over MCP servers
- **docker-gateway**: Only use when explicitly requested or for Docker container operations
- **playwright**: Only for browser automation and web testing
- **EXA**: For web searches and company research
- **Context7**: For library documentation lookup
- **Apify**: For web scraping and social media data extraction

---

*Synkra AIOS Claude Code Configuration v2.0 + Signifique Imperial Integration*
