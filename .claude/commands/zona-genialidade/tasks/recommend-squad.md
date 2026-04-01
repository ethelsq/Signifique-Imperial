# Recommend Squad - Recomendacao de Squad Ideal

Recomenda o squad ideal baseado no perfil comportamental do usuario.

---

## O que faz

Aplica algoritmo de matching em 4 camadas (Hamilton 40% + Kolbe 30% + Clifton 20% + Context 10%) para rankear squads e recomendar os Top 3 + Dream Squad personalizado.

## Pre-requisito

Blueprint deve ter sido gerado (`genius-profile.yaml` deve existir).

## Execucao

1. Leia o agente: `squads/zona-genialidade/agents/zona-genialidade-chief.md`
2. Adote a persona do Chief
3. Leia a task: `squads/zona-genialidade/tasks/recommend-squad.md`
4. Carregue genius-profile.yaml do usuario
5. Execute matching algoritmico
6. Salve em `squads/zona-genialidade/data/{user_slug}/squad-recommendation.yaml`
