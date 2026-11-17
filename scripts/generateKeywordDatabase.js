// SURXTECH Keyword Database CLI Validator & Exporter
// Run via: node scripts/generateKeywordDatabase.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  queryCandidateKeywords,
  convertKeywordsToCSV,
  generateCandidateKeywordsCount,
  LOCATIONS,
  TECHNOLOGIES,
  BUSINESS_SERVICES_MAP,
  STUDENT_SERVICES_MAP,
  CURATED_SEED_KEYWORDS,
} from '../src/data/keywordDatabase.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../public/seo');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('====================================================');
console.log(' SURXTECH SCALABLE KEYWORD RESEARCH DATABASE ENGINE ');
console.log('====================================================');

const grandTotal = generateCandidateKeywordsCount();
console.log(`✓ Theoretical Candidate Permutations: ${grandTotal.toLocaleString()}`);

// Query full in-memory active pool
const activePool = queryCandidateKeywords({ pageSize: 20000 });
console.log(`✓ Active Deduplicated Primary Matrix Pool: ${activePool.total.toLocaleString()} keywords`);
console.log(`✓ Coverage Locations: ${LOCATIONS.length} Tamil Nadu cities & regions`);
console.log(`✓ Technology Stacks: ${TECHNOLOGIES.length} modern stacks`);
console.log(`✓ Business Service Subcategories: ${BUSINESS_SERVICES_MAP.length}`);
console.log(`✓ Student Project Subcategories: ${STUDENT_SERVICES_MAP.length}`);
console.log(`✓ Curated High-Priority Seeds: ${CURATED_SEED_KEYWORDS.length}`);

// Export Sample High-Priority CSV
const topKeywords = queryCandidateKeywords({ priority: 'Critical', pageSize: 500 }).keywords;
const csvContent = convertKeywordsToCSV(topKeywords.length > 0 ? topKeywords : activePool.keywords.slice(0, 500));
const csvPath = path.join(outDir, 'surxtech-target-keywords-sample.csv');
fs.writeFileSync(csvPath, csvContent, 'utf-8');
console.log(`✓ Exported sample priority keywords CSV to: ${csvPath}`);

// Export JSON summary
const summaryPath = path.join(outDir, 'keyword-database-summary.json');
fs.writeFileSync(
  summaryPath,
  JSON.stringify(
    {
      lastGenerated: new Date().toISOString(),
      grandCandidateCombinations: grandTotal,
      activeMatrixPoolCount: activePool.total,
      locationsCovered: LOCATIONS.map((l) => l.name),
      businessServices: BUSINESS_SERVICES_MAP.map((b) => ({ name: b.name, url: b.url })),
      studentServices: STUDENT_SERVICES_MAP.map((s) => ({ name: s.name, url: s.url })),
      curatedPriorityCount: CURATED_SEED_KEYWORDS.length,
    },
    null,
    2
  ),
  'utf-8'
);
console.log(`✓ Exported database summary JSON to: ${summaryPath}`);
console.log('====================================================\n');
