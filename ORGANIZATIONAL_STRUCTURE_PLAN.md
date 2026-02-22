# 🏛️ Organizational Structure & Squad Separation Plan

**Projeto:** Signifique Imperial Consultoria
**Documento:** Organizational Architecture Plan
**Status:** ⏳ PENDING EXECUTION
**Data:** 22 de Fevereiro, 2026

---

## 🎯 CONTEXTO CORRETO

### Sua Estrutura

**Signifique Imperial** = SUA Consultoria de Negócios
- Áreas: Estratégia, Marketing, Branding, Design, UX, Service Design
- Objetivo: Ser Advisor de negócios para múltiplos clientes

**Mente Sa** = UM CLIENTE SEU com 2 negócios:
1. **Loja de Esoterismo** (Nicho específico)
2. **Loja de Biocosméticos** (Nicho específico)

---

## ❌ PROBLEMA ATUAL

```
Estrutura errada:
├── squads/market-research-elite/     ← Correto (genérico)
├── squads/eso-marketing-squad/       ← ❌ Específico para Mente Sa, mas fora de lugar
├── squads/marketing-opes/            ← ❌ Específico para Mente Sa, mas fora de lugar
└── (sem estrutura para outros clientes)

Confusão:
- Não há separação entre trabalhos da sua consultoria vs. trabalhos de Mente Sa
- Results futuros podem ficar misturados
- Escalabilidade comprometida
```

---

## ✅ ESTRUTURA CORRETA PROPOSTA

```
squads/
│
├── CONSULTORIA SIGNIFIQUE (Genéricos para todos os clientes)
│   ├── market-research-elite/        ← Pesquisa para qualquer nicho
│   └── marketing-opes/               ← Board estratégico genérico
│
├── CLIENTES/
│   │
│   └── mente-sa/                    ← Pasta do cliente Mente Sa
│       ├── mente-sa-esoterismo/     ← Squad específico do negócio 1
│       │   ├── eso-marketing-squad/  ← Execução marketing (hoje eso-marketing-squad)
│       │   ├── eso-brand-strategy/   ← Branding específico para esoterismo
│       │   ├── eso-ux-design/        ← UX/Design para esoterismo
│       │   └── config.yaml
│       │
│       └── mente-sa-biocosmeticos/  ← Squad específico do negócio 2
│           ├── bio-marketing-squad/  ← Execução marketing (novo)
│           ├── bio-brand-strategy/   ← Branding específico para biocosméticos
│           ├── bio-ux-design/        ← UX/Design para biocosméticos
│           └── config.yaml
│
└── (Futuros clientes virão aqui)
```

---

## 📋 AÇÕES NECESSÁRIAS

### FASE 1: Documentação & Planejamento (Esta janela de contexto)
✅ **Status:** EM PROGRESSO

**Tarefas:**
- [x] Entender contexto correto
- [x] Documentar estrutura proposta
- [x] Criar plano detalhado
- [ ] Revisar com Ethel
- [ ] Aprovação para próxima janela

**Responsável:** Craft
**Tempo estimado:** 30 min
**Status atual:** EM ANDAMENTO

---

### FASE 2: Reorganização de Arquivos (Próxima janela)
⏳ **Status:** PENDENTE

**Tarefas:**
- [ ] Criar estrutura de diretórios:
  - [ ] `squads/clientes/` (novo diretório)
  - [ ] `squads/clientes/mente-sa/` (novo)
  - [ ] `squads/clientes/mente-sa/mente-sa-esoterismo/` (novo)
  - [ ] `squads/clientes/mente-sa/mente-sa-biocosmeticos/` (novo)

- [ ] Mover arquivos:
  - [ ] `squads/eso-marketing-squad/` → `squads/clientes/mente-sa/mente-sa-esoterismo/eso-marketing-squad/`
  - [ ] `squads/marketing-opes/` → `squads/clientes/mente-sa/marketing-opes/` (ou renomear para bio também?)

- [ ] Criar estruturas novas:
  - [ ] `mente-sa-biocosmeticos/bio-marketing-squad/`
  - [ ] `mente-sa-esoterismo/eso-brand-strategy/`
  - [ ] `mente-sa-biocosmeticos/bio-brand-strategy/`
  - [ ] Etc.

**Responsável:** Craft
**Tempo estimado:** 2-3 horas
**Complexidade:** MÉDIA (muitos arquivos para reorganizar)

---

### FASE 3: Atualizar Documentação (Próxima janela)
⏳ **Status:** PENDENTE

**Tarefas:**
- [ ] Atualizar `squad-integration-guide.md`:
  - [ ] Deixar genérico (para consultoria)
  - [ ] Remover referências a Mente Sa específicas

- [ ] Criar `docs/clients/mente-sa/README.md`:
  - [ ] Visão geral de Mente Sa
  - [ ] Separação entre os 2 negócios
  - [ ] Como usar cada squad

- [ ] Criar `docs/clients/mente-sa/mente-sa-esoterismo/README.md`:
  - [ ] Objetivos do negócio
  - [ ] Squads disponíveis
  - [ ] Métricas de sucesso

- [ ] Criar `docs/clients/mente-sa/mente-sa-biocosmeticos/README.md`:
  - [ ] Objetivos do negócio
  - [ ] Squads disponíveis
  - [ ] Métricas de sucesso

**Responsável:** Craft
**Tempo estimado:** 1-2 horas

---

### FASE 4: Validação & Commit (Próxima janela)
⏳ **Status:** PENDENTE

**Tarefas:**
- [ ] Validar estrutura P0 para cada squad cliente
- [ ] Gerar relatórios de validação
- [ ] Criar commits finais com mensagens claras
- [ ] Documentar em CHANGELOG

**Responsável:** Craft
**Tempo estimado:** 1 hora

---

## 📐 PROPOSTA DE ESTRUTURA DETALHADA

### Nível 1: Consultoria (Genérico)

```
squads/
├── market-research-elite/
│   ├── README.md
│   ├── squad.yaml
│   ├── agents/ (9)
│   ├── tasks/ (8)
│   ├── workflows/ (4)
│   ├── templates/ (3)
│   ├── checklists/ (3)
│   ├── data/ (3)
│   └── scripts/ (2)
│
└── marketing-opes/ [GENÉRICO - Separado do marketing-opes atual]
    ├── README.md
    ├── squad.yaml (NOVO - criar)
    ├── agents/ (board-orchestrator genérico)
    ├── tasks/ (consult-board, evaluate-deal, strategic-review)
    ├── workflows/
    ├── templates/
    ├── checklists/
    └── data/
```

**Objetivo:** Usar esses squads para TODOS os clientes da consultoria

---

### Nível 2: Clientes Específicos

```
squads/clientes/
│
├── mente-sa/
│   ├── README.md (Overview de Mente Sa)
│   ├── config.yaml (Configuração geral do cliente)
│   │
│   ├── mente-sa-esoterismo/
│   │   ├── README.md
│   │   ├── squad.yaml (NOVO)
│   │   │
│   │   ├── eso-marketing-squad/ [MOVER daqui: squads/eso-marketing-squad]
│   │   │   ├── agents/ (@mente-sa-eso01, @eso-designer01)
│   │   │   ├── tasks/ (13)
│   │   │   ├── templates/
│   │   │   └── checklists/
│   │   │
│   │   ├── eso-brand-strategy/ [NOVO]
│   │   │   ├── README.md
│   │   │   ├── agents/ (brand-strategist para esoterismo)
│   │   │   └── tasks/ (brand positioning, messaging, etc.)
│   │   │
│   │   ├── eso-ux-design/ [NOVO]
│   │   │   ├── README.md
│   │   │   ├── agents/ (UX specialist para esoterismo)
│   │   │   └── tasks/ (user research, wireframes, etc.)
│   │   │
│   │   ├── docs/
│   │   │   ├── brand-guidelines.md
│   │   │   ├── messaging-strategy.md
│   │   │   └── customer-personas.md
│   │   │
│   │   └── data/
│   │       ├── market-insights.yaml
│   │       ├── competitor-analysis.md
│   │       └── customer-research.md
│   │
│   └── mente-sa-biocosmeticos/ [NOVO]
│       ├── README.md
│       ├── squad.yaml
│       │
│       ├── bio-marketing-squad/ [NOVO - Clone/Adapt de eso-marketing-squad]
│       │   ├── agents/ (specializado para biocosméticos)
│       │   ├── tasks/ (13)
│       │   ├── templates/
│       │   └── checklists/
│       │
│       ├── bio-brand-strategy/ [NOVO]
│       │   ├── README.md
│       │   ├── agents/
│       │   └── tasks/
│       │
│       ├── bio-ux-design/ [NOVO]
│       │   ├── README.md
│       │   ├── agents/
│       │   └── tasks/
│       │
│       ├── docs/
│       └── data/
│
└── (Futuros clientes irão aqui com estrutura similar)
```

---

## 🔄 Fluxo de Trabalho por Cliente

### Mente Sa - Loja de Esoterismo

```
1. PESQUISA (market-research-elite - GENÉRICO)
   └─ 8 fases de pesquisa de mercado

2. ESTRATÉGIA (marketing-opes - GENÉRICO)
   └─ Board decision: Entrar ou não no mercado esotérico?

3. BRANDING (eso-brand-strategy - ESPECÍFICO)
   └─ Brand identity para loja de esoterismo

4. UX/DESIGN (eso-ux-design - ESPECÍFICO)
   └─ User experience e design visual

5. EXECUÇÃO (eso-marketing-squad - ESPECÍFICO)
   └─ Campanhas, landing pages, copy
```

### Mente Sa - Loja de Biocosméticos

```
1. PESQUISA (market-research-elite - GENÉRICO)
   └─ 8 fases de pesquisa de mercado

2. ESTRATÉGIA (marketing-opes - GENÉRICO)
   └─ Board decision: Entrar ou não no mercado de biocosméticos?

3. BRANDING (bio-brand-strategy - ESPECÍFICO)
   └─ Brand identity para loja de biocosméticos

4. UX/DESIGN (bio-ux-design - ESPECÍFICO)
   └─ User experience e design visual

5. EXECUÇÃO (bio-marketing-squad - ESPECÍFICO)
   └─ Campanhas, landing pages, copy
```

---

## 🚨 PROBLEMA: marketing-opes Atual

**Situação:**
- marketing-opes foi integrado como genérico
- Mas contém elementos específicos de Mente San (conselheiros, workflows personalizados)

**Opções:**

### Opção A: Usar marketing-opes como GENÉRICO (Recomendado)
```
Ação:
├─ Remover elementos de Mente San
├─ Criar versão "template" genérica
├─ Quando novo cliente chegar, fazer clone e customizar
└─ Mais escalável, menos confusão

Complexidade: MÉDIA
Tempo: 1-2 horas
```

### Opção B: Criar marketing-opes genérico NOVO
```
Ação:
├─ Manter marketing-opes atual como template
├─ Criar novo marketing-opes genérico limpo
├─ Client-specific fica em clientes/
└─ Duplicação mas clareza total

Complexidade: ALTA
Tempo: 2-3 horas
```

**RECOMENDAÇÃO:** Opção A (mais eficiente)

---

## 📊 Estimativa de Trabalho

| Fase | Tarefa | Tempo | Status |
|------|--------|-------|--------|
| 1 | Documentação & Planejamento | 30 min | 🟢 EM ANDAMENTO |
| 2 | Reorganização de arquivos | 2-3h | 🔴 PENDENTE |
| 3 | Atualizar documentação | 1-2h | 🔴 PENDENTE |
| 4 | Validação & Commit | 1h | 🔴 PENDENTE |
| **TOTAL** | | **4.5-6.5h** | |

**Sugestão:** Fazer FASE 2 na próxima janela (2-3h dedicadas)

---

## ✅ Checklist para Próxima Janela

**Antes de começar a reorganização:**
- [ ] Ethel revisar este plano
- [ ] Ethel aprovar estrutura proposta
- [ ] Confirmar se biocosméticos vai ter seus próprios squads
- [ ] Decidir: Opção A ou B para marketing-opes?

**Quando aprovado:**
- [ ] Criar estrutura de diretórios
- [ ] Mover arquivos com cuidado
- [ ] Atualizar imports/referências
- [ ] Gerar validação reports
- [ ] Commit com histórico claro

---

## 🎯 Benefícios da Organização Proposta

✅ **Clareza:** Separação nítida entre consultoria e clientes
✅ **Escalabilidade:** Fácil adicionar novos clientes
✅ **Resultados isolados:** Métricas de cada negócio não se misturam
✅ **Reutilização:** Squads genéricos servem múltiplos clientes
✅ **Manutenção:** Mais fácil atualizar squads específicos
✅ **Documentação:** Cada cliente tem seu próprio contexto

---

## ⚠️ Riscos se NÃO fizer reorganização

❌ Confusão entre trabalhos de Mente San vs. consultoria
❌ Métricas misturadas (qual resultado é de qual negócio?)
❌ Impossível escalar para novos clientes
❌ Repositório fica desorganizado
❌ Difícil auditar trabalho por cliente
❌ Risco de apresentar dados errados a clientes

---

## 📝 Próximos Passos

### Ação Imediata (Esta janela)
1. ✅ Ethel revisa este documento
2. ✅ Ethel aprova estrutura
3. ✅ Definir prioridades

### Próxima Janela
1. Executar FASE 2 (Reorganização - 2-3h)
2. Executar FASE 3 (Documentação - 1-2h)
3. Executar FASE 4 (Validação - 1h)

**Total na próxima janela: ~5-6 horas de trabalho focado**

---

## 📎 Apêndice: Estrutura de Diretórios em Detalhes

```
.
├── squads/
│   │
│   ├── market-research-elite/          [CONSULTORIA - Genérico]
│   ├── marketing-opes/                 [CONSULTORIA - Genérico, reorganizar]
│   │
│   └── clientes/                       [NOVO - Clientes específicos]
│       │
│       ├── README.md                   [Guia de clientes]
│       │
│       └── mente-sa/                  [Cliente 1]
│           ├── README.md
│           ├── config.yaml
│           ├── docs/
│           │   ├── client-overview.md
│           │   └── kpis.md
│           │
│           ├── mente-sa-esoterismo/   [Negócio 1]
│           │   ├── README.md
│           │   ├── squad.yaml
│           │   ├── eso-marketing-squad/    [MOVER daqui: squads/eso-marketing-squad]
│           │   ├── eso-brand-strategy/    [NOVO]
│           │   ├── eso-ux-design/         [NOVO]
│           │   ├── docs/
│           │   ├── data/
│           │   └── VALIDATION_REPORT.md
│           │
│           └── mente-sa-biocosmeticos/  [Negócio 2]
│               ├── README.md
│               ├── squad.yaml
│               ├── bio-marketing-squad/   [NOVO]
│               ├── bio-brand-strategy/    [NOVO]
│               ├── bio-ux-design/         [NOVO]
│               ├── docs/
│               ├── data/
│               └── VALIDATION_REPORT.md
│
├── docs/
│   ├── squad-integration-guide.md          [GENÉRICO - Para consultoria]
│   ├── three-squad-ecosystem.md            [GENÉRICO - Para consultoria]
│   │
│   └── clients/                            [NOVO]
│       └── mente-sa/
│           ├── README.md
│           ├── mente-sa-esoterismo/
│           │   └── README.md
│           └── mente-sa-biocosmeticos/
│               └── README.md
│
└── .
```

---

**Documento Versão:** 1.0
**Status:** ⏳ PENDENTE APROVAÇÃO E EXECUÇÃO
**Criado em:** 22 de Fevereiro, 2026
**Responsável:** Craft (Squad Creator) 🏗️

**Próximo passo:** Ethel revisar e aprovar. Quando aprovado, execução em próxima janela de contexto.

