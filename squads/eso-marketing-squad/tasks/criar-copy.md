---
task: Criar Copy Esotérica
responsavel: "@mente-sa-eso01"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - tipo: anúncio, LP, email, post, stories
  - produto_ou_oferta: O que está promovendo
  - publico_alvo: Segmento
  - tom_desejado: Tom de voz (usar *posicionar-marca se não definido)
  - plataforma: Onde será veiculado
Saida: |
  - copy_principal: Copy final
  - variacoes: 2-3 variações para teste A/B
  - gatilhos_aplicados: Lista de gatilhos usados
  - cta: Call to action recomendado
Checklist:
  - "[ ] Coletar inputs"
  - "[ ] Selecionar framework de copy"
  - "[ ] Escrever copy principal"
  - "[ ] Aplicar gatilhos esotéricos"
  - "[ ] Gerar variações A/B"
  - "[ ] Definir CTA"
---

# *criar-copy

Copywriting especializada para o mercado esotérico com gatilhos mentais do nicho.

## Elicitação

```
? Tipo de copy?
  1. Anúncio (Meta/Google/TikTok)
  2. Landing Page (seções completas)
  3. Email marketing
  4. Post/caption Instagram
  5. Stories sequence
  > [seleção]

? Produto/oferta?
  > [texto]

? Público-alvo?
  1. Iniciante curioso
  2. Praticante regular
  3. Terapeuta/profissional
  > [seleção]

? Plataforma de veiculação?
  > [texto]
```

## Frameworks de Copy Adaptados

### AIDA Esotérico
- **Atenção:** Hook místico que para o scroll
- **Interesse:** Problema/desejo espiritual
- **Desejo:** Transformação prometida
- **Ação:** CTA com urgência espiritual

### PAS Esotérico
- **Problema:** Desequilíbrio, bloqueio, desconexão
- **Agitação:** Consequências de permanecer assim
- **Solução:** Produto como ponte para transformação

### BAB Esotérico
- **Before:** Situação atual (energia estagnada, sem clareza)
- **After:** Estado desejado (alinhamento, proteção, abundância)
- **Bridge:** Produto como caminho

## Gatilhos Esotéricos (Biblioteca)

| Gatilho | Exemplo | Quando usar |
|---------|---------|-------------|
| Mistério | "O que os antigos sabiam sobre..." | TOFU, hooks |
| Transformação | "Transmute sua energia em 7 dias" | MOFU, LP |
| Pertencimento | "Milhares já despertaram" | Prova social |
| Urgência espiritual | "A lua nova de amanhã potencializa..." | BOFU, promos |
| Autoridade ancestral | "Tradição de 3000 anos" | Confiança |
| Exclusividade | "Edição limitada do solstício" | Escassez |
| Proteção | "Seu escudo energético pessoal" | Produto |
| Abundância | "Abra os caminhos da prosperidade" | Produto |
| Despertar | "Você sentiu o chamado?" | TOFU, hooks |
| Ritual | "Seu ritual diário de poder" | Recorrência |

## Vocabulário de Alta Conversão no Nicho

**Palavras que convertem:** despertar, transmutação, sagrado, ritual, proteção, abundância, alinhamento, ancestral, intuição, portal, energia, vibração, cristalino, lunar, oráculo

**Palavras a evitar:** cura (restrição legal), garantia de resultado espiritual, promessas absolutas

## Output Format

```markdown
# Copy — [Tipo] | [Produto] | [Data]

## Framework: [AIDA/PAS/BAB]

## Copy Principal
[copy completa formatada para o canal]

## Variação A/B #1
[variação]

## Variação A/B #2
[variação]

## Gatilhos Aplicados
| Gatilho | Onde | Texto |
|---------|------|-------|

## CTA
- Principal: [texto do CTA]
- Alternativo: [variação]

## Notas para Designer
[instruções visuais se aplicável]
```

## Related
- **Agent:** @mente-sa-eso01
- **Handoff:** @eso-designer01 `*design-criativo`
- **Prev:** `*posicionar-marca`
