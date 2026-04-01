---
task: Calcular Preço de Projeto
responsavel: "@pricing-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - tipo_servico: branding | marketing | ai-consulting | pacote
  - escopo: Descrição do escopo do projeto
  - horas_estimadas: Estimativa de horas (se souber)
  - urgencia: normal | urgente | emergencial
  - complexidade: baixa | media | alta
  - usa_ai: Se usará capacidades AIOS/Imperial
  - recorrencia: avulso | retainer
Saida: |
  - preco_piso: Mínimo viável (cobre custos)
  - preco_benchmark: Baseado no mercado
  - preco_ideal: Com multiplicadores de valor
  - preco_premium: Posicionamento Imperial
  - tabela_comparativa: 3 layers lado a lado
  - recomendacao: Qual preço usar e por quê
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Calcular piso de custo"
  - "[ ] Buscar benchmark na tabela"
  - "[ ] Aplicar multiplicadores"
  - "[ ] Gerar recomendação"
  - "[ ] Validar contra custos fixos"
---

# *calcular-preco

Calcula o preço justo de um projeto usando 3 camadas: Piso de Custo → Benchmark → Valor Percebido.

## Elicitação

```
? Tipo de serviço?
  1. Branding (posicionamento, identidade, brand book)
  2. Marketing Digital (tráfego, LPs, campanhas)
  3. Consultoria AI (diagnóstico, automação, agentes)
  4. Pacote combinado
  > [seleção]

? Descreva o escopo do projeto:
  > [texto livre]

? Urgência?
  1. Normal (prazo confortável)
  2. Urgente (prazo apertado, <2 semanas)
  3. Emergencial (precisa para ontem)
  > [seleção]

? Complexidade?
  1. Baixa (escopo simples, poucos entregáveis)
  2. Média (escopo padrão)
  3. Alta (múltiplos entregáveis, nicho restrito, regulamentação)
  > [seleção]

? Vai usar capacidades de IA (AIOS/Imperial)?
  1. Sim (agentes, automações, análises com IA)
  2. Não (trabalho manual/tradicional)
  > [seleção]

? Modelo de cobrança?
  1. Projeto avulso (valor fechado)
  2. Retainer mensal (recorrente)
  > [seleção]
```

## Cálculo — Camada 1: Piso de Custo

```
1. Ler squads/sig-core/data/custos-fixos.yaml
2. Total de custos fixos mensais = X
3. Horas produtivas mensais = 100h (padrão solo)
4. Custo-hora piso = X / 100
5. Horas estimadas do projeto = Y
6. PISO = Custo-hora × Horas estimadas

REGRA: Se preço final < PISO → ALERTAR. Projeto é inviável.
```

## Cálculo — Camada 2: Benchmark de Mercado

```
1. Ler squads/sig-core/data/tabela-precos.yaml
2. Encontrar serviço correspondente
3. Usar faixa "pleno" como referência base
4. BENCHMARK = Média da faixa pleno
```

## Cálculo — Camada 3: Valor Percebido

```
BASE = MAX(PISO, BENCHMARK)

Multiplicadores:
  × Urgência (1.0 / 1.5 / 2.0)
  × Complexidade (0.8 / 1.0 / 1.3)
  × AI Premium (1.3 se usa IA)
  × Recorrência (0.85 se retainer)

PRECO_IDEAL = BASE × multiplicadores

PRECO_PREMIUM = PRECO_IDEAL × 1.4 (tier Imperial)
```

## Output Format

```markdown
# Cálculo de Preço — [Tipo de Serviço] | [Data]

## Dados do Projeto
- Tipo: [tipo]
- Escopo: [descrição]
- Urgência: [nível] (×[multiplicador])
- Complexidade: [nível] (×[multiplicador])
- IA: [sim/não] (×[multiplicador])
- Modelo: [avulso/retainer]

## Camada 1 — Piso de Custo
- Custos fixos mensais: R$ [X]
- Custo-hora piso: R$ [Y]
- Horas estimadas: [Z]h
- **PISO: R$ [valor]**

## Camada 2 — Benchmark de Mercado
- Serviço: [nome do serviço na tabela]
- Faixa junior: R$ [min]-[max]
- Faixa pleno: R$ [min]-[max]
- Faixa senior: R$ [min]-[max]
- **BENCHMARK (pleno médio): R$ [valor]**

## Camada 3 — Valor Percebido
- Base: R$ [MAX(piso, benchmark)]
- Multiplicadores: [detalhamento]
- **PREÇO IDEAL: R$ [valor]**
- **PREÇO PREMIUM: R$ [valor]**

## Comparativo
| Camada | Valor | Hora equivalente |
|--------|-------|------------------|
| Piso | R$ [x] | R$ [x/h] |
| Benchmark | R$ [x] | R$ [x/h] |
| Ideal | R$ [x] | R$ [x/h] |
| Premium | R$ [x] | R$ [x/h] |

## Recomendação
[Qual preço usar e por quê. Se está subcobrando, alertar claramente.]

## Próximo Passo
→ `*proposta-comercial` para gerar proposta em 3 tiers com este preço
```

## Related
- **Agent:** @pricing-strategist
- **Data:** tabela-precos.yaml, custos-fixos.yaml
- **Next:** `*proposta-comercial`
