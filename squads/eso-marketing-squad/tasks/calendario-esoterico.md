---
task: Calendário Esotérico de Campanhas
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - produtos_catalogo: Categorias de produtos disponíveis
  - ano_referencia: Ano para planejamento
  - canais_ativos: Canais de venda/comunicação
Saida: |
  - calendario_anual: Calendário completo mês a mês
  - datas_pico: Datas de maior oportunidade
  - temas_por_periodo: Temas de campanha por período
  - sugestoes_ofertas: Promoções sazonais sugeridas
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Mapear fases lunares relevantes"
  - "[ ] Mapear sabbats e datas pagãs"
  - "[ ] Incluir datas comerciais"
  - "[ ] Incluir datas culturais brasileiras"
  - "[ ] Cruzar datas × produtos"
  - "[ ] Sugerir promoções temáticas"
  - "[ ] Gerar calendário final"
---

# *calendario-esoterico

Calendário anual de campanhas alinhado com o ciclo esotérico e comercial.

## Elicitação

```
? Categorias de produtos disponíveis?
  > [lista de categorias]

? Ano de referência?
  > [ex: 2026]

? Canais ativos para campanhas?
  1. Instagram + Meta Ads
  2. E-commerce + Google Ads
  3. Email marketing
  4. WhatsApp
  5. Todos
  > [seleção]
```

## Calendário Esotérico Base

### Sabbats (Roda do Ano — Hemisfério Sul)

| Data | Sabbat | Tema | Produtos-chave |
|------|--------|------|---------------|
| ~1 Ago | Imbolc | Purificação, novos começos | Velas brancas, banhos, defumadores |
| ~21 Set | Ostara (Equinócio Primavera) | Fertilidade, renovação | Cristais verdes, sementes, kits |
| ~31 Out | Beltane | Amor, paixão, fertilidade | Velas vermelhas, óleos, amuletos |
| ~21 Dez | Litha (Solstício Verão) | Plenitude, abundância, poder | Cristais citrino, girassol, ouro |
| ~1 Fev | Lammas/Lughnasadh | Colheita, gratidão | Ervas, cestas, oferendas |
| ~21 Mar | Mabon (Equinócio Outono) | Equilíbrio, gratidão | Cristais equilíbrio, incensos |
| ~1 Mai | Samhain | Ancestralidade, morte/renascimento | Tarô, velas pretas, proteção |
| ~21 Jun | Yule (Solstício Inverno) | Renascimento, esperança | Kits de inverno, velas, presentes |

### Fases Lunares (mensais)

| Fase | Tema | Campanha |
|------|------|----------|
| Lua Nova | Novos começos, intenções | Lançamentos, novos produtos |
| Lua Crescente | Crescimento, atração | Promoções de atração/abundância |
| Lua Cheia | Plenitude, poder máximo | Promoções especiais, rituais |
| Lua Minguante | Limpeza, banimento | Produtos de limpeza/proteção |

### Datas Culturais Brasileiras

| Data | Evento | Oportunidade |
|------|--------|-------------|
| 27 Set | Cosme e Damião | Doces, erês, linha de proteção infantil |
| 2 Fev | Iemanjá | Produtos para Iemanjá, oferendas, banhos |
| 24 Jun | São João | Fogueira, simpatias, amarrações (cuidado legal) |
| 15 Nov | Proclamação + Black Friday | Mega promoções |
| 31 Dez | Reveillon | Kits ano novo, banhos, velas de intenção |

### Datas Comerciais

| Data | Evento | Estratégia |
|------|--------|-----------|
| Fevereiro | Carnaval | Proteção energética, limpeza pós-carnaval |
| Março | Dia da Mulher | Empoderamento feminino, feminino sagrado |
| Maio | Dia das Mães | Kits presente, autocuidado |
| Junho | Dia dos Namorados | Rituais de amor, cristais para relacionamento |
| Agosto | Dia dos Pais | Kits masculinos, proteção |
| Novembro | Black Friday | Descontos em kits, frete grátis |
| Dezembro | Natal/Ano Novo | Kits presente, coleções especiais |

## Output Format

```markdown
# Calendário de Campanhas Esotéricas — [Ano]

## Visão Anual
| Mês | Evento Principal | Tema | Produtos Foco | Tipo Campanha |
|-----|-----------------|------|---------------|---------------|

## Detalhamento por Trimestre

### Q1 (Jan-Mar)
[detalhamento mês a mês com datas, temas, produtos, ações]

### Q2 (Abr-Jun)
[...]

### Q3 (Jul-Set)
[...]

### Q4 (Out-Dez)
[...]

## Campanhas Lunares (template mensal)
[modelo de campanha por fase lunar]

## Top 10 Datas de Maior Oportunidade
| # | Data | Evento | Impacto Estimado |
|---|------|--------|------------------|
```

## Related
- **Agent:** @mente-sa-eso01
- **Next:** `*estrategia-trafego`, `*criar-copy`
