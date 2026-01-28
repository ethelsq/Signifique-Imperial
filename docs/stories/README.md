# User Stories

Development stories follow the AIOS story-driven development methodology.

## 📋 Story Format

Each story includes:
- **Title & ID:** Unique identifier and description
- **User Narrative:** "As a [user], I want [feature], so that [benefit]"
- **Acceptance Criteria:** Definitive pass/fail criteria
- **Technical Specification:** Implementation details
- **Task Checklist:** Sub-tasks with progress tracking
- **File List:** Affected files and changes

## 🏷️ Naming Convention

Format: `YYYY-MM-DD-{number}-{slug}.md`

Example: `2026-01-28-001-brand-archaeology-form.md`

## 📂 Story States

- **📝 Draft:** In progress, not ready for review
- **🔍 Review:** Awaiting approval
- **✅ Done:** Completed and merged
- **⏸️ Blocked:** Waiting on dependencies

## 🔗 Related Workflows

Stories connect to:
- Tasks in `.aios-core/development/tasks/`
- Workflows in `.aios-core/development/workflows/`
- Agent assignments via `@agent-name` mentions

---

*Create new story with: `@pm *create-story`*
