---
task: Posicionamento de Marca Esotérica
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - nome_marca: Nome da marca
  - produtos_principais: Categorias/produtos que vende
  - valores_da_marca: Valores e crenças da marca
  - publico_desejado: Quem quer atrair
  - referencias: Marcas que admira (opcional)
Saida: |
  - arquetipo: Arquétipo de marca definido com justificativa
  - tom_de_voz: Tom de voz com exemplos
  - storytelling: Narrativa fundacional da marca
  - diferenciais: Diferenciais competitivos
  - posicionamento_statement: Statement de posicionamento
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Definir arquétipo"
  - "[ ] Criar tom de voz com vocabulário"
  - "[ ] Desenvolver storytelling fundacional"
  - "[ ] Mapear diferenciais"
  - "[ ] Redigir posicionamento statement"
---

# *posicionar-marca

Define posicionamento, arquétipo, tom de voz e storytelling da marca esotérica.

## Elicitação

```
? Nome da marca?
  > [texto]

? Quais produtos/categorias principais?
  > [texto livre]

? Quais valores guiam a marca? (selecione até 3)
  1. Ancestralidade e tradição
  2. Empoderamento e transformação pessoal
  3. Conexão com a natureza
  4. Mistério e conhecimento oculto
  5. Cura e bem-estar holístico
  6. Comunidade e pertencimento
  7. Luxo e exclusividade mística
  > [seleção múltipla]

? Quem é o público ideal?
  1. Mulheres 25-40, urbanas, buscando autoconhecimento
  2. Praticantes de bruxaria moderna (Wicca, bruxaria natural)
  3. Terapeutas e profissionais holísticos
  4. Público geral interessado em espiritualidade
  > [seleção]
```

## Arquétipos para Marcas Esotéricas

| Arquétipo | Essência | Produtos que encaixam | Tom de Voz |
|-----------|----------|----------------------|------------|
| O Mago | Transformação, poder, alquimia | Rituais, kits, velas de intenção | Poderoso, transformador |
| O Sábio | Conhecimento, verdade, guia | Tarô, livros, cursos | Educativo, profundo |
| A Sacerdotisa | Intuição, mistério, feminino sagrado | Cristais, oráculos, banhos | Intuitivo, enigmático |
| A Grande Mãe | Cuidado, nutrição, proteção | Ervas, chás, proteção | Acolhedor, protetor |
| O Místico | Transcendência, conexão divina | Incensos, meditação, retiros | Contemplativo, elevado |
| O Rebelde | Quebra de padrões, empoderamento | Bruxaria moderna, WitchTok | Ousado, irreverente |

## Tom de Voz — Estrutura

Para cada arquétipo, definir:
- **Palavras-chave do vocabulário** (20-30 palavras que a marca usa)
- **Palavras proibidas** (o que nunca usar)
- **Estrutura de frase** (curta e imperativa? Longa e poética?)
- **Exemplos de post** (3 exemplos de como a marca fala)
- **Exemplos de resposta ao cliente** (como interage)

## Storytelling Fundacional

Estrutura da narrativa:
1. **Origem:** Como a marca nasceu (momento de despertar, descoberta, herança)
2. **Missão:** O que move a marca (transformar, conectar, proteger, ensinar)
3. **Visão:** O mundo que a marca quer criar
4. **Conflito:** Contra o quê a marca se posiciona (superficialidade, desconexão, consumismo vazio)
5. **Promessa:** O que o cliente ganha ao entrar nesse universo

## Output Format

```markdown
# Posicionamento de Marca — [Nome da Marca] | [Data]

## Arquétipo: [Nome do Arquétipo]
[justificativa e como se manifesta]

## Tom de Voz
- **Tom geral:** [descrição]
- **Vocabulário-chave:** [lista de palavras]
- **Palavras proibidas:** [lista]
- **Exemplo de post:** [exemplo]
- **Exemplo de resposta:** [exemplo]

## Storytelling Fundacional
[narrativa completa]

## Diferenciais Competitivos
| # | Diferencial | Como Comunicar |
|---|-------------|----------------|

## Posicionamento Statement
"[Marca] é a [categoria] para [público] que busca [desejo], através de [como], ao contrário de [concorrência] que [diferença]."

## Briefing para @eso-designer01
[elementos para *paleta-esoterica]
```

## Related
- **Agent:** @mente-sa-eso01
- **Handoff:** @eso-designer01 `*paleta-esoterica`
- **Prev:** `*pesquisa-mercado`
