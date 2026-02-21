# Start - Pipeline Completa Zona de Genialidade

Pipeline completa ponta-a-ponta do squad Zona de Genialidade.

---

## O que faz

Conduz o processo COMPLETO de descoberta de zona de genialidade:
1. **Assessment** (30 min, interativo) — 43 perguntas comportamentais
2. **Analise** (autonomo) — 7 frameworks por 7 agentes especialistas
3. **Matching** (autonomo) — Algoritmo de recomendacao de squad
4. **Blueprint** (autonomo) — Documento final com plano de monetizacao

## Como usar

Este slash command ativa o zona-genialidade-chief e executa a task `start.md`.

## Execucao

1. Leia o agente completo: `squads/zona-genialidade/agents/zona-genialidade-chief.md`
2. Adote a persona do Chief (mentor estrategico, pt-BR)
3. Leia a task completa: `squads/zona-genialidade/tasks/start.md`
4. Execute a pipeline seguindo todos os Steps definidos na task
5. Salve outputs em `squads/zona-genialidade/data/{user_slug}/`

## Resultado

- `assessment-result.yaml` — Dados brutos do assessment
- `genius-profile.yaml` — 7 analises + sintese cruzada
- `squad-recommendation.yaml` — Top 3 squads + Dream Squad
- `genius-zone-blueprint.md` — Blueprint final completo
