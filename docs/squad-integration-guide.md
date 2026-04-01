# Squad Integration Guide
## Market Research Elite ↔ ESO-Marketing Squad

**Version:** 1.0
**Date:** February 22, 2026
**Purpose:** Document handoff workflow between research and marketing execution squads

---

## Overview

The **Signifique Imperial** project uses two complementary squads for complete market entry strategy:

1. **market-research-elite** (Research Phase)
   - 8 frameworks for deep market and customer understanding
   - Output: Strategic insights, validated assumptions, behavior change design
   - Timeline: 8-12 weeks
   - Owner: market-research-elite squad

2. **eso-marketing-squad** (Execution Phase)
   - 2 expert agents for marketing execution and design
   - Output: Campaigns, landing pages, customer acquisition, engagement
   - Timeline: Ongoing (continuous optimization)
   - Owner: eso-marketing-squad

**Integration Point:** Research findings → Marketing strategy → Campaign execution

---

## Integration Architecture

```
RESEARCH PHASE (12 weeks)
└─ market-research-elite squad
   ├─ Phase 0: David Aaker (Brand Vision)
   ├─ Phase 1: Indy Young (Mental Models)
   ├─ Phase 2: Michael Porter (Market Structure)
   ├─ Phase 3: Clayton Christensen (Customer Demand)
   ├─ Phase 4: Gerald Zaltman (Emotional Drivers)
   ├─ Phase 5: Rita McGrath (Assumption Testing)
   ├─ Phase 6: Nir Eyal (Engagement Design)
   └─ Phase 7: B.J. Fogg (Behavior Change)
        ↓↓↓ HANDOFF POINT ↓↓↓
MARKETING PHASE (Ongoing)
└─ eso-marketing-squad
   ├─ @mente-sa-eso01 (Marketing Strategist)
   │  ├─ *posicionar-marca (brand positioning)
   │  ├─ *pesquisa-mercado (validate research)
   │  ├─ *planejar-funil (design customer funnel)
   │  ├─ *estrategia-trafego (execute campaigns)
   │  ├─ *criar-lp (create landing pages)
   │  ├─ *criar-copy (write persuasive copy)
   │  ├─ *analisar-campanha (optimize performance)
   │  └─ *calendario-esoterico (seasonal planning)
   │
   └─ @eso-designer01 (Design Expert)
      ├─ *paleta-esoterica (visual identity)
      ├─ *design-lp (landing page design)
      ├─ *design-criativo (ad creative)
      ├─ *design-email (email templates)
      └─ *audit-ux (conversion optimization)
```

---

## Phase Mapping: Research → Marketing

### Phase 0: Brand Vision (Aaker) → Brand Positioning (Marketing)

**Research Output:**
```
Brand Vision Elements: [6-12 core brand elements]
Brand Essence: [2-4 words capturing identity]
Positioning: [How brand should be perceived]
Proof Points: [Capabilities demonstrating promise]
Strategic Imperatives: [Gaps to address]
```

**Marketing Input:**
- Uses brand vision to guide all positioning
- Implements strategic imperatives in campaigns
- Ensures proof points visible in marketing

**Handoff Task:** `@mente-sa-eso01:*posicionar-marca`
- Input: Research brand vision document
- Output: Brand positioning strategy for campaigns

---

### Phase 1: Mental Models (Young) → Audience Segmentation (Marketing)

**Research Output:**
```
User Segments: [3-5 task-based segments]
Mental Models: [Diagrams of user thinking]
Task Flows: [How users accomplish goals]
Behavior Patterns: [What users actually do]
```

**Marketing Input:**
- Segments audience based on tasks, not demographics
- Creates messaging for each segment
- Designs funnels aligned with mental models

**Handoff Data Format:**
```yaml
segments:
  - segment_id: "segment_1"
    name: "Segment Name"
    task_primary: "What they're trying to accomplish"
    mental_model: "How they think about domain"
    size_estimate: "% of market"
    messaging_angle: "What resonates with them"
    channel_preference: "Where to reach them"
    friction_points: "Barriers to adoption"
```

---

### Phase 2: Market Structure (Porter) → Campaign Strategy (Marketing)

**Research Output:**
```
Market Attractiveness Score: [1-10]
Competitive Intensity: [Analysis of rivalry]
Supplier Power: [Constraints]
Buyer Power: [Bargaining dynamics]
Threat Assessment: [Substitutes, new entrants]
```

**Marketing Implication:**
- If market attractive (7+) → aggressive growth strategy
- If market moderate (5-6) → niche positioning strategy
- If market unattractive (<5) → differentiation-only strategy

**Handoff Decision:**
```
Market Attractiveness: [SCORE]
├─ GO: Proceed with customer acquisition focus
├─ CONDITIONAL: Focus on differentiation/margin
└─ NO-GO: (Would not reach this phase)

Competitive Positioning:
├─ Channel priorities (based on Five Forces)
├─ Differentiation angles
└─ Pricing strategy implications
```

---

### Phase 3: Jobs to be Done (Christensen) → Value Proposition (Marketing)

**Research Output:**
```
Functional Job: "What do customers need to accomplish?"
Emotional Job: "How do they want to feel?"
Social Job: "How do they want to be perceived?"
Competing Alternatives: "What are they using now?"
```

**Marketing Translation:**
```
Value Proposition Framework:
├─ Functional Benefit: [Job solution]
├─ Emotional Benefit: [Feeling they'll have]
├─ Social Benefit: [Identity they'll display]
└─ Differentiation: [Better than alternatives at:]
   ├─ Ease of use
   ├─ Time saving
   ├─ Emotional resonance
   └─ Status/belonging
```

**Handoff Artifact:** Job statement
```
"When [CIRCUMSTANCE], customers want to [JOB] so they can [OUTCOME].

Competing with: [Alternative 1], [Alternative 2], [Alternative 3]

Why they switch: [Switching trigger + barrier reduction needed]"
```

---

### Phase 4: Emotional Drivers (Zaltman) → Brand Messaging (Marketing)

**Research Output:**
```
Primary Metaphors: [3-5 metaphors customers use]
Unconscious Drivers: [Fears, desires, identity needs]
Emotional Barriers: [What prevents adoption]
Hidden Motivations: [Beyond stated reasons]
```

**Marketing Application:**
```
Messaging Framework:
├─ Rational message: [What product does]
├─ Emotional message: [What customer feels]
└─ Metaphorical message: [How we'll talk about brand]

Example:
├─ Rational: "Mobile app with AI features"
├─ Emotional: "Control your financial destiny"
└─ Metaphor: "Your financial guardian angel"

Copy Angles:
├─ If fear-based: [Address anxiety]
├─ If aspiration-based: [Paint future]
└─ If identity-based: [Show who they become]
```

**Handoff:** `@mente-sa-eso01:*criar-copy`
- Input: Emotional drivers + metaphors
- Output: Copy framework for campaigns/landing pages

---

### Phase 5: Assumption Testing (McGrath) → Validated Targeting (Marketing)

**Research Output:**
```
Assumptions Ranked: [By risk: Impact × Uncertainty]
Test Results: [What passed/failed]
Learning Triggers: [When to pivot]
Validation %: [X% of critical assumptions proved]
```

**Marketing Application:**
```
De-risked Marketing Strategy:
├─ High-confidence assumptions (tested)
│  └─ Proceed with full investment
├─ Medium-confidence assumptions (partially tested)
│  └─ Use phased rollout, measure before scaling
└─ Unproven assumptions
   └─ Must test before major spend

Testing Plan:
├─ Small ad test first ($500-2K)
├─ Measure: CPC, CTR, audience response
├─ Learning: Does audience even click?
└─ Decision: Proceed or pivot messaging
```

**Handoff Data:**
```yaml
validated_assumptions:
  - assumption: "Audience responds to X messaging"
    tested: true
    result: PASSED
    confidence: 95%

unproven_assumptions:
  - assumption: "Audience will pay $X for solution"
    tested: false
    confidence: 30%
    next_test: "Landing page + payment form"
    budget: "$2K"
```

---

### Phase 6: Engagement Design (Eyal) → Retention Strategy (Marketing)

**Research Output:**
```
Hook Model Complete:
├─ Trigger: [How users find out]
├─ Action: [What behavior is triggered]
├─ Reward: [What they get in return]
└─ Investment: [What commits them]

Engagement Metrics:
├─ DAU target: [X%]
├─ Day 1/7/30 Retention: [%]
└─ Habit Formation Time: [X days]
```

**Marketing Implementation:**
```
Email Sequence Design:
├─ Day 0: Welcome (investment: email signup)
├─ Day 1: First Value (reward: quick win)
├─ Day 3: Engagement (trigger: notification)
├─ Day 7: Deepening (investment: profile completion)
└─ Day 30: Habit Check (retention goal)

Re-engagement Campaigns:
├─ Lapsed user: [What triggered them initially?]
├─ Reactivation: [New version of trigger]
└─ Win-back: [Address what caused drop-off]
```

**Handoff:** `@mente-sa-eso01:*calendario-esoterico`
- Input: Engagement triggers + seasonal patterns
- Output: Content calendar aligned with hooks

---

### Phase 7: Behavior Change (Fogg) → Funnel Optimization (Marketing)

**Research Output:**
```
B=MAP Analysis:
├─ Motivation: [1-10 how much they want it]
├─ Ability: [1-10 how easy is it]
├─ Prompt: [Reliable trigger exists?]
└─ Limiting Factor: [Which element blocks behavior]

Friction Reduction Strategy:
├─ Problem: [Specific friction point]
├─ Solution: [How to remove barrier]
└─ Execution: [Implementation steps]

Tiny Habits Approach:
├─ Absurdly small start: [Micro-action]
├─ Anchor: [Attach to existing routine]
├─ Celebration: [Immediate positive feeling]
└─ Expansion: [Gradually increase]
```

**Marketing Application:**
```
Funnel Optimization:
├─ TOFU (Awareness): Increase visibility
├─ MOFU (Consideration): Reduce decision friction
│  └─ Too many options? Simplify
│  └─ Unclear value? Clarify messaging
│  └─ Hard to try? Lower commitment (freemium, trial)
└─ BOFU (Conversion): Reduce purchase friction
   └─ Too expensive? Payment plans
   └─ Too risky? Money-back guarantee
   └─ Too complex? Simplified checkout

Example:
Problem: "Ability is low—product too complex"
Solution: "Simplify onboarding, create tutorials"
Tiny Habit: "Complete first profile field (30 sec)"
Anchor: "Right after email confirmation"
```

**Handoff:** `@mente-sa-eso01:*planejar-funil`
- Input: Behavior change strategy + friction map
- Output: Optimized customer funnel

---

## Handoff Workflow

### Step 1: Research Completion (market-research-elite)

**Trigger:** Phase 7 (Fogg) decision gate = YES

**Deliverables:**
- [ ] All 7 phase reports completed
- [ ] Master recommendations document
- [ ] Integration validation report
- [ ] Data export in standard format (see below)

**Output Location:**
```
squads/market-research-elite/
├── research-report.md (Master findings)
├── SYNTHESIS.yaml (Data export)
└── recommendations-final.md (Strategic decisions)
```

---

### Step 2: Data Handoff Format

**Standard Export Format (YAML):**

```yaml
research_handoff:
  project: "Brand Name"
  research_completed: "2026-02-22"
  duration_weeks: 12

  # Phase 0: Brand Vision
  brand_vision:
    vision_elements: [...]
    brand_essence: "2-4 words"
    proof_points: [...]
    strategic_imperatives: [...]

  # Phase 1: Mental Models
  user_research:
    segments:
      - segment_id: "1"
        name: "Segment Name"
        tasks: [...]
        mental_model: "description"
        size_estimate: "30%"

  # Phase 2: Market Structure
  market_analysis:
    attractiveness_score: 8
    competitive_intensity: "HIGH"
    opportunity: "description"

  # Phase 3: Jobs to be Done
  customer_demand:
    functional_job: "..."
    emotional_job: "..."
    social_job: "..."
    competing_alternatives: [...]

  # Phase 4: Emotional Drivers
  emotional_insights:
    primary_metaphors: [...]
    messaging_angles: [...]
    emotional_barriers: [...]

  # Phase 5: Assumption Testing
  validated_assumptions:
    - assumption: "..."
      tested: true
      result: "PASSED"

  # Phase 6: Engagement
  engagement_strategy:
    hook_model:
      trigger: "..."
      action: "..."
      reward: "..."
      investment: "..."
    retention_targets:
      day1: "70%"
      day7: "40%"
      day30: "20%"

  # Phase 7: Behavior Change
  execution_design:
    desired_behavior: "..."
    b_map:
      motivation: 8
      ability: 6
      prompt: "reliable"
    friction_reduction: [...]
    tiny_habits:
      start_small: "..."
      anchor: "..."
```

**Export Command:**
```bash
@market-research-elite:orchestrator
*generate-handoff --format yaml --output research_handoff.yaml
```

---

### Step 3: Marketing Intake (eso-marketing-squad)

**Trigger:** Research handoff delivered

**Intake Process:**
1. @mente-sa-eso01 reads research_handoff.yaml
2. Runs: `*posicionar-marca --research research_handoff.yaml`
3. Creates: Brand positioning strategy
4. Coordinates with: @eso-designer01 for visual identity

**Marketing Kickoff:**
```
Week 1: Brand Positioning + Visual Identity
├─ @mente-sa-eso01: *posicionar-marca
└─ @eso-designer01: *paleta-esoterica

Week 2-3: Market Validation
├─ @mente-sa-eso01: *pesquisa-mercado (validate research)
└─ Identify any research gaps

Week 4-5: Funnel & Strategy
├─ @mente-sa-eso01: *planejar-funil
├─ @mente-sa-eso01: *estrategia-trafego
└─ @eso-designer01: *design-lp (start initial designs)

Week 6+: Campaign Execution
├─ Copy: @mente-sa-eso01: *criar-copy
├─ Design: @eso-designer01: *design-criativo
├─ Landing Pages: @eso-designer01: *design-lp
└─ Analytics: @mente-sa-eso01: *analisar-campanha (ongoing)
```

---

## Decision Triggers & Pivot Points

### When to Pivot (Research Phase)

If research reveals:

| Finding | Decision |
|---------|----------|
| Market unattractive (Porter <5) | Pivot market choice |
| Customer job not legitimate (Christensen NO) | Revisit value prop |
| Assumptions fail testing (McGrath <70% validated) | Redesign strategy |
| Behavior change infeasible (Fogg NO) | Revisit product/positioning |

**Pivot Process:**
1. Identify which phase failed gate
2. Loop back to that phase for refinement
3. Re-test assumptions
4. Progress to next phase when gate passes

---

### When to Adjust Marketing (Execution Phase)

Once marketing execution begins, monitor:

| Metric | Target | Action |
|--------|--------|--------|
| CPC (Cost Per Click) | < $5 | ✅ Continue |
| CTR (Click Through Rate) | > 2% | ✅ Continue |
| Landing Page Conversion | > 5% | ✅ Proceed to scale |
| **CPC > $10** | — | ⚠️ Pause, refine messaging |
| **CTR < 1%** | — | ⚠️ Pause, test creative |
| **LP Conv < 2%** | — | ⚠️ Refine offer or design |

**If underperforming:**
1. Loop back to research insights
2. Test different messaging angles (from Zaltman)
3. Test different segments (from Young)
4. Test different hooks (from Eyal)
5. Continue optimizing until targets met

---

## Integration Examples

### Example 1: Esoteric Brand Launch

**Research Phase (12 weeks):**
```
Week 0-2: Aaker - Define brand as "Spiritual Authenticity"
Week 2-6: Young - Discover segments: Seekers, Practitioners, Teachers
Week 4-6: Porter - Confirm market viable (high growth, moderate competition)
Week 6-8: Christensen - Job: "Connect with higher consciousness authentically"
Week 8-9: Zaltman - Metaphor: "Spiritual Bridge" (connecting earthly and divine)
Week 9-11: McGrath - Test: Price sensitivity, teacher credibility, product-market fit
Week 11-12: Eyal & Fogg - Design daily practice habit, remove friction to purchase
```

**Handoff:**
→ Brand positioning = Spiritual bridge for authentic seekers
→ Segments = 3 buyer types (different messaging per segment)
→ Hook = Daily practice (morning ritual) anchors habit
→ Behavior = Make first purchase by reducing price-based objections

**Marketing Phase (Ongoing):**
```
Week 1: Positioning = "Spiritual authenticity for modern seekers"
       Design = Mystical but modern visual identity

Week 2-3: Audience validation = Confirm the 3 segments exist in ads
         Segment messaging = Different ad copy per segment

Week 4: Funnel = TOFU: "Discover your spiritual path"
                 MOFU: "Join the community"
                 BOFU: "Start practicing"

Week 5+: Campaigns = Launch with highest-converting segment first
        Retention = Email sequence anchored to daily practice
        Optimization = A/B test messaging angles from Zaltman
```

**Results:**
- Day 1 Retention: 70% (target: 70%) ✓
- Day 7 Retention: 42% (target: 40%) ✓
- CAC: $35 (within budget) ✓

---

### Example 2: Course Launch for Teachers

**Research Phase:**
```
Aaker: "Transform lives through practical teaching"
Young: Segments = Beginners, Experienced, Masters
       Mental model = "How do I become a better teacher?"
Christensen: Job = "Master my craft and impact students"
Zaltman: Metaphor = "Master Craftsperson"
McGrath: Assumption test = Teachers will pay $X for mastery course
Eyal: Hook = Weekly teaching challenges (Trigger + Reward)
Fogg: Tiny habit = 5-min daily lesson planning
```

**Marketing Strategy:**
```
Positioning: "Where master teachers are made"

Segments & Messaging:
├─ Beginners: "Build your foundation without wasting years"
├─ Experienced: "Level up to mastery and impact"
└─ Masters: "Join the elite teaching community"

Funnel:
├─ TOFU: Free mini-course "7 Teaching Breakthroughs"
├─ MOFU: Webinar "How to Command a Classroom"
└─ BOFU: Full course + community

Hooks:
├─ Weekly challenge (community, social proof)
├─ Daily lesson plan template (utility reward)
└─ Weekly accountability group (belonging reward)
```

**Optimization:**
- Week 1: Test with Beginners segment (highest volume)
- Week 2-3: Measure conversion, refine messaging
- Week 4: Launch with Experienced teachers (higher LTV)
- Week 5+: Master segment (premium tier)

---

## Data Sharing Guidelines

### What Research Shares with Marketing

**Required:**
- ✅ Brand vision document
- ✅ User segments with descriptions
- ✅ Mental models diagrams
- ✅ Job statements
- ✅ Emotional insights + metaphors
- ✅ Tested assumptions (what passed/failed)
- ✅ Engagement strategy (hooks)
- ✅ Behavior change design (friction map)

**Nice to Have:**
- 📊 Market analysis details
- 📊 Competitive positioning options
- 📊 Interview quotes (social proof)
- 📊 Case studies from research

### What Marketing Shares Back with Research

**Weekly Reports:**
- Campaign performance metrics
- What's working / what's not
- Customer feedback from ads
- Segment performance comparison
- Suggested research follow-ups

**Monthly Reports:**
- Aggregate learnings
- Recommended pivots
- New segment discoveries
- Market feedback vs. research predictions

**Feedback Loop:**
```
Marketing Campaign Results → Validates/Contradicts Research?
├─ If validates: Continue with current strategy
├─ If contradicts: Alert research for follow-up
└─ If inconclusive: Design test to clarify
```

---

## Tools & Systems

### Research to Marketing Data Exchange

**Recommended Approach:**
1. **YAML Export** - Structured data handoff
2. **Google Sheets** - Shared segment profiles + messaging
3. **Notion/Airtable** - Unified knowledge base
4. **Weekly Sync** - 1-hour alignment meeting

### Tools Used by Each Squad

**market-research-elite:**
- Interview notes (transcripts)
- Affinity diagrams (Miro/Mural)
- Data analysis (Excel/Sheets)
- Report generation (Markdown)

**eso-marketing-squad:**
- Ads platform (Meta, Google, TikTok)
- Landing page builder (Unbounce/Instapage)
- Analytics (Google Analytics, Mixpanel)
- Design tools (Figma, Adobe)
- Email platform (ConvertKit, Mailchimp)

**Shared:**
- Git repository (for documentation)
- Slack (for communication)
- Calendar (for planning)

---

## Communication Protocol

### Research → Marketing Handoff Meeting

**Agenda (2 hours):**
1. **Executive Summary** (15 min)
   - What we learned
   - What it means for marketing

2. **Key Insights Deep Dive** (30 min)
   - User segments walkthrough
   - Emotional drivers discussion
   - Behavior change strategy

3. **Marketing Application** (30 min)
   - How to position brand
   - How to segment audience
   - How to design funnel
   - What to test first

4. **Q&A & Action Items** (15 min)
   - Marketing team clarifications
   - Outstanding research questions
   - Timeline for marketing launch

### Weekly Sync (Ongoing)

**Format:** 30-minute video call
**Attendees:** 1 researcher, 1 marketer, 1 designer

**Topics:**
- Campaign performance vs. research predictions
- Customer feedback (validating/contradicting research)
- Optimization recommendations
- Data requests from marketing

---

## Success Metrics

### Research Phase Success

- [ ] All 7 phases completed with passing decision gates
- [ ] 80%+ of critical assumptions validated
- [ ] Clear strategic recommendations documented
- [ ] Marketing team confident in direction

### Marketing Phase Success

- [ ] Day 1 retention meets Eyal hook model targets
- [ ] Campaign messaging resonates (CTR > industry benchmark)
- [ ] Landing page conversion aligns with testing phase results
- [ ] Customer feedback confirms emotional drivers from Zaltman

### Integration Success

- [ ] Marketing validates research findings
- [ ] No major strategic pivots needed in execution phase
- [ ] Time from research completion to first campaign: < 2 weeks
- [ ] Marketing ROI > 3x cost of research

---

## FAQ

**Q: What if research finds the market is unattractive?**
A: The research phase includes decision gates. If market is not viable, the project pivots before expensive marketing spend.

**Q: Can marketing start before research completes?**
A: Not recommended. Research provides critical inputs (segments, emotional drivers, behavior design). Starting without them risks wasting marketing budget.

**Q: What if marketing results contradict research?**
A: This triggers a follow-up research sprint to understand the gap. Common reasons: research sample ≠ marketing audience, or messaging doesn't match unconscious drivers.

**Q: How often should research and marketing sync?**
A: Weekly during execution phase (first 8 weeks). Then monthly after product/market fit confirmed.

**Q: Can we use just the marketing squad without research?**
A: Possible but risky. You'll likely discover insights through paid ads that research would have found for less. Marketing without research is like flying blind.

**Q: What if we discover new segments after marketing launches?**
A: Great! This happens. Test the new segment, report back to research team, incorporate into strategy.

---

## Conclusion

The **market-research-elite** and **eso-marketing-squad** are designed to work together:

- **Research** discovers truth about markets, customers, and behavior
- **Marketing** executes the strategy efficiently and profitably
- **Integration** ensures no wasted effort or misaligned assumptions

**The handoff is a critical transition point.** Quality research prevents expensive marketing mistakes. Quality execution validates research findings.

Together, they create a complete system for successful brand launches.

---

**Document Version:** 1.0
**Created:** February 22, 2026
**Last Updated:** February 22, 2026
**Maintainer:** Craft (Squad Creator) 🏗️

