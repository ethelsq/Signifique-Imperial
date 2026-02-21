---
task: Simular Cenários de Receita
responsavel: "@pricing-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - clientes_atuais: Clientes e valores atuais
  - pipeline: Clientes em prospecção
  - servicos_disponiveis: Serviços que oferece
  - capacidade_horas: Horas disponíveis por mês
Saida: |
  - cenario_pessimista: Receita mínima provável
  - cenario_realista: Receita esperada
  - cenario_otimista: Receita se tudo der certo
  - break_even: Ponto de equilíbrio
  - meta_mensal: Meta recomendada
Checklist:
  - "[ ] Coletar dados"
  - "[ ] Modelar 3 cenários"
  - "[ ] Calcular break-even"
  - "[ ] Definir meta mensal"
  - "[ ] Plano de ação por cenário"
---

# *simular-receita

Simula cenários de receita mensal para planejamento financeiro.

## Elicitação

```
? Clientes atuais e quanto paga cada um?
  > [lista]

? Tem clientes em prospecção?
  > [lista ou "não"]

? Quais serviços oferece e pode oferecer?
  > [lista]

? Quantas horas/mês tem disponível para trabalho?
  > [número]
```

## Modelo de Simulação

### Cenário Pessimista (pior caso realista)
- Apenas clientes atuais confirmados
- Sem novos clientes
- Possível redução de escopo/valor

### Cenário Realista (esperado)
- Clientes atuais mantidos
- 1 novo cliente a cada 2 meses
- Upsell de 1 serviço em cliente existente

### Cenário Otimista (se executar bem)
- Clientes atuais com upsell
- 1 novo cliente por mês
- Mix saudável projeto + retainer

## Output Format

```markdown
# Simulação de Receita — [Data]

## Premissas
[dados utilizados]

## Cenários (próximos 6 meses)

| Mês | Pessimista | Realista | Otimista |
|-----|-----------|----------|----------|
| Mar | R$ | R$ | R$ |
| Abr | R$ | R$ | R$ |
| Mai | R$ | R$ | R$ |
| Jun | R$ | R$ | R$ |
| Jul | R$ | R$ | R$ |
| Ago | R$ | R$ | R$ |

## Break-Even
- Custos fixos: R$ [x]/mês
- Break-even = [x] (precisa faturar pelo menos isso)

## Meta Recomendada
- **Meta mensal: R$ [x]**
- Composição: [x clientes projeto + y retainers]

## Como Chegar Lá
### Ação 1: [ação com impacto estimado]
### Ação 2: [ação]
### Ação 3: [ação]
```

## Related
- **Agent:** @pricing-strategist
- **Prev:** `*diagnostico-negocio`
