---
task: Design de Landing Page de Alta Conversão
responsavel: "@eso-designer01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - tipo_lp: Tipo definido pelo MenteSaEso01 (squeeze, vendas, VSL, quiz, catálogo)
  - copy_aprovada: Copy completa das seções (output de *criar-lp)
  - identidade_visual: Paleta, tipografia (output de *paleta-esoterica ou briefing)
  - produto: Produto/oferta sendo promovido
Saida: |
  - wireframe_textual: Wireframe detalhado seção por seção
  - hierarquia_visual: Especificação de hierarquia e peso visual
  - layout_responsivo: Comportamento mobile vs desktop
  - especificacoes: Cores, fontes, espaçamentos, elementos
Checklist:
  - "[ ] Receber copy e briefing"
  - "[ ] Definir grid e estrutura"
  - "[ ] Wireframe de cada seção"
  - "[ ] Especificar hierarquia visual"
  - "[ ] Definir comportamento responsivo"
  - "[ ] Aplicar estética mística"
  - "[ ] Validar contra checklist de conversão"
---

# *design-lp

Wireframe e especificação visual completa de LP de alta conversão para o mercado esotérico.

## Elicitação

```
? Já tem a copy aprovada? (output de *criar-lp)
  1. Sim, vou fornecer
  2. Não, preciso rodar *criar-lp primeiro
  > [seleção]

? Já tem identidade visual definida?
  1. Sim, vou fornecer paleta e fontes
  2. Não, preciso rodar *paleta-esoterica primeiro
  3. Use defaults esotéricos
  > [seleção]

? Tipo de LP?
  1. Squeeze Page
  2. Página de Vendas
  3. VSL
  4. Quiz Funnel
  5. Catálogo
  > [seleção]
```

## Estrutura do Wireframe

### Padrão por Seção

```
┌─────────────────────────────────────────┐
│ SEÇÃO: [nome]                           │
│ OBJETIVO: [o que esta seção faz]        │
│ PESO VISUAL: [alto/médio/baixo]         │
│─────────────────────────────────────────│
│ LAYOUT:                                  │
│  [descrição visual do layout]            │
│                                          │
│ ELEMENTOS:                               │
│  - [elemento 1]: [especificação]         │
│  - [elemento 2]: [especificação]         │
│                                          │
│ TIPOGRAFIA:                              │
│  - Headline: [fonte] [tamanho] [peso]    │
│  - Body: [fonte] [tamanho]               │
│                                          │
│ CORES:                                   │
│  - Background: [cor]                     │
│  - Texto: [cor]                          │
│  - Accent: [cor]                         │
│                                          │
│ MOBILE:                                  │
│  [como muda no mobile]                   │
│                                          │
│ CTA: [se houver nesta seção]             │
└─────────────────────────────────────────┘
```

### Seções Padrão — Página de Vendas Esotérica

1. **Hero Section** (peso: ALTO)
   - Imagem/vídeo do produto em contexto ritual
   - Headline sobre a headline (pré-título em caps)
   - Headline principal (Cinzel ou serif mística)
   - Sub-headline (Playfair italic)
   - CTA primário (botão dourado/accent)
   - Elemento visual de credibilidade

2. **Problema/Dor** (peso: MÉDIO)
   - Background escuro (contraste)
   - Ícones + texto curto (3 dores)
   - Transição visual para solução

3. **Solução/Produto** (peso: ALTO)
   - Galeria do produto (foto principal + thumbnails)
   - Descrição com benefícios visuais
   - Elementos simbólicos sutis (lua, estrelas, símbolos)

4. **Benefícios** (peso: MÉDIO)
   - Grid 3 colunas (desktop) → stack (mobile)
   - Ícone místico + título + descrição curta
   - Fundo com textura sutil (pergaminho, fumaça)

5. **Prova Social** (peso: ALTO)
   - Depoimentos com foto (cards)
   - Avaliação em estrelas
   - Contador de clientes/vendas

6. **Oferta** (peso: ALTO)
   - Preço com ancoragem visual (de/por)
   - Bônus listados
   - Timer ou escassez visual
   - CTA grande, impossível de ignorar

7. **FAQ** (peso: BAIXO)
   - Accordion/collapse
   - Fundo neutro

8. **CTA Final** (peso: ALTO)
   - Repetição da oferta compacta
   - Último push emocional
   - Selos de segurança

## Checklist de Conversão Visual

- [ ] CTA visível sem scroll (above the fold)
- [ ] Contraste do botão CTA >4.5:1
- [ ] Máximo 1 ação por seção
- [ ] Espaço em branco suficiente (respiro)
- [ ] Hierarquia clara: headline > sub > body > CTA
- [ ] Imagens otimizadas (<200kb)
- [ ] Mobile: botão CTA acessível com polegar
- [ ] Mobile: fontes mínimo 16px body
- [ ] Prova social acima da dobra ou logo abaixo
- [ ] Elementos de confiança (selos, garantia) perto do CTA

## Output Format

```markdown
# Wireframe LP — [Produto] | [Tipo] | [Data]

## Especificações Gerais
- Grid: [12 colunas, max-width 1200px]
- Paleta: [cores]
- Tipografia: [fontes]
- Estilo: [descrição da estética]

## Seção 1: Hero
[wireframe textual detalhado]

## Seção 2: [nome]
[wireframe textual detalhado]

[... todas as seções]

## Comportamento Responsivo
[especificações mobile/tablet]

## Checklist de Conversão
[resultado do checklist]
```

## Related
- **Agent:** @eso-designer01
- **Input from:** @mente-sa-eso01 `*criar-lp`
- **Checklist:** `lp-conversion-checklist.md`
