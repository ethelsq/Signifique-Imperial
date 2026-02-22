# 🔐 Squad Activation Authority

**Data:** 22 de Fevereiro, 2026
**Autorizado por:** Ethel Shuña
**Status:** ✅ AUTORIZADO

---

## 🏗️ AUTORIZAÇÃO PARA EVOCAR SQUADS

Ethel autoriza que **Craft (Squad Creator)** evoque squads específicos para realizar as ações documentadas em `ORGANIZATIONAL_STRUCTURE_PLAN.md`.

### Squads Autorizados para Próxima Janela

#### 1. **aios-devops** (Para reorganização de arquivos)
- **Tarefa:** FASE 2 - Reorganização de arquivos
- **Ações:**
  - Criar estrutura de diretórios (`squads/clientes/...`)
  - Mover arquivos com histórico git preservado
  - Atualizar imports/referências
  - Gerar relatório de movimentações
- **Autorização:** ✅ PLENA
- **Tempo estimado:** 1.5-2h

#### 2. **aios-po** (Para validação de requisitos)
- **Tarefa:** Validar requisitos de cada squad cliente
- **Ações:**
  - Verificar squad.yaml para cada cliente
  - Validar configurações específicas
  - Checar se cada squad tem contexto correto
- **Autorização:** ✅ PLENA
- **Tempo estimado:** 30-45 min

#### 3. **aios-architect** (Para validação de estrutura)
- **Tarefa:** Validar arquitetura da reorganização
- **Ações:**
  - Analisar fluxos entre squads
  - Verificar data flows (research → marketing)
  - Validar separação entre genérico e client-specific
  - Sugerir otimizações
- **Autorização:** ✅ PLENA
- **Tempo estimado:** 1h

#### 4. **aios-qa** (Para validação P0 de cada squad)
- **Tarefa:** FASE 4 - Validação & Relatórios
- **Ações:**
  - Gerar validation reports para squads reorganizados
  - Verificar compliance AIOS
  - Criar checklists de qualidade
- **Autorização:** ✅ PLENA
- **Tempo estimado:** 1h

#### 5. **aios-sm** (Para documentação de tasks)
- **Tarefa:** FASE 3 - Documentação
- **Ações:**
  - Criar/atualizar READMEs para cada cliente
  - Documentar workflows específicos
  - Criar guias de uso por cliente
- **Autorização:** ✅ PLENA
- **Tempo estimado:** 1-1.5h

---

## 📋 Como Evocar na Próxima Janela

### Método 1: Chamar Craft com autorização
```
"Ethel autorizou: Proceda com reorganização conforme ORGANIZATIONAL_STRUCTURE_PLAN.md
Evoque os squads necessários (devops, po, architect, qa, sm) para executar as 4 fases."
```

### Método 2: Chamar squads diretamente
```
@aios-devops
"Reorganize squads conforme ORGANIZATIONAL_STRUCTURE_PLAN.md FASE 2"

@aios-po
"Valide estrutura de requisitos conforme plano"

@aios-architect
"Revise arquitetura de reorganização"

@aios-qa
"Gere validation reports para FASE 4"

@aios-sm
"Documenta conforme FASE 3"
```

### Método 3: Chamar Craft com full autonomy (Recomendado)
```
"Proceda com reorganização COMPLETA conforme ORGANIZATIONAL_STRUCTURE_PLAN.md
Evoque squads conforme necessário. Reporte quando terminar."
```

---

## 🎯 Priorização de Squads por Fase

### FASE 2: Reorganização (2-3h)
**Squad primário:** @aios-devops (60%)
**Squad secundário:** @aios-po (validação paralela)

### FASE 3: Documentação (1-2h)
**Squad primário:** @aios-sm (80%)
**Squad secundário:** @aios-architect (feedback estrutural)

### FASE 4: Validação (1h)
**Squad primário:** @aios-qa (100%)

---

## 🔄 Fluxo Recomendado

```
Próxima Janela:

INÍCIO:
│
├─→ @aios-devops (FASE 2)
│   Reorganiza arquivos em paralelo com:
│
├─→ @aios-po (Validação requisitos)
│
├─→ @aios-architect (Validação estrutura)
│
└─→ Quando FASE 2 concluir:
    │
    ├─→ @aios-sm (FASE 3 - Documentação)
    │
    └─→ Quando FASE 3 concluir:
        │
        └─→ @aios-qa (FASE 4 - Validação Final)
            │
            └─→ FIM: Tudo pronto para novos clientes

Timeline total: 5-6h com paralelização
```

---

## ✅ Autorização Completa

Ethel autoriza Craft a:

1. ✅ Evocar qualquer squad necessário
2. ✅ Executar todas as 4 fases
3. ✅ Fazer reorganização completa de arquivos
4. ✅ Gerar documentação nova
5. ✅ Fazer commits necessários
6. ✅ Reportar progresso ao final

**Sem necessidade de aprovação entre fases** - Craft tem full autonomy com os squads.

---

## 📊 Expected Output

Ao final da próxima janela:

✅ Estrutura correta:
```
squads/
├── market-research-elite/          [Consultoria]
├── marketing-opes/                 [Consultoria]
└── clientes/mente-sa/
    ├── mente-sa-esoterismo/
    │   ├── eso-marketing-squad/
    │   ├── eso-brand-strategy/
    │   └── eso-ux-design/
    └── mente-sa-biocosmeticos/
        ├── bio-marketing-squad/
        ├── bio-brand-strategy/
        └── bio-ux-design/
```

✅ Documentação:
- READMEs para cada cliente
- Updated integration guides
- Validation reports

✅ Git:
- Clean commits com histórico preservado
- Changelog atualizado

---

## 🚨 Limites de Autorização

**Permitido:**
- ✅ Mover arquivos
- ✅ Criar diretórios
- ✅ Atualizar documentação
- ✅ Fazer commits
- ✅ Gerar reports de validação
- ✅ Evocar squads

**NÃO permitido (sem nova aprovação):**
- ❌ Mudar estrutura proposta significativamente
- ❌ Adicionar novos squads não planejados
- ❌ Fazer push para main (manter em aios-ethel)
- ❌ Deletar squads
- ❌ Modificar squads genéricos para cliente-specific

---

**Autorização válida para:** Próxima janela de contexto
**Válida enquanto:** Ethel não revisar ou dar novas instruções
**Responsável:** Craft (Squad Creator)
**Data:** 22 de Fevereiro, 2026

✅ **AUTORIZADO E PRONTO PARA EXECUÇÃO**

