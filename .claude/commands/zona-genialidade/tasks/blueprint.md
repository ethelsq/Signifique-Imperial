# Blueprint - Gerar Genius Zone Blueprint

Gera o Blueprint completo de zona de genialidade a partir dos dados do assessment.

---

## O que faz

Roteia dados do assessment para 7 agentes especialistas (Tier 0 → 1 → 2), sintetiza todas as analises em um Genius Zone Blueprint de 10 secoes com plano de monetizacao.

## Pre-requisito

Assessment deve ter sido completado (`assessment-result.yaml` deve existir).

## Execucao

1. Leia o agente: `squads/zona-genialidade/agents/zona-genialidade-chief.md`
2. Adote a persona do Chief
3. Leia a task: `squads/zona-genialidade/tasks/generate-blueprint.md`
4. Carregue o assessment-result.yaml do usuario
5. Execute analise multi-framework (7 agentes, 3 tiers)
6. Sintetize em Blueprint e salve em `squads/zona-genialidade/data/{user_slug}/genius-zone-blueprint.md`
