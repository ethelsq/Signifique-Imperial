---
task: Estratégia de Tráfego Pago
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - objetivo: Objetivo principal (awareness, conversão, retargeting)
  - orcamento_mensal: Budget disponível
  - produtos_foco: Produtos/categorias a promover
  - plataformas_desejadas: Meta, Google, TikTok (ou todas)
  - historico: Dados de campanhas anteriores (opcional)
Saida: |
  - plano_campanhas: Estrutura completa de campanhas por plataforma
  - distribuicao_orcamento: Alocação de budget por canal e campanha
  - segmentacoes: Públicos-alvo definidos
  - metricas_alvo: KPIs e metas por campanha
  - timeline: Cronograma de lançamento
Checklist:
  - "[ ] Coletar inputs e histórico"
  - "[ ] Definir objetivo por plataforma"
  - "[ ] Estruturar campanhas por nível de funil"
  - "[ ] Definir segmentações e públicos"
  - "[ ] Distribuir orçamento"
  - "[ ] Definir KPIs e metas"
  - "[ ] Plano de retargeting"
  - "[ ] Cronograma de lançamento"
  - "[ ] Recomendações de criativos"
---

# *estrategia-trafego

Planejamento completo de estratégia de tráfego pago para produtos esotéricos.

## Elicitação

```
? Qual o objetivo principal?
  1. Awareness — Fazer a marca ser conhecida
  2. Conversão — Vender produtos diretamente
  3. Retargeting — Recuperar visitantes/carrinhos
  4. Full-funnel — Estratégia completa
  > [seleção]

? Orçamento mensal disponível?
  1. Até R$ 1.000
  2. R$ 1.000 - R$ 5.000
  3. R$ 5.000 - R$ 15.000
  4. Acima de R$ 15.000
  > [seleção]

? Quais plataformas?
  1. Meta Ads (Instagram + Facebook)
  2. Google Ads (Search + Shopping)
  3. TikTok Ads
  4. Todas as acima
  > [seleção]

? Produtos/categorias foco?
  > [texto livre]
```

## Etapas de Execução

### 1. Diagnóstico Inicial
- Avaliar maturidade digital da marca
- Analisar histórico (se existir)
- Definir fase do negócio (lançamento, crescimento, escala)

### 2. Estrutura de Campanhas por Plataforma

#### Meta Ads
- **TOFU (Awareness):** Conteúdo educativo/místico, vídeos, carrossel de produtos
  - Públicos: interesses (espiritualidade, astrologia, meditação, yoga, cristais)
  - Lookalike de compradores (se houver base)
- **MOFU (Consideração):** Retargeting de engajamento, conteúdo de valor
- **BOFU (Conversão):** Catálogo dinâmico, ofertas, kits, retargeting de carrinho

#### Google Ads
- **Search:** Termos de intenção de compra ("comprar cristal ametista", "kit tarô")
- **Shopping:** Catálogo de produtos com preço competitivo
- **Display:** Retargeting com banners em sites do nicho

#### TikTok Ads
- **Spark Ads:** Impulsionar conteúdo orgânico que performou
- **In-Feed:** Conteúdo nativo com hook esotérico (3 primeiros segundos)
- **Públicos:** WitchTok, espiritualidade, self-care

### 3. Segmentações Detalhadas
- Públicos de interesse por plataforma
- Públicos personalizados (visitantes, engajamento, compradores)
- Lookalikes recomendados
- Exclusões importantes

### 4. Distribuição de Orçamento
- % por plataforma (recomendação baseada no objetivo)
- % por nível de funil
- Budget de teste vs escala
- Regra de alocação progressiva

### 5. KPIs e Metas
- Métricas por campanha: CTR, CPC, CPM, CPA, ROAS
- Benchmarks do nicho esotérico
- Metas realistas por fase

### 6. Cronograma
- Fase de teste (semanas 1-2)
- Fase de otimização (semanas 3-4)
- Fase de escala (mês 2+)

## Output Format

```markdown
# Estratégia de Tráfego — [Marca] | [Data]

## Resumo Executivo
[visão geral da estratégia]

## Estrutura de Campanhas
### Meta Ads
[campanhas detalhadas]

### Google Ads
[campanhas detalhadas]

### TikTok Ads
[campanhas detalhadas]

## Segmentações
[públicos por plataforma]

## Distribuição de Orçamento
| Plataforma | % Budget | Valor | Campanhas |
|-----------|----------|-------|-----------|

## KPIs e Metas
| Métrica | Meta | Benchmark Nicho |
|---------|------|-----------------|

## Cronograma
[timeline de execução]

## Próximos Passos
[ações imediatas]
```

## Related
- **Agent:** @mente-sa-eso01
- **Prev:** `*pesquisa-mercado`
- **Next:** `*criar-lp` + @eso-designer01 `*design-lp`
