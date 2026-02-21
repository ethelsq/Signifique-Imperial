---
task: Design de Email Marketing
responsavel: "@eso-designer01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - tipo_email: boas-vindas, nurturing, promocional, abandono de carrinho
  - copy_aprovada: Texto do email (output de *criar-copy ou fornecido)
  - identidade_visual: Paleta e tipografia da marca
Saida: |
  - estrutura_blocos: Layout de blocos do email
  - hierarquia: Especificação visual
  - subject_lines: Sugestões de assunto
  - preview_text: Texto de preview
Checklist:
  - "[ ] Definir tipo e objetivo"
  - "[ ] Estruturar blocos"
  - "[ ] Especificar hierarquia"
  - "[ ] Garantir compatibilidade email clients"
  - "[ ] Sugerir subject lines"
---

# *design-email

Estrutura visual de email marketing para o mercado esotérico.

## Elicitação

```
? Tipo de email?
  1. Boas-vindas (onboarding)
  2. Nurturing (educativo/valor)
  3. Promocional (oferta/desconto)
  4. Abandono de carrinho
  5. Pós-compra (unboxing ritual)
  > [seleção]

? Já tem a copy?
  1. Sim
  2. Não, preciso rodar *criar-copy tipo email primeiro
  > [seleção]
```

## Templates por Tipo

### Boas-vindas
```
┌─────────────────────────────┐
│ LOGO + header místico        │
├─────────────────────────────┤
│ Hero image (ritual/produto)  │
├─────────────────────────────┤
│ "Bem-vinda ao nosso círculo" │
│ [mensagem de acolhimento]    │
├─────────────────────────────┤
│ O que esperar (3 bullets)    │
├─────────────────────────────┤
│ CTA: "Conheça nossa coleção" │
├─────────────────────────────┤
│ Redes sociais + footer       │
└─────────────────────────────┘
```

### Promocional
```
┌─────────────────────────────┐
│ LOGO + faixa "Lua Cheia"     │
├─────────────────────────────┤
│ Hero: produto + desconto     │
├─────────────────────────────┤
│ Headline da oferta           │
│ De R$XX por R$YY             │
├─────────────────────────────┤
│ 2-3 produtos destaque (grid) │
├─────────────────────────────┤
│ Timer/urgência               │
├─────────────────────────────┤
│ CTA: "Aproveitar agora"     │
├─────────────────────────────┤
│ Footer                       │
└─────────────────────────────┘
```

### Abandono de Carrinho
```
┌─────────────────────────────┐
│ LOGO                         │
├─────────────────────────────┤
│ "Seu ritual ficou incompleto"│
├─────────────────────────────┤
│ Imagem do produto abandonado │
├─────────────────────────────┤
│ Motivo para completar        │
│ (escassez/benefício)         │
├─────────────────────────────┤
│ CTA: "Completar meu ritual"  │
├─────────────────────────────┤
│ Depoimento curto             │
├─────────────────────────────┤
│ Footer                       │
└─────────────────────────────┘
```

## Limitações Técnicas de Email

- Largura máxima: 600px
- Fontes web: fallback obrigatório (Arial, Georgia, Times)
- CSS inline obrigatório
- Evitar: flexbox, grid, position absolute
- Usar: tables para layout
- Dark mode: testar inversão de cores
- Imagens: sempre com alt text

## Output Format

```markdown
# Design Email — [Tipo] | [Data]

## Especificações
- Largura: 600px
- Paleta: [cores]
- Font stack: [primária], [fallback]

## Estrutura de Blocos
[wireframe textual de cada bloco]

## Subject Lines (3 variações)
1. [subject line 1]
2. [subject line 2]
3. [subject line 3]

## Preview Text
[texto de preview]

## Dark Mode
[ajustes para dark mode]
```

## Related
- **Agent:** @eso-designer01
- **Input from:** @mente-sa-eso01 `*criar-copy`
