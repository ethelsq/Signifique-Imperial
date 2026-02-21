---
task: Pesquisa de Mercado Esotérico
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - nicho_especifico: Subcategoria de produtos (ex: cristais, tarô, velas, incensos)
  - regiao_foco: Região geográfica (Brasil, global, estado específico)
  - concorrentes_conhecidos: Lista de concorrentes já identificados (opcional)
  - orcamento_referencia: Faixa de investimento planejada (opcional)
Saida: |
  - relatorio_mercado_completo: Documento com toda a análise
  - mapa_concorrentes: Tabela comparativa de concorrentes
  - oportunidades_identificadas: Lista priorizada de oportunidades
  - sizing_tam_sam_som: Estimativa de tamanho de mercado
  - perfil_publico: Perfil demográfico e psicográfico detalhado
Checklist:
  - "[ ] Coletar inputs do usuário"
  - "[ ] Mapear concorrentes diretos (mesma categoria)"
  - "[ ] Mapear concorrentes indiretos (substitutos)"
  - "[ ] Analisar tendências via Google Trends"
  - "[ ] Identificar gaps de mercado"
  - "[ ] Calcular TAM/SAM/SOM"
  - "[ ] Traçar perfil demográfico e psicográfico"
  - "[ ] Analisar faixa de preços praticados"
  - "[ ] Identificar oportunidades priorizadas"
  - "[ ] Gerar relatório final"
---

# *pesquisa-mercado

Pesquisa completa de mercado para o nicho esotérico: concorrência, tendências, sizing e perfil de público.

## Elicitação

```
? Qual nicho/subcategoria de produtos esotéricos?
  1. Cristais e pedras
  2. Tarô e oráculos
  3. Velas ritualísticas
  4. Incensos e defumadores
  5. Ervas e banhos
  6. Mix / loja completa
  > [seleção]

? Região de foco?
  1. Brasil (nacional)
  2. São Paulo e região
  3. Global / e-commerce
  > [seleção]

? Já conhece algum concorrente direto? (liste ou pule)
  > [texto livre ou skip]
```

## Etapas de Execução

### 1. Análise de Concorrência
- Identificar top 5-10 concorrentes diretos no nicho
- Para cada: posicionamento, faixa de preço, canais de venda, presença digital
- Identificar concorrentes indiretos (marketplaces, lojas físicas, importados)
- Tabela comparativa: nome | posicionamento | preço médio | canais | pontos fortes | pontos fracos

### 2. Análise de Tendências
- Google Trends: termos do nicho nos últimos 12 meses
- Sazonalidade identificada
- Tendências emergentes (WitchTok, self-care espiritual, etc.)
- Termos de busca com volume crescente

### 3. Sizing de Mercado
- TAM (Total Addressable Market): mercado esotérico total na região
- SAM (Serviceable Available Market): segmento acessível
- SOM (Serviceable Obtainable Market): participação realista em 12 meses
- Fontes e premissas documentadas

### 4. Perfil de Público
- Demográfico: idade, gênero, renda, escolaridade
- Psicográfico: motivações, medos, desejos, estilo de vida
- Comportamental: frequência de compra, ticket médio, canais preferidos
- Segmentos identificados:
  - Iniciante curioso
  - Praticante regular
  - Colecionador/entusiasta
  - Terapeuta holístico/profissional

### 5. Oportunidades
- Gaps identificados no mercado
- Nichos sub-atendidos
- Oportunidades de diferenciação
- Priorização: impacto × viabilidade

## Output Format

```markdown
# Pesquisa de Mercado — [Nicho] | [Data]

## 1. Panorama do Mercado
[resumo executivo]

## 2. Mapa de Concorrentes
| Concorrente | Posicionamento | Preço Médio | Canais | Força | Fraqueza |
|-------------|---------------|-------------|--------|-------|----------|

## 3. Tendências
[análise de tendências com dados]

## 4. Sizing (TAM/SAM/SOM)
[estimativas com fontes]

## 5. Perfil do Público-Alvo
[segmentos detalhados]

## 6. Oportunidades Priorizadas
| # | Oportunidade | Impacto | Viabilidade | Prioridade |
|---|-------------|---------|-------------|------------|

## 7. Recomendações Estratégicas
[próximos passos sugeridos]
```

## Related
- **Agent:** @mente-sa-eso01
- **Next:** `*posicionar-marca` ou `*estrategia-trafego`
