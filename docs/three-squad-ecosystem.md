# 🏛️ Three-Squad Ecosystem Guide

**Strategic Direction × Research Insights × Marketing Execution**

**Version:** 1.0
**Date:** February 22, 2026
**Purpose:** Document how all 3 squads work together

---

## Overview

The Signifique Imperial ecosystem consists of 3 specialized squads:

```
┌─────────────────────────────────────────────────────────────┐
│                  THE TRINITY SYSTEM                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ① STRATEGY          ② RESEARCH         ③ EXECUTION         │
│     Board            Intelligence       Operations           │
│                                                               │
│  marketing-opes  →  market-research →  eso-marketing       │
│                      -elite             -squad              │
│                                                               │
│  "Should we?"     "What works?"        "How to do it?"      │
│                                                               │
│  4 Conselheiros    8 Frameworks        14 Specialists       │
│  Strategic board   Deep research       Tactical execution   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## The Three Squads

### 1️⃣ marketing-opes: Strategic Board

**What it is:** Executive decision-making board with 4 complementary perspectives

**Who's in the room:**
- 🧠 Naval Ravikant - "Will this scale without me?" (Riqueza & Leverage)
- 💰 Alex Hormozi - "What's the math?" (Receita & Escala)
- 🎯 Peter Thiel - "Are we competing or creating?" (Monopólio & Contrarian)
- ⚡ Elon Musk - "What's the critical path?" (Execução & First Principles)

**What it produces:**
- Strategic decisions (GO / NO-GO / CONDITIONAL)
- Direction for research and execution
- Monthly/quarterly reviews and pivots

**When to use:**
- "Should we enter this market?"
- "How should we price this?"
- "Should we pivot our strategy?"
- "Is this partnership worth it?"

**Key Tasks:**
- `*consult-board` - Ask the board any strategic question
- `*evaluate-deal` - Analyze partnerships/opportunities
- `*strategic-review` - Monthly/quarterly alignment

---

### 2️⃣ market-research-elite: Deep Intelligence

**What it is:** 8-phase research pipeline with elite minds

**Who's in the lab:**
- 📊 David Aaker - Brand strategy (What's our positioning?)
- 👥 Indy Young - User behavior (How do people think?)
- 📈 Michael Porter - Market structure (Is market viable?)
- 🎯 Clayton Christensen - Customer demand (What do they need?)
- 🧩 Gerald Zaltman - Emotions (What drives them?)
- ✅ Rita McGrath - Assumption testing (What can we prove?)
- 🔗 Nir Eyal - Engagement design (How to form habits?)
- 🚀 B.J. Fogg - Behavior change (How to reduce friction?)

**What it produces:**
- Market analysis and customer insights
- Validated assumptions
- Behavior change strategy
- Strategic recommendations

**When to use:**
- Before launching into a new market
- To understand customer motivations deeply
- To validate assumptions before spending
- To design for habit formation and retention

**Key Output:**
- `research_handoff.yaml` - Structured data for marketing

---

### 3️⃣ eso-marketing-squad: Tactical Execution

**What it is:** Marketing operations with specialists for platforms and roles

**Who's in action:**
- 🎬 @marketing-cmo - Chief Marketing Officer (Overall strategy)
- 🎨 @marketing-brand - Brand positioning and messaging
- 📲 @marketing-distribution - Growth and customer acquisition
- 🖼️ @marketing-designer - Visual design
- 📸 @carousel-designer - Instagram carousel specialist
- 💡 @marketing-ideation - Content ideas
- 📱 @marketing-ideation-ig - Instagram content
- 💼 @marketing-ideation-li - LinkedIn content
- 📺 @marketing-ideation-yt - YouTube content
- Plus 5 more specialists

**What it produces:**
- Marketing campaigns
- Landing pages
- Copy and content
- Visual assets
- Conversion optimization

**When to use:**
- To launch campaigns
- To create landing pages
- To generate content
- To design for conversions
- To optimize performance

**Key Tasks:**
- `*pesquisa-mercado` - Validate market assumptions
- `*posicionar-marca` - Define brand positioning
- `*planejar-funil` - Design customer funnel
- `*estrategia-trafego` - Run paid traffic campaigns
- `*criar-copy` - Write persuasive copy
- `*analisar-campanha` - Optimize performance

---

## The Workflow: From Strategy to Results

### Scenario 1: New Product Launch

```
MONTH 1: STRATEGIC DECISION
│
├─ marketing-opes Board Session
│  Question: "Should we launch product X in market Y?"
│  ├─ Naval: "Can this scale without me?"
│  ├─ Hormozi: "What's the unit economics?"
│  ├─ Thiel: "Is there an unfair advantage?"
│  └─ Elon: "What's the execution plan?"
│  Decision: YES → Proceed to research
│
MONTHS 2-4: DEEP RESEARCH
│
├─ market-research-elite executes all 8 phases
│  Phase 0: Aaker - Define brand positioning
│  Phase 1: Young - Understand user behavior
│  Phase 2: Porter - Analyze market structure
│  Phase 3: Christensen - Understand jobs
│  Phase 4: Zaltman - Discover emotional drivers
│  Phase 5: McGrath - Test critical assumptions
│  Phase 6: Eyal - Design habit loops
│  Phase 7: Fogg - Reduce friction to purchase
│  Output: research_handoff.yaml with all insights
│
MONTHS 5-6: CAMPAIGN LAUNCH
│
└─ eso-marketing-squad executes
   ├─ @mente-sa-eso01: *posicionar-marca
   ├─ @eso-designer01: *paleta-esoterica
   ├─ @mente-sa-eso01: *planejar-funil
   ├─ @mente-sa-eso01: *estrategia-trafego
   ├─ @mente-sa-eso01: *criar-copy
   ├─ @eso-designer01: *design-lp
   └─ @mente-sa-eso01: *analisar-campanha
   Output: Campaigns running, conversions tracking

ONGOING: STRATEGIC REVIEWS
│
└─ marketing-opes monthly board review
   "Are we hitting targets? Should we adjust strategy?"
   └─ Feeds learnings back to research and execution
```

---

## Data Flow Between Squads

### Research → Marketing (research_handoff.yaml)

```yaml
research_handoff:
  project: "Product Name"

  # From Aaker (Phase 0)
  brand_vision:
    vision_elements: [...]
    brand_essence: "..."
    positioning: "..."

  # From Young (Phase 1)
  user_research:
    segments:
      - name: "Segment A"
        mental_model: "How they think"
        messaging: "What resonates"

  # From Christensen (Phase 3)
  customer_demand:
    functional_job: "..."
    emotional_job: "..."
    competing_alternatives: [...]

  # From Zaltman (Phase 4)
  emotional_insights:
    metaphors: [...]
    messaging_angles: [...]

  # From Eyal (Phase 6)
  engagement:
    hook_model: {...}
    retention_targets: {...}

  # From Fogg (Phase 7)
  behavior_change:
    friction_reduction: [...]
    execution_design: {...}
```

**Format:** YAML file passed from research → marketing team

---

### Marketing → Board (Monthly Report)

```
PERFORMANCE REPORT
├─ Current Status
│  ├─ CAC (Cost Per Acquisition): $X
│  ├─ LTV (Lifetime Value): $Y
│  ├─ Day 1 Retention: X%
│  └─ Day 7 Retention: Y%
│
├─ What's Working
│  └─ [Segment] responds best to [message/channel]
│
├─ What's Not Working
│  └─ [Segment] not converting on [offer/design]
│
├─ Strategic Implications
│  └─ Research predicted X, reality shows Y
│
└─ Recommended Decisions
   ├─ Scale this channel (proven)
   ├─ Pause this channel (not viable)
   └─ Test this new angle (emerging opportunity)
```

**Frequency:** Monthly to marketing-opes board

---

## Decision Gates Between Squads

### Gate 1: Research → Marketing Decision

**Question:** "Can we execute this strategy profitably?"

**From Research Team:**
- ✅ Research complete (all 8 phases passed gates)
- ✅ 80%+ of assumptions validated
- ✅ Behavior change strategy clear
- ✅ Customer segments defined

**Board Decision:**
- GO → Execute immediately
- CONDITIONAL → Execute with these constraints
- NO-GO → Pivot strategy, go back to research

---

### Gate 2: Monthly Strategic Review

**Question:** "Are we on track with the strategy?"

**Marketing Reports:**
- Campaign performance vs. research predictions
- Segment performance vs. mental models
- Emotional messaging effectiveness
- Conversion rate vs. behavior change targets

**Board Decides:**
- Continue (validated strategy)
- Adjust (tweak based on learnings)
- Pivot (significant market learning requires new strategy)

---

## Integration Points

### Daily
- eso-marketing-squad executes campaigns
- Tracks metrics in real-time

### Weekly
- eso-marketing-squad reports basic metrics
- marketing-opes reviews if needed
- Shares learnings with research team

### Monthly
- eso-marketing-squad comprehensive performance report
- marketing-opes board strategic review
- Decision: Continue / Adjust / Pivot

### Quarterly
- market-research-elite follow-up research if needed
- Deep analysis of market changes
- Research findings feed back to strategy

---

## Use Cases by Combination

### Use Case 1: Market Entry (Full Pipeline)

```
Question: "Should we enter the esoteric market?"
│
├─ marketing-opes: Board decision session
│  └─ Decision: YES, with constraints
│
├─ market-research-elite: 12-week deep research
│  └─ Deliverable: research_handoff.yaml
│
└─ eso-marketing-squad: Campaign execution
   └─ Ongoing optimization + monthly board reviews
```

**Timeline:** 5-6 months to launch

---

### Use Case 2: Continuous Optimization (Operational)

```
eso-marketing-squad: Daily/Weekly operations
├─ Run campaigns
├─ Optimize copy/design
└─ Track metrics
   │
   └─→ marketing-opes: Monthly strategic review
       ├─ "Are we hitting targets?"
       ├─ "Should we adjust strategy?"
       └─ Feeds learnings back

*market-research-elite used on-demand*
└─ When we need deeper customer understanding
```

**Timeline:** Ongoing

---

### Use Case 3: Quick Decision (Board Only)

```
Question: "Should we do this partnership?"
│
└─ marketing-opes: Board evaluation session
   ├─ *evaluate-deal
   ├─ Naval/Hormozi/Thiel/Elon weigh in
   └─ Quick decision (24 hours)

*No research needed, decision made strategically*
```

**Timeline:** 1 day

---

## Success Metrics by Squad

### marketing-opes Success
- Decisions made faster (vs. solo decision-making)
- Strategic direction validated by 4 perspectives
- Monthly reviews prevent costly pivots

### market-research-elite Success
- Research findings validated by campaign performance
- Assumptions prove accurate (80%+ validation rate)
- Behavior change strategy reduces friction as predicted

### eso-marketing-squad Success
- CAC within budget
- Retention targets met (day 1/7/30)
- Segment performance matches mental models

### System Success
- Research insights → Campaign execution → Board validation → Loop

---

## FAQ

**Q: Can I use just eso-marketing-squad without research?**
A: Yes, but you'll likely waste money. Research prevents expensive mistakes.

**Q: How long does a full cycle take?**
A: Board decision (1 day) + Research (12 weeks) + Execution (ongoing) = 13-14 weeks to market.

**Q: What if campaign results contradict research?**
A: That's valuable learning! Review with board, potentially do follow-up research.

**Q: Can squads overlap?**
A: Yes. You can have market-research running while eso-marketing optimizes previous campaigns.

**Q: How often should we do board reviews?**
A: Monthly for active campaigns. Quarterly for strategic direction. Quarterly → Annual for market-level decisions.

**Q: What if board disagrees?**
A: The orchestrator (Elon) casts tiebreaker. But usually 4 perspectives find consensus.

---

## Quick Reference: When to Use Which Squad

| Situation | Squad(s) | Task |
|-----------|----------|------|
| "Should we enter this market?" | Board | `*consult-board` |
| "How should we position our brand?" | Research → Marketing | Phase 0 + `*posicionar-marca` |
| "Why aren't customers converting?" | Research → Board | Phase 4/7 → `*strategic-review` |
| "Create a landing page" | Marketing | `*design-lp` |
| "Evaluate a partnership" | Board | `*evaluate-deal` |
| "Understand customer behavior" | Research | Phase 1 |
| "Launch a campaign" | Marketing | `*estrategia-trafego` |
| "Are we on track?" | Board | `*strategic-review` |
| "Optimize conversions" | Marketing | `*analisar-campanha` |
| "Market is changing" | Research → Board | Follow-up research |

---

## Conclusion

The **three-squad ecosystem** creates a complete system:

- **marketing-opes** = Strategic direction (should we?)
- **market-research-elite** = Deep intelligence (what works?)
- **eso-marketing-squad** = Tactical execution (how to do it?)

Together they eliminate guesswork, reduce risk, and accelerate learning cycles.

**The result:** Better decisions, faster execution, higher ROI.

---

**Version:** 1.0
**Created:** February 22, 2026
**Maintainer:** Craft (Squad Creator) 🏗️

