---
task: Gerar Proposta Comercial
responsavel: "@pricing-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - cliente: Nome do cliente
  - projeto: Nome/descrição do projeto
  - preco_calculado: Output de *calcular-preco (ou informar manualmente)
  - escopo_detalhado: Lista de entregáveis
  - prazo: Prazo estimado
Saida: |
  - proposta_completa: Documento pronto para enviar ao cliente
  - tres_tiers: Essencial, Profissional, Imperial
  - roi_estimado: Estimativa de retorno para o cliente
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Montar escopo por tier"
  - "[ ] Calcular preço por tier"
  - "[ ] Estimar ROI para o cliente"
  - "[ ] Gerar documento final"
---

# *proposta-comercial

Gera proposta comercial profissional em 3 tiers para enviar ao cliente.

## Elicitação

```
? Nome do cliente?
  > [texto]

? Projeto?
  > [descrição curta]

? Já rodou *calcular-preco?
  1. Sim, vou informar os valores
  2. Não, calcular agora
  > [seleção]

? Entregáveis do projeto (liste todos):
  > [texto livre]

? Prazo estimado?
  1. 1-2 semanas
  2. 2-4 semanas
  3. 1-2 meses
  4. 3+ meses
  > [seleção]
```

## Estrutura de Tiers

### Tier 1: Essencial (70% do preço ideal)
- Escopo básico (mínimo viável)
- Menos entregáveis
- Sem extras
- **Objetivo:** Ancorar o piso. Parecer limitado comparado ao Profissional.

### Tier 2: Profissional (100% do preço ideal) ← ALVO
- Escopo completo
- Todos os entregáveis padrão
- 1 bônus incluído
- **Objetivo:** Ser a escolha óbvia. Melhor custo-benefício.

### Tier 3: Imperial (140% do preço ideal)
- Escopo completo + extras premium
- Automações com IA (AIOS/Imperial)
- Suporte estendido
- Entregáveis exclusivos
- **Objetivo:** Ancorar o teto. Posicionar capacidade AI como premium.

## Output Format

```markdown
# Proposta Comercial — [Cliente]

## [Nome do Projeto]

Prezado(a) [nome],

Obrigada pelo seu interesse. Preparei esta proposta com base no nosso alinhamento.

---

## Opção 1: Essencial — R$ [valor]
**Ideal para:** [descrição do perfil]
**Prazo:** [prazo]

**Inclui:**
- [entregável 1]
- [entregável 2]
- [entregável 3]

---

## Opção 2: Profissional — R$ [valor] ← Recomendado
**Ideal para:** [descrição do perfil]
**Prazo:** [prazo]

**Inclui:**
- [todos entregáveis do Essencial]
- [entregável extra 1]
- [entregável extra 2]
- **Bônus:** [bônus]

---

## Opção 3: Imperial — R$ [valor]
**Ideal para:** [descrição do perfil]
**Prazo:** [prazo]

**Inclui:**
- [todos entregáveis do Profissional]
- [entregável premium 1]
- [entregável premium 2]
- **Automações com IA** incluídas
- **Suporte estendido** por [período]
- **Bônus exclusivo:** [bônus]

---

## Investimento vs Retorno
[Estimativa de ROI para o cliente]

## Forma de Pagamento
- [opções: à vista com desconto, parcelado, entrada + parcelas]

## Validade
Esta proposta é válida por [15/30] dias.

## Próximos Passos
1. Escolha a opção que faz mais sentido para o seu momento
2. Assinamos o contrato
3. Começamos em até [X] dias úteis

---

*Signifique — Branding Inteligente*
```

## Related
- **Agent:** @pricing-strategist
- **Prev:** `*calcular-preco`
- **Template:** `proposta-template.md`
