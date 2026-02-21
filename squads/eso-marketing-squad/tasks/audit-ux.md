---
task: Auditoria UX de Conversão
responsavel: "@eso-designer01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - url_ou_screenshots: URL da página ou screenshots
  - objetivo_pagina: O que a página deveria fazer (vender, capturar, informar)
  - dados_analytics: Métricas de conversão atuais (opcional)
Saida: |
  - score_ux: Score de 0-100
  - problemas: Lista priorizada de problemas
  - recomendacoes: Ações de melhoria
  - quick_wins: Melhorias rápidas de alto impacto
Checklist:
  - "[ ] Analisar página"
  - "[ ] Avaliar hierarquia visual"
  - "[ ] Verificar CTAs"
  - "[ ] Testar experiência mobile"
  - "[ ] Checar prova social"
  - "[ ] Identificar quick wins"
  - "[ ] Priorizar recomendações"
---

# *audit-ux

Auditoria UX focada em conversão para páginas do mercado esotérico.

## Elicitação

```
? URL da página ou cole screenshots:
  > [url ou descrição]

? Objetivo da página?
  1. Vender produto
  2. Capturar leads
  3. Informar/educar
  > [seleção]

? Tem dados de analytics?
  1. Sim, vou compartilhar
  2. Não tenho dados
  > [seleção]
```

## Checklist de Auditoria (40 pontos)

### Above the Fold (10 pontos)
- [ ] (2) Proposta de valor clara em <5 segundos
- [ ] (2) CTA visível sem scroll
- [ ] (2) Hierarquia visual clara (headline > sub > CTA)
- [ ] (2) Imagem hero relevante e de qualidade
- [ ] (2) Carregamento percebido <3 segundos

### CTAs e Conversão (10 pontos)
- [ ] (2) Botão CTA com contraste >4.5:1
- [ ] (2) Texto do CTA orientado a benefício (não "Enviar")
- [ ] (2) CTA repetido a cada 2-3 seções
- [ ] (2) Formulário com campos mínimos
- [ ] (2) Elementos de urgência/escassez presentes

### Prova Social e Confiança (8 pontos)
- [ ] (2) Depoimentos com foto/nome
- [ ] (2) Avaliações/ratings visíveis
- [ ] (2) Selos de segurança perto do CTA
- [ ] (2) Garantia clara

### Mobile (6 pontos)
- [ ] (2) Responsivo sem quebras
- [ ] (2) Botões acessíveis com polegar
- [ ] (2) Fontes legíveis (min 16px body)

### Estética Esotérica (6 pontos)
- [ ] (2) Paleta coerente com o nicho
- [ ] (2) Tipografia adequada (não genérica)
- [ ] (2) Elementos visuais místicos aplicados com propósito

## Scoring

| Score | Rating | Significado |
|-------|--------|-------------|
| 80-100 | Excelente | Otimizações finas |
| 60-79 | Bom | Melhorias moderadas |
| 40-59 | Regular | Precisa de trabalho significativo |
| 0-39 | Crítico | Redesign recomendado |

## Output Format

```markdown
# Auditoria UX — [URL/Página] | [Data]

## Score: [X/100] — [Rating]

## Resumo Executivo
[visão geral em 3 linhas]

## Quick Wins (implementar agora)
| # | Melhoria | Impacto Estimado | Esforço |
|---|----------|------------------|---------|

## Problemas Detalhados
### Críticos
[problemas de alta severidade]

### Importantes
[problemas de média severidade]

### Melhorias
[nice-to-haves]

## Checklist Completo
[resultado dos 40 pontos]

## Recomendações Priorizadas
| # | Ação | Categoria | Impacto | Esforço | Prioridade |
|---|------|-----------|---------|---------|------------|
```

## Related
- **Agent:** @eso-designer01
- **Next:** `*design-lp` (se precisar redesign)
