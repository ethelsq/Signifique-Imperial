---
task: Diagnóstico Financeiro do Negócio
responsavel: "@pricing-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - receita_mensal_atual: Quanto fatura por mês
  - custos_fixos: Custos mensais fixos
  - clientes_ativos: Quantos e quais
  - horas_trabalhadas: Horas por semana dedicadas
  - servicos_atuais: O que entrega hoje
Saida: |
  - score_saude: Score de 0-100
  - diagnostico: Análise completa
  - gargalos: Onde está perdendo dinheiro
  - acoes_imediatas: O que fazer AGORA
  - plano_90dias: Plano para os próximos 90 dias
Checklist:
  - "[ ] Coletar dados financeiros"
  - "[ ] Calcular métricas-chave"
  - "[ ] Identificar gargalos"
  - "[ ] Gerar ações imediatas"
  - "[ ] Montar plano 90 dias"
---

# *diagnostico-negocio

Análise de saúde financeira da Signifique com recomendações práticas.

## Elicitação

```
? Receita mensal atual (média dos últimos 3 meses)?
  > R$ [valor]

? Custos fixos mensais (ferramentas, internet, moradia proporcional, etc)?
  > R$ [valor]

? Quantos clientes ativos?
  > [número]

? Quantas horas por semana dedica ao trabalho?
  > [número]

? Quais serviços entrega hoje?
  > [lista]

? Tem dívidas ou contas atrasadas?
  1. Não
  2. Sim, até R$1.000
  3. Sim, R$1.000-5.000
  4. Sim, acima de R$5.000
  > [seleção]
```

## Métricas Calculadas

```
Receita por hora = Receita mensal / (horas semanais × 4)
Margem líquida = (Receita - Custos) / Receita × 100
Receita por cliente = Receita mensal / clientes ativos
Ponto de equilíbrio = Custos fixos (mínimo para não perder dinheiro)
Capacidade ociosa = Horas disponíveis - Horas dedicadas
Custo de oportunidade = Capacidade ociosa × Custo-hora ideal
```

## Score de Saúde

| Score | Status | Significado |
|-------|--------|-------------|
| 80-100 | Saudável | Lucro consistente, crescimento possível |
| 60-79 | Estável | Cobre custos, margem apertada |
| 40-59 | Atenção | Risco de ficar negativo |
| 20-39 | Crítico | No negativo, ação urgente |
| 0-19 | Emergência | Insustentável, precisa pivotar |

## Output Format

```markdown
# Diagnóstico Financeiro — Signifique | [Data]

## Score: [X/100] — [Status]

## Números Atuais
| Métrica | Valor | Status |
|---------|-------|--------|
| Receita mensal | R$ [x] | [emoji] |
| Custos fixos | R$ [x] | |
| Margem líquida | [x]% | [emoji] |
| Receita/hora | R$ [x] | [emoji] |
| Receita/cliente | R$ [x] | |
| Clientes ativos | [x] | |
| Capacidade ociosa | [x]h/mês | |

## Diagnóstico
[Análise em linguagem direta e empática]

## Gargalos Identificados
| # | Gargalo | Impacto Mensal | Ação |
|---|---------|----------------|------|

## Ações Imediatas (esta semana)
1. [ação com impacto financeiro estimado]
2. [ação]
3. [ação]

## Plano 90 Dias
### Mês 1: [tema]
[ações]

### Mês 2: [tema]
[ações]

### Mês 3: [tema]
[ações]

## Meta de Receita
| Período | Pessimista | Realista | Otimista |
|---------|-----------|----------|----------|
| Mês 1 | R$ | R$ | R$ |
| Mês 2 | R$ | R$ | R$ |
| Mês 3 | R$ | R$ | R$ |
```

## Related
- **Agent:** @pricing-strategist
- **Next:** `*simular-receita`, `*calcular-preco`
