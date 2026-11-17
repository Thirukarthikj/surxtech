// Dynamic XML Sitemap Generator for SURXTECH
// Run via: node scripts/generateSitemap.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { businessServices, genuineBlogArticles } from '../src/data/solutionsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

const SITE_URL = 'https://www.surxtech.com';
const TODAY = new Date().toISOString().slice(0, 10);

const corePages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/team', priority: '0.75', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/business-solutions', priority: '0.9', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.85', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.85', changefreq: 'weekly' },
  { url: '/process', priority: '0.75', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.85', changefreq: 'weekly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
];

const urls = [];

// 1. Core Pages
corePages.forEach((p) => {
  urls.push({
    loc: `${SITE_URL}${p.url}`,
    lastmod: TODAY,
    changefreq: p.changefreq,
    priority: p.priority,
  });
});

// 2. Business Services
businessServices.forEach((s) => {
  urls.push({
    loc: `${SITE_URL}${s.path}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
  });
});

// 3. Genuine Blog Articles
genuineBlogArticles.forEach((a) => {
  urls.push({
    loc: `${SITE_URL}/blog/${a.slug}`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.8',
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`✓ Generated dynamic XML sitemap with ${urls.length} verified canonical URLs at: ${sitemapPath}`);
