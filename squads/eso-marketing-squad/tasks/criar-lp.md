---
task: Criar Landing Page Estratégica
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - produto_ou_oferta: O que será promovido na LP
  - objetivo_da_lp: Captura de lead, venda direta, VSL, quiz
  - publico_alvo: Segmento de público-alvo
  - tom_da_marca: Tom de voz definido (opcional, usar *posicionar-marca antes)
Saida: |
  - tipo_lp_recomendado: Tipo escolhido com justificativa
  - estrutura_secoes: Seções detalhadas da LP
  - copy_completa: Headlines, body, CTAs
  - gatilhos_aplicados: Gatilhos mentais utilizados
  - briefing_para_designer: Documento para @eso-designer01
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Recomendar tipo de LP"
  - "[ ] Estruturar seções"
  - "[ ] Escrever copy de cada seção"
  - "[ ] Definir CTAs"
  - "[ ] Aplicar gatilhos esotéricos"
  - "[ ] Gerar briefing para designer"
---

# *criar-lp

Define tipo, estrutura e copy de uma landing page para produtos esotéricos.

## Elicitação

```
? O que será promovido?
  > [produto, kit, oferta, lead magnet]

? Qual o objetivo da LP?
  1. Squeeze Page — Capturar email (lead magnet, ebook, guia)
  2. Página de Vendas — Venda direta de produto/kit
  3. VSL — Vídeo de vendas com CTA
  4. Quiz Funnel — Quiz interativo que segmenta e vende
  5. Catálogo — Vitrine de produtos
  > [seleção]

? Quem é o público desta LP?
  1. Iniciante curioso em esoterismo
  2. Praticante regular
  3. Terapeuta holístico / profissional
  4. Presente (pessoa comprando para outra)
  > [seleção]
```

## Tipos de LP e Quando Usar

| Tipo | Quando Usar | Ticket | Funil |
|------|-------------|--------|-------|
| Squeeze Page | Captura de leads, topo de funil | Gratuito | TOFU |
| Página de Vendas | Produto até R$200, impulso | Baixo-médio | BOFU |
| VSL | Produto R$200+, precisa educar | Médio-alto | MOFU/BOFU |
| Quiz Funnel | Segmentação + personalização | Variável | MOFU |
| Catálogo | Múltiplos produtos, tráfego quente | Variável | BOFU |

## Estrutura por Tipo

### Squeeze Page
1. **Hero:** Headline com promessa + imagem do lead magnet
2. **Benefícios:** 3 bullets do que vai aprender/receber
3. **Formulário:** Nome + email (mínimo)
4. **Prova social:** Número de downloads ou depoimento
5. **Urgência:** Timer ou vagas limitadas

### Página de Vendas
1. **Hero:** Headline + sub-headline + imagem hero do produto
2. **Problema:** Dor/desejo que o produto resolve
3. **Solução:** Como o produto transforma
4. **Benefícios:** 3-5 benefícios com ícones
5. **Prova social:** Depoimentos, avaliações
6. **Oferta:** Preço, kits, bônus
7. **FAQ:** Objeções respondidas
8. **CTA Final:** Último push com urgência

### Gatilhos Esotéricos Específicos
- **Mistério:** "Descubra o segredo que...", "O que os antigos sabiam..."
- **Transformação:** "Transmute sua energia", "Eleve sua vibração"
- **Pertencimento:** "Junte-se a milhares de praticantes", "Círculo sagrado"
- **Urgência espiritual:** "A lua cheia se aproxima", "Equinócio em X dias"
- **Autoridade ancestral:** "Tradição milenar", "Sabedoria das bruxas antigas"

## Output Format

```markdown
# Landing Page — [Produto/Oferta] | [Data]

## Tipo Recomendado
[tipo + justificativa]

## Estrutura de Seções

### Seção 1: Hero
- Headline: [headline]
- Sub-headline: [sub-headline]
- CTA: [texto do botão]
- Visual: [descrição da imagem/vídeo]

### Seção 2: [nome]
[conteúdo da seção]

[... demais seções]

## Copy Completa
[toda a copy organizada por seção]

## Gatilhos Aplicados
| Gatilho | Onde | Como |
|---------|------|------|

## Briefing para @eso-designer01
[resumo para o designer executar *design-lp]
```

## Related
- **Agent:** @mente-sa-eso01
- **Handoff:** @eso-designer01 `*design-lp`
- **Prev:** `*estrategia-trafego`
