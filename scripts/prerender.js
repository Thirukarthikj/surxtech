// Static Pre-Rendering (SSG) Script for SURXTECH
// Generates discrete static HTML files for every public route with full metadata, canonicals, schemas, and semantic content.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Import solutions data
import { businessServices, studentServices, genuineCaseStudies, genuineBlogArticles, defaultFaqs } from '../src/data/solutionsData.js';

const SITE_URL = 'https://www.surxtech.com';

// Define all routes to pre-render
const routes = [
  {
    path: '/',
    title: 'SURXTECH | IT Company & Software Development in Dindigul',
    description: 'SURXTECH provides website development, mobile apps, AI solutions and custom software for businesses, along with MCA, BCA and engineering student project guidance in Tamil Nadu.',
    h1: 'Building Digital Solutions for Businesses and Future Innovators',
    content: `
      <h2>IT Company & Software Development in Dindigul, Tamil Nadu</h2>
      <p>Headquartered in Nilakottai, Dindigul District, SURXTECH is an IT startup delivering software solutions for businesses and technical project guidance for college students.</p>
      <h3>Enterprise & Small Business Digital Solutions</h3>
      <p>Website development, E-commerce platforms, Android mobile apps, custom software development, and AI solutions across Tamil Nadu.</p>
      <h3>College Student Project Guidance & Mentoring</h3>
      <p>Complete project solutions for MCA, BCA, B.Sc CS, and BE/B.Tech students with working source code, university documentation reports, PPT slides, and viva voice preparation.</p>
    `
  },
  {
    path: '/about',
    title: 'About SURXTECH | IT Startup & Software Development Company in Dindigul',
    description: 'Learn about SURXTECH, an IT startup in Nilakottai, Dindigul, Tamil Nadu. We engineer software solutions for businesses and mentor college students on technical projects.',
    h1: 'Engineering Modern Technology for Businesses & Students',
    content: `
      <h2>Our Mission & Core Philosophy</h2>
      <p>SURXTECH is an IT startup headquartered in Nilakottai, Dindigul District, Tamil Nadu. We empower small and medium enterprises with custom digital systems while bridging the academic-to-industry gap for college students through transparent technical mentoring.</p>
    `
  },
  {
    path: '/team',
    title: 'Meet Our Engineering Team | SURXTECH Dindigul',
    description: 'Meet the founders, tech leads, full stack engineers, and UI/UX designers behind SURXTECH in Nilakottai, Dindigul, Tamil Nadu.',
    h1: 'Meet Our Engineering Team',
    content: `
      <h2>The Founders & Engineers Behind SURXTECH</h2>
      <p>Leadership and core development team: J. Thirukarthik (Founder & Tech Lead), S. Surya (Co-Founder), Varun Raj (Full Stack Developer), Raja Rajan (Full Stack Developer), Stephen Raj (UI/UX Designer), and Shivan (Video Editor & Motion Designer).</p>
    `
  },
  {
    path: '/services',
    title: 'Software Development & Student Project Solutions | SURXTECH Dindigul',
    description: 'Comprehensive technology services by SURXTECH in Tamil Nadu: Web development, e-commerce, custom business software, mobile apps, and student final-year project guidance.',
    h1: 'End-to-End Digital Services & Student Project Guidance',
    content: `
      <h2>Dual Capability Suite for Business & Academia</h2>
      <p>We provide full-stack web and mobile application engineering for businesses, alongside comprehensive final-year project guidance for college students across Tamil Nadu.</p>
    `
  },
  {
    path: '/business-solutions',
    title: 'Business Solutions & Custom Software Development | SURXTECH Dindigul',
    description: 'Transform your business with SURXTECH. High-performance web development, e-commerce, Android apps, custom business software, and AI solutions in Tamil Nadu.',
    h1: 'Digital Development Solutions for Growing Businesses',
    content: `
      <h2>Enterprise & SME Digital Engineering</h2>
      <p>Custom websites, online shopping stores, mobile apps, billing software, and AI automation tailored for businesses across Nilakottai, Dindigul, and Tamil Nadu.</p>
    `
  },
  {
    path: '/student-projects',
    title: 'Student Project Center in Tamil Nadu | Final Year Projects | SURXTECH',
    description: 'Professional final year and mini project development for MCA, BCA, B.Sc CS, BE, and B.Tech students in Tamil Nadu. Source code, report, PPT, and viva coaching.',
    h1: 'College Student Project Guidance in Tamil Nadu',
    content: `
      <h2>Empowering Engineering & IT Students</h2>
      <p>Complete project packages for MCA, BCA, B.Sc CS, and BE/B.Tech students with working source code, IEEE-aligned documentation reports, review presentation slides, and line-by-line viva coaching.</p>
    `
  },
  {
    path: '/portfolio',
    title: 'Portfolio & Selected Client Work | SURXTECH Dindigul',
    description: 'Browse web applications, e-commerce stores, custom software, and mobile apps delivered by SURXTECH for businesses across Tamil Nadu.',
    h1: 'Selected Client Work & Engineering Portfolio',
    content: `
      <h2>Verified Projects Delivered for Tamil Nadu Businesses</h2>
      <p>Explore real production applications engineered by SURXTECH spanning SaaS platforms, mobile applications, and digital product portals.</p>
    `
  },
  {
    path: '/case-studies',
    title: 'Client Case Studies & Verified Projects | SURXTECH Dindigul',
    description: 'Explore real-world software and web development case studies delivered by SURXTECH in Tamil Nadu, featuring RIR Tours & Travels and Thangamalar Jewellers.',
    h1: 'Client Case Studies & Proven Results',
    content: `
      <h2>Verified Case Studies</h2>
      <p>Detailed analysis of client problems, technical solutions, and measured business outcomes for RIR Tours & Travels, Thangamalar Jewellers, and digital startups.</p>
    `
  },
  {
    path: '/process',
    title: 'Our 4-Stage Agile Development Process | SURXTECH Dindigul',
    description: 'Learn how SURXTECH builds high-scale web and mobile software: Discovery & Architecture, UI/UX Prototype, Agile Coding, and Rigorous Testing & Deployment.',
    h1: 'Our 4-Stage Development Process',
    content: `
      <h2>Simple, Transparent, and Agile</h2>
      <p>From initial discovery and wireframes to clean modular code, unit testing, and post-deployment 24/7 technical support.</p>
    `
  },
  {
    path: '/contact',
    title: 'Contact SURXTECH | IT Company in Nilakottai & Dindigul, Tamil Nadu',
    description: 'Get in touch with SURXTECH for business website development, mobile apps, custom software, and student project guidance. Office in Nilakottai, Dindigul.',
    h1: 'Connect With Our Engineering Team in Nilakottai, Dindigul',
    content: `
      <h2>Reach Out for Business Software or Student Project Guidance</h2>
      <p>Office: Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208. Phone: +91 9342553805. Email: surxtech@gmail.com.</p>
    `
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | SURXTECH',
    description: 'SURXTECH privacy policy. Learn how we handle client data, student project confidentiality, and website visitor privacy with total transparency.',
    h1: 'Privacy Policy',
    content: `<h2>Data Protection & Privacy Standards</h2><p>SURXTECH respects your privacy and protects business proprietary information and student project materials.</p>`
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | SURXTECH',
    description: 'SURXTECH terms of service. Guidelines, deliverables, intellectual property ownership, and milestone policies for business clients and students.',
    h1: 'Terms and Conditions',
    content: `<h2>Terms of Service & Engagement Guidelines</h2><p>Comprehensive terms covering milestone payments, full source code ownership handover, and academic learning integrity.</p>`
  },
  {
    path: '/blog',
    title: 'Technology & Software Engineering Blog | SURXTECH Dindigul',
    description: 'Practical software architecture insights, web development best practices, and college student final-year project guides by SURXTECH in Tamil Nadu.',
    h1: 'SURXTECH Engineering Blog',
    content: `<h2>Practical Guides on Software Development & Academic Projects</h2><p>Articles written by our software engineers on selecting IT companies in Dindigul, MCA/engineering final-year project ideas, and business website strategy.</p>`
  }
];

// Add all 8 business service routes
businessServices.forEach(s => {
  routes.push({
    path: s.path,
    title: s.metaTitle,
    description: s.metaDesc,
    h1: s.title,
    content: `
      <h2>${s.tagline}</h2>
      <p>${s.description}</p>
      <h3>Target Audience</h3>
      <p>${s.targetAudience}</p>
      <h3>Key Features</h3>
      <ul>${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <h3>Deliverables</h3>
      <ul>${s.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
    `
  });
});

// Add all 7 student project routes
studentServices.forEach(p => {
  routes.push({
    path: p.path,
    title: p.metaTitle,
    description: p.metaDesc,
    h1: p.title,
    content: `
      <h2>${p.tagline}</h2>
      <p>${p.description}</p>
      <h3>Eligibility & Courses</h3>
      <p>${p.targetAudience}</p>
      <h3>Curriculum & Technical Scope</h3>
      <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <h3>Deliverables</h3>
      <ul>${p.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
    `
  });
});

// Add all 10 blog post routes
genuineBlogArticles.forEach(a => {
  routes.push({
    path: `/blog/${a.slug}`,
    title: a.metaTitle,
    description: a.metaDesc,
    h1: a.title,
    content: `
      <h2>${a.category} · ${a.readTime} · By ${a.author}</h2>
      <p>${a.excerpt}</p>
    `
  });
});

async function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');

  console.log(`Starting static pre-rendering for ${routes.length} routes...`);

  for (const r of routes) {
    const canonicalUrl = `${SITE_URL}${r.path === '/' ? '/' : `${r.path}/`}`;

    // Replace Title
    let html = baseHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${r.title}</title>`
    );

    // Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${r.description}" />`
    );

    // Replace Canonical Link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${r.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${r.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Replace Twitter Card Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${r.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${r.description}" />`
    );

    // Inject Static Crawler Content inside <div id="root">
    const semanticFallback = `
      <div id="root">
        <header style="display:none;" class="seo-crawler-header">
          <nav><a href="/">Home</a> | <a href="/business-solutions/">Business Solutions</a> | <a href="/student-projects/">Student Projects</a> | <a href="/contact/">Contact</a></nav>
          <h1>${r.h1}</h1>
        </header>
        <main style="display:none;" class="seo-crawler-main">
          ${r.content}
          <footer>
            <p>SURXTECH — IT Startup & Software Development Company, Nilakottai, Dindigul, Tamil Nadu. Email: surxtech@gmail.com | Phone: +91 9342553805</p>
          </footer>
        </main>
      </div>
    `;

    // Only inject crawler semantic content if React hasn't mounted yet
    html = html.replace('<div id="root"></div>', semanticFallback.trim());

    // Determine target file path
    const routeFolder = r.path === '/'
      ? distDir
      : path.join(distDir, r.path.replace(/^\//, ''));

    if (!fs.existsSync(routeFolder)) {
      fs.mkdirSync(routeFolder, { recursive: true });
    }

    const outFilePath = path.join(routeFolder, 'index.html');
    fs.writeFileSync(outFilePath, html, 'utf-8');
  }

  // Create 404.html for static host fallbacks
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

  console.log(`✓ Pre-rendered ${routes.length} static HTML landing pages in dist/!`);
}

prerender();
