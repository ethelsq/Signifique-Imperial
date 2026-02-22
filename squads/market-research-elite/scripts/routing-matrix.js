#!/usr/bin/env node

/**
 * Routing Matrix
 *
 * Analyzes research findings and routes them to appropriate frameworks/phases
 * for optimal interpretation and decision-making.
 *
 * Usage:
 *   node routing-matrix.js --finding "Users prefer mobile over desktop"
 *   node routing-matrix.js --analysis behavior-findings.json
 */

const fs = require('fs');
const path = require('path');

// Framework mapping
const FRAMEWORKS = {
  0: {
    name: 'Brand Vision Model',
    author: 'David Aaker',
    keywords: [
      'brand', 'vision', 'positioning', 'differentiation', 'essence',
      'equity', 'proof points', 'strategic imperative', 'brand promise'
    ],
    output_types: ['vision_elements', 'brand_essence', 'proof_points'],
    decision_gate: 'Is brand vision adequate to differentiate?'
  },
  1: {
    name: 'Mental Models',
    author: 'Indy Young',
    keywords: [
      'task', 'behavior', 'segment', 'user thinking', 'mental model',
      'workflow', 'user journey', 'job workflow', 'how users think'
    ],
    output_types: ['mental_model_diagram', 'user_segments', 'task_flows'],
    decision_gate: 'Do user mental models align with brand positioning?'
  },
  2: {
    name: 'Five Forces Analysis',
    author: 'Michael Porter',
    keywords: [
      'market', 'competitive', 'attraction', 'market structure',
      'suppliers', 'buyers', 'rivals', 'substitutes', 'entrants',
      'industry', 'competition', 'threat', 'bargaining power'
    ],
    output_types: ['five_forces_scores', 'market_attractiveness', 'competitive_position'],
    decision_gate: 'Is market structure attractive?'
  },
  3: {
    name: 'Jobs to be Done',
    author: 'Clayton Christensen',
    keywords: [
      'job', 'demand', 'customer need', 'circumstance', 'emotional job',
      'functional job', 'social job', 'competing alternatives',
      'job statement', 'when customer wants'
    ],
    output_types: ['job_definition', 'job_statement', 'competing_alternatives'],
    decision_gate: 'Do we have a legitimate customer job?'
  },
  4: {
    name: 'ZMET Research',
    author: 'Gerald Zaltman',
    keywords: [
      'emotion', 'emotional driver', 'metaphor', 'unconscious',
      'motivation', 'hidden', 'feeling', 'aspiration', 'fear',
      'meaning', 'symbolism', 'identity'
    ],
    output_types: ['metaphor_analysis', 'emotional_drivers', 'emotional_positioning'],
    decision_gate: 'Do emotional drivers align with jobs?'
  },
  5: {
    name: 'Assumption Testing',
    author: 'Rita McGrath',
    keywords: [
      'assumption', 'test', 'validate', 'hypothesis', 'risk',
      'learning', 'pivot', 'discovery', 'testing', 'lean',
      'prototype', 'MVP', 'unproven'
    ],
    output_types: ['assumption_ranking', 'test_results', 'pivot_decision'],
    decision_gate: 'Have assumptions been validated?'
  },
  6: {
    name: 'Hook Model',
    author: 'Nir Eyal',
    keywords: [
      'habit', 'engagement', 'hook', 'trigger', 'action', 'reward',
      'investment', 'retention', 'daily active', 'retention curve',
      'variable reward', 'addictive'
    ],
    output_types: ['hook_model', 'engagement_metrics', 'retention_strategy'],
    decision_gate: 'Are habit loops designed for adoption?'
  },
  7: {
    name: 'Behavior Change Model',
    author: 'B.J. Fogg',
    keywords: [
      'behavior', 'motivation', 'ability', 'prompt', 'friction',
      'simplify', 'tiny habits', 'execution', 'adoption',
      'small change', 'barrier', 'ease of use'
    ],
    output_types: ['behavior_design', 'friction_reduction', 'execution_roadmap'],
    decision_gate: 'Can we reduce friction to desired behavior?'
  }
};

/**
 * Score a finding against framework keywords
 */
function scoreFramework(finding, framework) {
  const findingLower = finding.toLowerCase();
  let score = 0;

  framework.keywords.forEach(keyword => {
    if (findingLower.includes(keyword.toLowerCase())) {
      score += 1;
    }
  });

  return score;
}

/**
 * Route a single finding to appropriate frameworks
 */
function routeFinding(finding) {
  const scores = {};

  Object.keys(FRAMEWORKS).forEach(phaseNum => {
    const framework = FRAMEWORKS[phaseNum];
    scores[phaseNum] = scoreFramework(finding, framework);
  });

  // Sort by score descending
  const sorted = Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .map(phaseNum => ({
      phase: parseInt(phaseNum),
      framework: FRAMEWORKS[phaseNum].name,
      author: FRAMEWORKS[phaseNum].author,
      score: scores[phaseNum],
      relevance: getRelevance(scores[phaseNum])
    }));

  return sorted;
}

/**
 * Get relevance label based on score
 */
function getRelevance(score) {
  if (score >= 3) return 'HIGH';
  if (score >= 1) return 'MEDIUM';
  return 'LOW';
}

/**
 * Analyze multiple findings
 */
function analyzeFindings(findings) {
  const results = [];
  const frameworkScores = {};

  // Initialize framework scores
  Object.keys(FRAMEWORKS).forEach(phaseNum => {
    frameworkScores[phaseNum] = 0;
  });

  // Route each finding
  findings.forEach((finding, index) => {
    const routes = routeFinding(finding);

    // Accumulate framework scores
    routes.forEach(route => {
      if (route.relevance === 'HIGH') {
        frameworkScores[route.phase] += 3;
      } else if (route.relevance === 'MEDIUM') {
        frameworkScores[route.phase] += 1;
      }
    });

    results.push({
      finding: finding,
      routes: routes.slice(0, 3) // Top 3 matches
    });
  });

  return {
    findings: results,
    frameworkScores: frameworkScores,
    priorityFrameworks: getPriorityFrameworks(frameworkScores)
  };
}

/**
 * Get frameworks sorted by relevance to findings
 */
function getPriorityFrameworks(scores) {
  return Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .map(phaseNum => ({
      phase: parseInt(phaseNum),
      framework: FRAMEWORKS[phaseNum].name,
      author: FRAMEWORKS[phaseNum].author,
      relevance_score: scores[phaseNum]
    }));
}

/**
 * Format output as human-readable report
 */
function formatReport(analysis) {
  let report = '\n' +
    '╔════════════════════════════════════════════════════════════╗\n' +
    '║          ROUTING MATRIX - FRAMEWORK ANALYSIS REPORT        ║\n' +
    '╚════════════════════════════════════════════════════════════╝\n\n';

  report += '📊 FINDINGS ROUTING\n';
  report += '─'.repeat(60) + '\n\n';

  analysis.findings.forEach((item, index) => {
    report += `Finding ${index + 1}: "${item.finding}"\n`;
    report += '  Best matches:\n';

    item.routes.forEach(route => {
      const icon = route.relevance === 'HIGH' ? '✓' :
                   route.relevance === 'MEDIUM' ? '◐' : '○';
      report += `    ${icon} [Phase ${route.phase}] ${route.framework} (${route.author}) - ${route.relevance}\n`;
    });

    report += '\n';
  });

  report += '\n🎯 PRIORITY FRAMEWORKS (by relevance to findings)\n';
  report += '─'.repeat(60) + '\n\n';

  analysis.priorityFrameworks.forEach((fw, index) => {
    if (fw.relevance_score > 0) {
      report += `${index + 1}. [Phase ${fw.phase}] ${fw.framework} (${fw.author})\n`;
      report += `   Relevance Score: ${fw.relevance_score}\n`;
      report += `   Decision Gate: ${FRAMEWORKS[fw.phase].decision_gate}\n\n`;
    }
  });

  return report;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
Usage:
  node routing-matrix.js --finding "Your finding here"
  node routing-matrix.js --findings findings.json
  node routing-matrix.js --help

Examples:
  node routing-matrix.js --finding "Users prefer mobile over desktop"
  node routing-matrix.js --findings research-findings.json

Options:
  --finding <text>      Analyze a single finding
  --findings <file>     Analyze JSON file with array of findings
  --help               Show this help message
    `);
    return;
  }

  let findings = [];

  if (args[0] === '--help') {
    console.log('Help displayed above');
    return;
  }

  if (args[0] === '--finding' && args[1]) {
    findings = [args[1]];
  } else if (args[0] === '--findings' && args[1]) {
    try {
      const file = fs.readFileSync(args[1], 'utf8');
      const data = JSON.parse(file);
      findings = Array.isArray(data) ? data : data.findings || [];
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      process.exit(1);
    }
  } else {
    console.error('Invalid arguments. Use --help for usage information.');
    process.exit(1);
  }

  if (findings.length === 0) {
    console.error('No findings provided.');
    process.exit(1);
  }

  // Analyze findings
  const analysis = analyzeFindings(findings);

  // Format and display report
  const report = formatReport(analysis);
  console.log(report);

  // Also save to file
  const timestamp = new Date().toISOString().split('T')[0];
  const filename = `routing-analysis-${timestamp}.txt`;
  fs.writeFileSync(filename, report);
  console.log(`\n✓ Report saved to: ${filename}\n`);
}

// Run main
main();

module.exports = {
  routeFinding,
  analyzeFindings,
  FRAMEWORKS
};
