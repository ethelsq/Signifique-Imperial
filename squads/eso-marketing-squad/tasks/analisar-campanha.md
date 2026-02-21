---
task: Análise de Performance de Campanha
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - dados_campanha: Métricas (CTR, CPC, CPA, ROAS, conversões, impressões, cliques)
  - plataforma: Meta, Google ou TikTok
  - periodo_analise: Período dos dados
  - objetivo_campanha: Awareness, conversão, retargeting
  - orcamento_gasto: Valor investido no período
Saida: |
  - diagnostico: Análise completa da performance
  - gargalos: Problemas identificados por etapa do funil
  - recomendacoes: Ações de otimização priorizadas
  - projecao: Projeção de resultados após otimização
Checklist:
  - "[ ] Coletar métricas"
  - "[ ] Analisar por etapa do funil"
  - "[ ] Comparar com benchmarks do nicho"
  - "[ ] Identificar gargalos"
  - "[ ] Gerar recomendações priorizadas"
  - "[ ] Projetar impacto das otimizações"
---

# *analisar-campanha

Diagnóstico completo de performance de campanha de tráfego pago.

## Elicitação

```
? Qual plataforma?
  1. Meta Ads
  2. Google Ads
  3. TikTok Ads
  > [seleção]

? Período de análise?
  > [ex: últimos 7 dias, último mês]

? Forneça as métricas disponíveis:
  - Impressões: ___
  - Cliques: ___
  - CTR: ___
  - CPC: ___
  - Conversões: ___
  - CPA: ___
  - ROAS: ___
  - Valor gasto: ___
```

## Benchmarks do Nicho Esotérico (Referência)

| Métrica | Meta Ads | Google Search | TikTok |
|---------|----------|---------------|--------|
| CTR | 1.5-3.0% | 3-6% | 1-2% |
| CPC | R$0.50-2.00 | R$1.00-4.00 | R$0.30-1.50 |
| CPA | R$15-50 | R$20-60 | R$10-40 |
| ROAS | 3-6x | 4-8x | 2-5x |
| Conv. Rate LP | 2-5% | 3-7% | 1.5-4% |

## Framework de Diagnóstico

```
Impressões → CTR baixo? → Problema de CRIATIVO
Cliques → Conv. baixa? → Problema de LP/OFERTA
Conversões → CPA alto? → Problema de SEGMENTAÇÃO
ROAS → Abaixo da meta? → Problema de TICKET/MARGEM
```

### Diagnóstico por Gargalo

| Gargalo | Sintoma | Causas Comuns | Ações |
|---------|---------|---------------|-------|
| CTR baixo | <1.5% Meta | Criativo fraco, público errado | Trocar criativo, testar hooks |
| CPC alto | Acima do benchmark | Concorrência alta, relevance baixa | Refinar público, melhorar ad |
| Conv. LP baixa | <2% | LP fraca, oferta sem apelo | Revisar LP, testar oferta |
| CPA alto | Acima da margem | Funil com vazamento | Otimizar cada etapa |
| ROAS baixo | <2x | Ticket baixo, CPA alto | Subir ticket, kits, upsell |

## Output Format

```markdown
# Análise de Campanha — [Plataforma] | [Período]

## Score Geral: [X/10]

## Métricas vs Benchmark
| Métrica | Resultado | Benchmark | Status |
|---------|-----------|-----------|--------|

## Diagnóstico
[análise detalhada por etapa do funil]

## Gargalos Identificados
| # | Gargalo | Severidade | Impacto Estimado |
|---|---------|------------|------------------|

## Recomendações (priorizadas)
| # | Ação | Impacto | Esforço | Prioridade |
|---|------|---------|---------|------------|

## Projeção Pós-Otimização
[cenário conservador vs otimista]
```

## Related
- **Agent:** @mente-sa-eso01
- **Next:** `*estrategia-trafego` (ajuste) ou `*criar-copy` (novo criativo)
