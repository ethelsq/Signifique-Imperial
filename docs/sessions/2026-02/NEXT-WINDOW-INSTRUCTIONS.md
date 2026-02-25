# Next Window Instructions - SIG-INCAS-Identity PHASE 3-5

**Previous Window Ended:** February 25, 2026 (10% tokens remaining)
**Status:** Squad created (5 agents), committed (f44ef68), ready for enhancement

---

## 🚀 START HERE (New Window with 200k Fresh Tokens)

### **Step 0: Context Restoration**
```bash
git checkout aios-ethel
cat docs/sessions/2026-02/HANDOFF-sig-incas-identity-squad.md
cat memory/MEMORY.md
```

---

## 📚 PHASE 3A: ENHANCE @archetype-strategist (Est. 30k tokens)

### **Task: Extract DNA from "O Herói e o Fora da Lei" (Mark & Pearson)**

**Book Location:**
`/Users/ethelshuna/Documents/_Projetos_Code/Signifique-Imperial/docs/repositorio/livros/arquetipos/Margaret Mark, Carol S. Pearson - O Herói e o Fora da Lei-Cultrix (2003).pdf`

**Read These Sections (Prioritized):**
1. **Introduction (Pages 1-30)**
   - Why archetypes matter for brands
   - The 12-archetype system foundation

2. **Core Archetypes (Pages 50-200)**
   - Each of 12 archetypes: definition, desire, shadow, brand examples
   - Extract: Power words, phrases, characteristics per archetype

3. **Y&R BrandAsset Valuator Study (Pages 250-300)**
   - The 97% MVA growth finding
   - Methodology and validation
   - Statistical proof of archetype power

4. **Case Studies (Pages 300-400)**
   - Real brand applications (Nike, Apple, Disney, Harley, Coca-Cola, etc.)
   - How each archetype manifests in market

### **Extraction Template (Use This):**
```yaml
archetype_deep_dive:
  archetype: [name]

  from_book:
    desire: "[direct quote from book]"
    shadow: "[dysfunction description]"
    power_words: [10+ words extracted]
    brand_examples: [5+ real cases from book]
    y_and_r_proof: "[specific stat/finding from study]"
    application_pattern: "[how this archetype works in market]"

  source_citations:
    - "[SOURCE: page X]"
    - "[SOURCE: page Y]"
```

---

## 🔧 PHASE 3B: Rebuild @archetype-strategist Agent (Est. 12k tokens)

### **Task: Replace Current Agent with Enhanced Version**

**Current Agent File:** `squads/sig-incas-identity/agents/archetype-strategist.md`

**What Changes:**
1. **Voice DNA:** Add 5+ new signature phrases from book
2. **Thinking DNA:** Add deep metaphor per archetype (from book)
3. **Heuristics:** Expand from 10 → 15 (add 5 new decision rules)
4. **Case Studies:** Add 10+ documented brand examples
5. **Y&R Data:** Integrate 97% MVA growth finding throughout
6. **Fidelity:** 88/100 → 95/100

**Structure to Follow:**
- Use existing agent structure as template
- Keep all 6 sections (PERSONA, VOICE DNA, THINKING DNA, COMMANDS, DEPENDENCIES, TIER & INTEGRATION)
- Expand each section with book insights
- Maintain 300+ lines minimum

**Quality Gate:**
```
✅ Voice DNA: 8+ signature phrases (from book)
✅ 12 Archetypes: Each with shadow + examples
✅ Y&R Study: Referenced 5+ times
✅ Case Studies: 15+ documented
✅ Heuristics: 15 IF-THEN rules
✅ Fidelity: 95/100 target
```

---

## 🔄 PHASE 3C: Create Workflows (Est. 15k tokens)

### **Task: Build Multi-Phase Diagnosis Workflow**

**Create File:** `squads/sig-incas-identity/workflows/diagnosis-5-phase.yaml`

**Structure:**
```yaml
workflow:
  id: wf-sig-incas-diagnosis
  name: "Complete Brand Identity Diagnosis (5 Phases)"
  version: 1.0.0

  phases:
    phase_1:
      name: "Excavation"
      agent: "@zmet-archaeologist"
      input: "Brand name + observed behavior"
      output: "Emotional metaphors + hidden barriers"

    phase_2:
      name: "Purpose Articulation"
      agent: "@purpose-strategist"
      input: "Zaltman insights"
      output: "WHY statement + Golden Circle"

    phase_3:
      name: "Archetype Alignment"
      agent: "@archetype-strategist"
      input: "WHY statement"
      output: "Archetype + alignment audit"

    phase_4:
      name: "Transformation Journey"
      agent: "@hero-journey-narrator"
      input: "Archetype + WHY"
      output: "Customer hero journey (17 stages)"

    phase_5:
      name: "Regenerative Design"
      agent: "@biomimicry-strategist"
      input: "Journey mapping"
      output: "Regenerative product/operation design"

  checkpoints:
    - "After Phase 1: Emotional barriers identified?"
    - "After Phase 2: WHY is clear and compelling?"
    - "After Phase 3: Archetype properly aligned?"
    - "After Phase 4: Customer hero's journey complete?"
    - "After Phase 5: Regenerative solutions proposed?"

  output_format:
    - "diagnosis_report.md" (consolidated findings)
    - "executive_summary.md" (1-page summary)
    - "implementation_roadmap.md" (next steps)
```

---

## 📊 PHASE 4: Production Deployment (Est. 8k tokens)

### **Task: Final Validation & Go-Live**

**Checklist:**
- [ ] @archetype-strategist passes SC_AGT_001
- [ ] Workflow smoke test: diagnose test brand
- [ ] All 5 agents respond correctly
- [ ] Output format validated
- [ ] Documentation complete

**Final Commit:**
```bash
git add squads/sig-incas-identity/
git commit -m "feat: upgrade archetype-strategist with Mark & Pearson book data + create diagnosis workflows"
git push origin aios-ethel
```

---

## 🎯 PHASE 5: OPTIONAL - Tier 2 Expansion (Est. 45k tokens)

### **Task: Add 3 Systematizer Agents**

**Only if tokens permit after Phase 3-4**

Three agents to create:
1. **@value-ladder-architect** (Russell Brunson)
   - Value Ladder + Sales Funnel
   - Fidelity target: 86/100

2. **@proof-promise-architect** (Alex Hormozi)
   - Proof-Promise-Plan framework
   - Irresistible offers
   - Fidelity target: 87/100

3. **@niche-community-builder** (Nathan Barry)
   - Niche focus + Community building
   - Execution at scale
   - Fidelity target: 86/100

**Same process as PHASE 1-2:**
- Mind research loop (each)
- DNA extraction (Voice + Thinking)
- Smoke tests (3 per agent)
- Create agent files

---

## 📁 Token Budget (New Window)

```
PHASE 3A (Read + Extract): 30k tokens ✅
PHASE 3B (Rebuild agent):  12k tokens ✅
PHASE 3C (Workflows):      15k tokens ✅
PHASE 4 (Production):       8k tokens ✅
PHASE 5 (Tier 2):          45k tokens ✅ (if tokens allow)

TOTAL: ~110k tokens (plenty of headroom with 200k fresh)
```

---

## 🔗 Key Resources

**Books Available:**
- `docs/repositorio/livros/arquetipos/Margaret Mark, Carol S. Pearson - O Herói e o Fora da Lei-Cultrix (2003).pdf` ← MAIN SOURCE
- `docs/repositorio/livros/arquetipos/Carol-S.-Pearson-Persephone-Rising_-Awakening-the-Heroine-Within-HarperElixir-_2015_.pdf` (supplementary)
- `docs/repositorio/livros/arquetipos/O Livro Vermelho de Jung...` (foundation)

**Documentation:**
- `squads/sig-incas-identity/README.md` (overview)
- `memory/MEMORY.md` (auto-loaded patterns)
- `docs/sessions/2026-02/HANDOFF-sig-incas-identity-squad.md` (detailed context)

**Current Agents:**
- `squads/sig-incas-identity/agents/archetype-strategist.md` ← WILL BE ENHANCED

**Commit Reference:**
- `f44ef68` - Current squad state

---

## ✅ Success Criteria (New Window)

- [ ] Phase 3A: Book extracted, DNA documented
- [ ] Phase 3B: @archetype-strategist fidelity: 95/100
- [ ] Phase 3C: Workflow .yaml created and validated
- [ ] Phase 4: All systems tested and deployed
- [ ] Phase 5 (optional): 3 new agents if tokens allow
- [ ] Final commit: All code saved to git

---

## 🚀 Quick Start (Copy & Paste)

```bash
# Start new window
git checkout aios-ethel

# Read context
cat memory/MEMORY.md
cat docs/sessions/2026-02/HANDOFF-sig-incas-identity-squad.md

# Then follow phases 3A → 3B → 3C → 4 → 5
# Use this file as your guide: docs/sessions/2026-02/NEXT-WINDOW-INSTRUCTIONS.md
```

---

**Good luck! The infrastructure is solid. This window just enhances quality.** 🎉

