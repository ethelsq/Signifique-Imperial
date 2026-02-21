---
task: Planejamento de Funil de Conversão
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - produto_ou_linha: Produto ou linha de produtos
  - ticket_medio: Faixa de preço
  - canais_disponiveis: Canais ativos (Instagram, site, email, WhatsApp)
  - objetivo: Venda direta, geração de leads, assinatura
Saida: |
  - mapa_funil: Funil completo visual (texto)
  - touchpoints: Pontos de contato por etapa
  - conteudo_por_etapa: Conteúdo recomendado
  - metricas_por_etapa: KPIs de cada fase
  - automacoes: Automações sugeridas
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Desenhar TOFU"
  - "[ ] Desenhar MOFU"
  - "[ ] Desenhar BOFU"
  - "[ ] Definir conteúdo por etapa"
  - "[ ] Mapear automações"
  - "[ ] Definir métricas de passagem"
---

# *planejar-funil

Desenho completo do funil de conversão para produtos esotéricos.

## Elicitação

```
? Produto/linha para o funil?
  > [texto]

? Ticket médio?
  1. Até R$50 (impulso)
  2. R$50-150 (considerado)
  3. R$150-500 (premium)
  4. R$500+ (high ticket)
  > [seleção]

? Canais ativos?
  1. Instagram
  2. Site/e-commerce
  3. Email marketing
  4. WhatsApp
  5. TikTok
  6. YouTube
  > [seleção múltipla]

? Objetivo principal?
  1. Venda direta de produto
  2. Geração de leads para nutrição
  3. Assinatura/recorrência (box mensal)
  > [seleção]
```

## Modelo de Funil Esotérico

```
╔══════════════════════════════════════════╗
║          TOFU — DESPERTAR               ║
║  "Abrir os olhos para o mundo místico"  ║
║                                          ║
║  Conteúdo: educativo, inspiracional      ║
║  Canais: Reels, TikTok, blog, Pinterest  ║
║  Meta: atrair e gerar curiosidade        ║
╠══════════════════════════════════════════╣
║          MOFU — INICIAÇÃO               ║
║  "Dar o primeiro passo na jornada"      ║
║                                          ║
║  Conteúdo: guias, lives, email sequence  ║
║  Canais: email, stories, WhatsApp        ║
║  Meta: nutrir e gerar confiança          ║
╠══════════════════════════════════════════╣
║          BOFU — RITUAL                  ║
║  "O momento sagrado da transformação"   ║
║                                          ║
║  Conteúdo: oferta, urgência, prova       ║
║  Canais: LP, retargeting, email promo    ║
║  Meta: converter                         ║
╠══════════════════════════════════════════╣
║          PÓS — CÍRCULO SAGRADO         ║
║  "Manter no círculo, transformar em fã" ║
║                                          ║
║  Conteúdo: comunidade, exclusivo         ║
║  Canais: grupo VIP, email, unboxing      ║
║  Meta: recompra, LTV, indicação          ║
╚══════════════════════════════════════════╝
```

## Métricas de Passagem

| Etapa | Métrica | Meta Referência |
|-------|---------|-----------------|
| TOFU → MOFU | Taxa de captura/engajamento | 3-8% |
| MOFU → BOFU | Taxa de aquecimento | 15-25% |
| BOFU → Venda | Taxa de conversão | 2-5% |
| Venda → Recompra | Taxa de retenção 90d | 20-35% |

## Output Format

```markdown
# Funil de Conversão — [Produto/Linha] | [Data]

## Mapa do Funil
[diagrama textual do funil]

## TOFU — Despertar
- **Objetivo:** [meta]
- **Canais:** [lista]
- **Conteúdo:** [tipos de conteúdo]
- **CTA:** [call to action]
- **Métrica-chave:** [KPI]

## MOFU — Iniciação
[mesma estrutura]

## BOFU — Ritual
[mesma estrutura]

## Pós-Venda — Círculo Sagrado
[mesma estrutura]

## Automações Recomendadas
| # | Trigger | Ação | Canal | Timing |
|---|---------|------|-------|--------|

## Conteúdo por Etapa
| Etapa | Tipo | Exemplo | Frequência |
|-------|------|---------|------------|
```

## Related
- **Agent:** @mente-sa-eso01
- **Prev:** `*posicionar-marca`, `*estrategia-trafego`
- **Next:** `*criar-lp`, `*criar-copy`
