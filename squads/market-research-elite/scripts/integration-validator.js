#!/usr/bin/env node

/**
 * Integration Validator
 *
 * Validates consistency and alignment across all 8 phases of research.
 * Checks that findings from each phase reinforce rather than contradict
 * findings from previous phases.
 *
 * Usage:
 *   node integration-validator.js --config research-results.json
 */

const fs = require('fs');
const path = require('path');

/**
 * Validation rules between phases
 */
const INTEGRATION_RULES = {
  // Phase 0 → Phase 1
  '0→1': {
    name: 'Brand Vision → Mental Models',
    rules: [
      {
        check: 'user_segments_align_with_brand',
        description: 'User mental models should support brand vision',
        severity: 'HIGH'
      },
      {
        check: 'no_contradictory_segments',
        description: 'User segments should not contradict brand vision',
        severity: 'HIGH'
      }
    ]
  },

  // Phase 1 → Phase 2
  '1→2': {
    name: 'Mental Models → Market Structure',
    rules: [
      {
        check: 'market_serves_user_segments',
        description: 'Market structure should support user segments identified',
        severity: 'MEDIUM'
      }
    ]
  },

  // Phase 2 → Phase 3
  '2→3': {
    name: 'Market Structure → Jobs',
    rules: [
      {
        check: 'market_attractive_for_job',
        description: 'Market should be attractive (Phase 2) for the job we identified (Phase 3)',
        severity: 'HIGH'
      }
    ]
  },

  // Phase 3 → Phase 4
  '3→4': {
    name: 'Jobs → Emotional Drivers',
    rules: [
      {
        check: 'emotions_support_job',
        description: 'Emotional drivers should support/enable the functional job',
        severity: 'MEDIUM'
      },
      {
        check: 'no_emotional_contradiction',
        description: 'Emotional drivers should not contradict the job',
        severity: 'HIGH'
      }
    ]
  },

  // Phase 4 → Phase 5
  '4→5': {
    name: 'Emotional Drivers → Assumption Testing',
    rules: [
      {
        check: 'assumptions_test_emotional_barriers',
        description: 'Assumptions should address emotional barriers identified',
        severity: 'MEDIUM'
      }
    ]
  },

  // Phase 5 → Phase 6
  '5→6': {
    name: 'Assumptions → Engagement Design',
    rules: [
      {
        check: 'assumptions_validated_before_engagement',
        description: 'Critical assumptions must be validated before designing engagement',
        severity: 'HIGH'
      }
    ]
  },

  // Phase 6 → Phase 7
  '6→7': {
    name: 'Engagement → Behavior Change',
    rules: [
      {
        check: 'hook_supports_behavior_change',
        description: 'Habit hook should enable desired behavior change',
        severity: 'MEDIUM'
      }
    ]
  }
};

/**
 * Validate phase prerequisite
 */
function validatePhaseCompletion(results, phaseNum) {
  if (!results[`phase_${phaseNum}`]) {
    return {
      valid: false,
      error: `Phase ${phaseNum} results not found`,
      severity: 'CRITICAL'
    };
  }

  const phase = results[`phase_${phaseNum}`];

  if (!phase.gate_decision) {
    return {
      valid: false,
      error: `Phase ${phaseNum} decision gate not answered`,
      severity: 'CRITICAL'
    };
  }

  if (phase.gate_decision === 'NO-GO' || phase.gate_decision === 'BLOCKED') {
    return {
      valid: false,
      error: `Phase ${phaseNum} did not pass gate: ${phase.gate_decision}`,
      severity: 'CRITICAL'
    };
  }

  return {
    valid: true,
    error: null
  };
}

/**
 * Check alignment between two phases
 */
function checkPhaseAlignment(results, fromPhase, toPhase) {
  const issues = [];

  const fromKey = `phase_${fromPhase}`;
  const toKey = `phase_${toPhase}`;

  if (!results[fromKey] || !results[toKey]) {
    return {
      aligned: false,
      issues: ['Missing phase data'],
      severity: 'CRITICAL'
    };
  }

  const from = results[fromKey];
  const to = results[toKey];

  // Rule 0→1: Brand Vision → Mental Models
  if (fromPhase === 0 && toPhase === 1) {
    if (from.brand_vision_differentiates !== true) {
      issues.push('Phase 0: Brand vision should differentiate before mental models');
    }
    if (to.user_segments && from.vision_elements) {
      // Check if segments contradict vision
      const visionThemes = extractThemes(from.vision_elements);
      const segmentNeeds = extractNeeds(to.user_segments);
      if (!hasOverlap(visionThemes, segmentNeeds)) {
        issues.push('Phase 1: User segments do not align with brand vision themes');
      }
    }
  }

  // Rule 1→2: Mental Models → Market Structure
  if (fromPhase === 1 && toPhase === 2) {
    if (to.market_attractiveness_score < 5) {
      issues.push('Phase 2: Low market attractiveness contradicts Phase 1 user segment size');
    }
  }

  // Rule 2→3: Market Structure → Jobs
  if (fromPhase === 2 && toPhase === 3) {
    if (to.gate_decision === 'NO' && from.market_attractiveness_score > 6) {
      issues.push('Phase 3: Job rejected despite attractive market');
    }
  }

  // Rule 3→4: Jobs → Emotional Drivers
  if (fromPhase === 3 && toPhase === 4) {
    if (to.emotional_alignment === 'MISALIGNED') {
      issues.push('Phase 4: Emotional drivers misaligned with functional job');
    }
  }

  // Rule 5→6: Assumptions → Engagement
  if (fromPhase === 5 && toPhase === 6) {
    if (from.validation_percentage < 0.7) {
      issues.push('Phase 6: Less than 70% of assumptions validated before engagement design');
    }
  }

  return {
    aligned: issues.length === 0,
    issues: issues,
    severity: issues.length > 0 ? 'MEDIUM' : 'OK'
  };
}

/**
 * Extract themes from vision elements
 */
function extractThemes(visionElements) {
  if (!Array.isArray(visionElements)) return [];
  return visionElements.map(e => e.toLowerCase()).filter(e => e.length > 0);
}

/**
 * Extract needs from user segments
 */
function extractNeeds(userSegments) {
  if (!Array.isArray(userSegments)) return [];
  return userSegments
    .flatMap(s => (s.needs || []).map(n => n.toLowerCase()))
    .filter(n => n.length > 0);
}

/**
 * Check if two arrays have overlap
 */
function hasOverlap(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return true; // Can't validate
  return arr1.some(item => arr2.some(item2 => item2.includes(item) || item.includes(item2)));
}

/**
 * Run full integration validation
 */
function validateIntegration(results) {
  const validation = {
    overall_status: 'UNKNOWN',
    phases_completed: [],
    alignment_checks: [],
    critical_issues: [],
    warnings: [],
    recommendations: []
  };

  // Phase 1: Check each phase is complete
  for (let i = 0; i <= 7; i++) {
    const completion = validatePhaseCompletion(results, i);
    validation.phases_completed.push({
      phase: i,
      complete: completion.valid,
      error: completion.error,
      severity: completion.severity
    });

    if (!completion.valid && completion.severity === 'CRITICAL') {
      validation.critical_issues.push(`Phase ${i}: ${completion.error}`);
    }
  }

  // Phase 2: Check alignment between phases
  for (let i = 0; i < 7; i++) {
    const alignment = checkPhaseAlignment(results, i, i + 1);
    validation.alignment_checks.push({
      from_phase: i,
      to_phase: i + 1,
      aligned: alignment.aligned,
      issues: alignment.issues,
      severity: alignment.severity
    });

    if (!alignment.aligned) {
      if (alignment.severity === 'CRITICAL') {
        validation.critical_issues.push(`Phase ${i}→${i + 1}: ${alignment.issues.join('; ')}`);
      } else {
        validation.warnings.push(`Phase ${i}→${i + 1}: ${alignment.issues.join('; ')}`);
      }
    }
  }

  // Determine overall status
  if (validation.critical_issues.length > 0) {
    validation.overall_status = 'FAILED';
  } else if (validation.warnings.length > 0) {
    validation.overall_status = 'WARNING';
  } else {
    validation.overall_status = 'PASSED';
  }

  // Generate recommendations
  if (validation.overall_status === 'FAILED') {
    validation.recommendations.push('Critical integration issues must be resolved before proceeding');
    validation.recommendations.push('Review Phase outputs identified in critical_issues');
  } else if (validation.overall_status === 'WARNING') {
    validation.recommendations.push('Address warnings before finalizing research report');
    validation.recommendations.push('Consider re-testing assumptions in flagged areas');
  } else {
    validation.recommendations.push('All phases integrated successfully');
    validation.recommendations.push('Proceed to master recommendations and final decision');
  }

  return validation;
}

/**
 * Format validation report
 */
function formatReport(validation) {
  let report = '\n' +
    '╔════════════════════════════════════════════════════════════╗\n' +
    '║      INTEGRATION VALIDATOR - 8-PHASE COHERENCE REPORT      ║\n' +
    '╚════════════════════════════════════════════════════════════╝\n\n';

  // Overall Status
  const statusIcon = validation.overall_status === 'PASSED' ? '✓' :
                     validation.overall_status === 'WARNING' ? '⚠' : '✗';
  report += `Overall Status: ${statusIcon} ${validation.overall_status}\n\n`;

  // Phase Completion
  report += '📋 PHASE COMPLETION STATUS\n';
  report += '─'.repeat(60) + '\n';
  validation.phases_completed.forEach(p => {
    const icon = p.complete ? '✓' : '✗';
    report += `${icon} Phase ${p.phase}: ${p.complete ? 'Complete' : p.error}\n`;
  });

  // Alignment Checks
  report += '\n🔗 PHASE ALIGNMENT CHECKS\n';
  report += '─'.repeat(60) + '\n';
  validation.alignment_checks.forEach(a => {
    const icon = a.aligned ? '✓' : '⚠';
    report += `${icon} Phase ${a.from_phase} → Phase ${a.to_phase}: ${a.aligned ? 'Aligned' : 'Issues Found'}\n`;
    if (a.issues.length > 0) {
      a.issues.forEach(issue => {
        report += `   └─ ${issue}\n`;
      });
    }
  });

  // Critical Issues
  if (validation.critical_issues.length > 0) {
    report += '\n🚨 CRITICAL ISSUES\n';
    report += '─'.repeat(60) + '\n';
    validation.critical_issues.forEach((issue, idx) => {
      report += `${idx + 1}. ${issue}\n`;
    });
  }

  // Warnings
  if (validation.warnings.length > 0) {
    report += '\n⚠️  WARNINGS\n';
    report += '─'.repeat(60) + '\n';
    validation.warnings.forEach((warning, idx) => {
      report += `${idx + 1}. ${warning}\n`;
    });
  }

  // Recommendations
  if (validation.recommendations.length > 0) {
    report += '\n💡 RECOMMENDATIONS\n';
    report += '─'.repeat(60) + '\n';
    validation.recommendations.forEach((rec, idx) => {
      report += `${idx + 1}. ${rec}\n`;
    });
  }

  report += '\n' + '═'.repeat(60) + '\n';
  report += `Generated: ${new Date().toISOString()}\n`;

  return report;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
Integration Validator - 8-Phase Research Coherence

Usage:
  node integration-validator.js --config <results.json>
  node integration-validator.js --example

Options:
  --config <file>   Load JSON file with phase results
  --example         Show example JSON format
  --help           Show this help message

Example JSON format:
  {
    "phase_0": {
      "gate_decision": "YES",
      "brand_vision_differentiates": true,
      "vision_elements": ["Innovation", "Simplicity"]
    },
    "phase_1": {
      "gate_decision": "ALIGNED",
      "user_segments": [{"name": "Tech-savvy", "needs": ["Innovation", "Simplicity"]}]
    },
    ...
  }
    `);
    return;
  }

  if (args[0] === '--example') {
    const example = {
      phase_0: {
        gate_decision: 'YES',
        brand_vision_differentiates: true,
        vision_elements: ['Innovation', 'Simplicity', 'Premium Quality'],
        brand_essence: 'Simplicity in Technology'
      },
      phase_1: {
        gate_decision: 'ALIGNED',
        user_segments: [
          {
            name: 'Tech Enthusiasts',
            needs: ['Innovation', 'Simplicity']
          }
        ]
      },
      phase_2: {
        gate_decision: 'GO',
        market_attractiveness_score: 8
      },
      phase_3: {
        gate_decision: 'YES',
        job_statement: 'When I want to stay connected...'
      },
      phase_4: {
        gate_decision: 'ALIGNED',
        emotional_alignment: 'ALIGNED'
      },
      phase_5: {
        gate_decision: 'VALIDATED',
        validation_percentage: 0.85
      },
      phase_6: {
        gate_decision: 'YES'
      },
      phase_7: {
        gate_decision: 'YES'
      }
    };

    console.log('Example JSON format:\n');
    console.log(JSON.stringify(example, null, 2));
    return;
  }

  if (args[0] === '--config' && args[1]) {
    try {
      const file = fs.readFileSync(args[1], 'utf8');
      const results = JSON.parse(file);

      const validation = validateIntegration(results);
      const report = formatReport(validation);

      console.log(report);

      // Save report
      const timestamp = new Date().toISOString().split('T')[0];
      const filename = `integration-validation-${timestamp}.txt`;
      fs.writeFileSync(filename, report);
      console.log(`\n✓ Report saved to: ${filename}\n`);

      // Exit with appropriate code
      process.exit(validation.overall_status === 'PASSED' ? 0 : 1);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  } else {
    console.error('Invalid arguments. Use --help for usage information.');
    process.exit(1);
  }
}

// Run main
main();

module.exports = {
  validateIntegration,
  checkPhaseAlignment,
  validatePhaseCompletion
};
