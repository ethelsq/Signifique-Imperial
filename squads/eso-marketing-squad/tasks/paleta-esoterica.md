---
task: Definir Paleta e Identidade Visual Esotérica
responsavel: "@eso-designer01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - arquetipo_marca: Arquétipo definido (output de *posicionar-marca)
  - linha_produtos: Linha principal de produtos
  - referencias: Marcas/estilos que admira (opcional)
  - aplicacao: Onde será usado (web, social, embalagem, tudo)
Saida: |
  - paleta_cores: Cores primárias + secundárias + accent com hex
  - tipografia: Fontes recomendadas com uso
  - elementos_visuais: Texturas, ícones, patterns
  - moodboard_textual: Descrição detalhada do mood
  - guia_aplicacao: Como usar em cada canal
Checklist:
  - "[ ] Coletar inputs e referências"
  - "[ ] Definir paleta primária"
  - "[ ] Definir paleta secundária/accent"
  - "[ ] Recomendar tipografia"
  - "[ ] Definir elementos visuais"
  - "[ ] Criar moodboard textual"
  - "[ ] Guia de aplicação"
---

# *paleta-esoterica

Definição completa de identidade visual para marca esotérica.

## Elicitação

```
? Qual o arquétipo da marca? (output de *posicionar-marca)
  1. O Mago (transformação, poder)
  2. O Sábio (conhecimento, verdade)
  3. A Sacerdotisa (intuição, mistério)
  4. A Grande Mãe (cuidado, proteção)
  5. O Místico (transcendência)
  6. O Rebelde (empoderamento)
  7. Outro
  > [seleção]

? Linha principal de produtos?
  > [texto]

? Tem referências visuais que admira?
  > [texto ou skip]

? Onde será aplicado?
  1. Web (site + LP)
  2. Social media
  3. Embalagens
  4. Tudo (brand completo)
  > [seleção]
```

## Paletas por Arquétipo

### O Mago
- **Primária:** Roxo profundo (#2D1B69), Preto (#0A0A0A), Dourado (#BF953F)
- **Secundária:** Prata (#C0C0C0), Roxo claro (#7B68EE)
- **Accent:** Dourado brilhante (#FFD700)
- **Mood:** Poder, transformação, alquimia

### O Sábio
- **Primária:** Azul-marinho (#1B2A4A), Branco antigo (#F5F0E8), Dourado (#C5A55A)
- **Secundária:** Cinza (#8B8B8B), Azul médio (#4A6FA5)
- **Accent:** Âmbar (#FFBF00)
- **Mood:** Sabedoria, confiança, profundidade

### A Sacerdotisa
- **Primária:** Roxo-azulado (#3A1F5E), Prata (#E8E8E8), Preto (#1A1A1A)
- **Secundária:** Lavanda (#967BB6), Azul lua (#B0C4DE)
- **Accent:** Prata iridescente (#C9C0BB)
- **Mood:** Mistério, intuição, feminino sagrado

### A Grande Mãe
- **Primária:** Verde floresta (#2D5F2D), Terracota (#CC7A4F), Creme (#FFF8E7)
- **Secundária:** Verde claro (#8FBC8F), Marrom (#8B5E3C)
- **Accent:** Dourado quente (#D4A76A)
- **Mood:** Terra, acolhimento, natureza, proteção

### O Místico
- **Primária:** Índigo (#1A0533), Branco pérola (#F0EDE5), Violeta (#8A2BE2)
- **Secundária:** Rosa antigo (#D4A0A0), Cinza cósmico (#4A4A6A)
- **Accent:** Rosa neon (#FF69B4) ou Turquesa (#40E0D0)
- **Mood:** Transcendência, cosmos, espiritual contemporâneo

### O Rebelde
- **Primária:** Preto (#0A0A0A), Vermelho sangue (#8B0000), Branco (#FFFFFF)
- **Secundária:** Cinza escuro (#2A2A2A), Carmesim (#DC143C)
- **Accent:** Roxo elétrico (#9B30FF)
- **Mood:** Poder, quebra de regras, bruxaria moderna

## Tipografia Recomendada por Estilo

| Estilo | Headings | Body | Accent |
|--------|----------|------|--------|
| Clássico-Místico | Cinzel, EB Garamond | Inter, Source Sans Pro | Playfair Display (italic) |
| Moderno-Espiritual | Cormorant Garamond, Libre Baskerville | DM Sans, Nunito | Italiana |
| Bruxaria Moderna | Space Grotesk, Syne | Satoshi, General Sans | Caveat (manuscrito) |
| Luxo Esotérico | Didot, Bodoni Moda | Jost, Montserrat | Petit Formal Script |

## Elementos Visuais

| Categoria | Elementos | Aplicação |
|-----------|-----------|-----------|
| Texturas | Pergaminho, mármore, fumaça, aquarela cósmica | Backgrounds |
| Símbolos | Fases da lua, olho, estrela, serpente, triângulo | Ícones, patterns |
| Patterns | Geometria sagrada, constelações, mandalas | Fundos, embalagens |
| Fotografia | Luz natural, fumaça, cristais brilhando, flat lay | Social, LP |
| Bordas | Linhas douradas, molduras art nouveau, arcos | Cards, seções |

## Output Format

```markdown
# Identidade Visual — [Marca] | [Data]

## Paleta de Cores
### Primária
| Nome | Hex | Uso |
|------|-----|-----|

### Secundária
| Nome | Hex | Uso |
|------|-----|-----|

### Accent
| Nome | Hex | Uso |
|------|-----|-----|

## Tipografia
| Uso | Fonte | Peso | Tamanho |
|-----|-------|------|---------|

## Elementos Visuais
- Texturas: [descrição]
- Símbolos: [lista]
- Patterns: [descrição]
- Estilo fotográfico: [descrição]

## Moodboard Textual
[descrição detalhada do feeling visual da marca]

## Guia de Aplicação
### Web (Site + LP)
[como aplicar]

### Social Media
[como aplicar]

### Email
[como aplicar]

### Embalagens (se aplicável)
[como aplicar]
```

## Related
- **Agent:** @eso-designer01
- **Input from:** @mente-sa-eso01 `*posicionar-marca`
- **Used by:** `*design-lp`, `*design-criativo`, `*design-email`
