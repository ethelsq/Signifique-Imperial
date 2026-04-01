---
task: Design de Criativo para Ads
responsavel: "@eso-designer01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - tipo_criativo: estático, carrossel, stories, vídeo
  - plataforma: Meta, Google, TikTok
  - mensagem_principal: Mensagem-chave do anúncio
  - produto: Produto sendo promovido
  - copy_ads: Copy do anúncio (output de *criar-copy)
Saida: |
  - briefing_criativo: Briefing completo para produção
  - especificacoes: Dimensões, formatos, restrições
  - composicao_visual: Descrição detalhada do layout
  - variacoes: 2-3 variações para teste
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Definir formato e dimensões"
  - "[ ] Criar composição principal"
  - "[ ] Especificar texto overlay"
  - "[ ] Aplicar elementos esotéricos"
  - "[ ] Gerar variações"
---

# *design-criativo

Briefing visual completo para criativos de anúncios no mercado esotérico.

## Elicitação

```
? Tipo de criativo?
  1. Estático (imagem única)
  2. Carrossel (múltiplas imagens)
  3. Stories (vertical fullscreen)
  4. Vídeo (storyboard)
  > [seleção]

? Plataforma principal?
  1. Meta (Instagram/Facebook)
  2. Google Display
  3. TikTok
  > [seleção]

? Produto e mensagem principal?
  > [texto]
```

## Dimensões por Plataforma

| Formato | Meta | Google | TikTok |
|---------|------|--------|--------|
| Feed quadrado | 1080x1080 | 1200x1200 | — |
| Feed retrato | 1080x1350 | — | — |
| Stories/Reels | 1080x1920 | — | 1080x1920 |
| Landscape | 1200x628 | 1200x628 | — |
| Carrossel | 1080x1080 (x3-10) | — | — |

## Composição por Tipo

### Estático — Thumb-Stopping Framework
```
┌─────────────────────┐
│  [HOOK VISUAL]      │ ← Elemento que para o scroll
│                     │    (contraste, rosto, movimento)
│  [PRODUTO]          │ ← Produto em contexto
│                     │
│  [TEXTO OVERLAY]    │ ← Headline curta (max 20% área)
│                     │
│  [CTA VISUAL]       │ ← Botão ou seta
└─────────────────────┘
```

### Carrossel — Storytelling Sequence
- Card 1: Hook (pergunta ou statement forte)
- Card 2-3: Desenvolvimento (benefícios, problema→solução)
- Card 4: Produto em destaque
- Card 5: CTA + oferta

### Stories — Vertical Impact
- Primeiros 2 seg: hook visual que segura
- Fullscreen, foco central
- Texto grande, legível sem expandir
- Swipe up / link adesivo claro

## Elementos Visuais Esotéricos para Ads

| Elemento | Uso | Cuidado |
|----------|-----|---------|
| Fases da lua | Background, moldura | Não poluir |
| Cristais com luz | Hero do produto | Foto real > ilustração |
| Fumaça de incenso | Overlay sutil | Não cobrir texto |
| Mandala/geometria sagrada | Background, moldura | Sutileza |
| Mãos segurando produto | Humanizar | Unhas cuidadas |
| Flat lay ritual | Contexto de uso | Iluminação natural |

## Output Format

```markdown
# Briefing Criativo — [Tipo] | [Plataforma] | [Data]

## Especificações
- Formato: [dimensões]
- Tipo: [estático/carrossel/stories/vídeo]
- Regras de texto: [% overlay permitido]

## Composição Principal
[descrição detalhada da composição visual]

## Texto Overlay
- Headline: [texto] | [fonte] [tamanho]
- Sub: [texto] | [fonte] [tamanho]
- CTA: [texto] | [estilo do botão]

## Paleta
- Background: [cor]
- Texto: [cor]
- Accent/CTA: [cor]

## Variação #1
[descrição]

## Variação #2
[descrição]

## Notas de Produção
[instruções para designer/fotógrafo]
```

## Related
- **Agent:** @eso-designer01
- **Input from:** @mente-sa-eso01 `*criar-copy`
