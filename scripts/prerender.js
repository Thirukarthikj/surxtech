// Static Pre-Rendering (SSG) Script for SURXTECH
// Generates discrete static HTML files for every public route with full metadata, canonicals, schemas, and 100% visible semantic content.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Import solutions data
import { businessServices, genuineCaseStudies, genuineBlogArticles, defaultFaqs } from '../src/data/solutionsData.js';

const SITE_URL = 'https://www.surxtech.com';

// Define all routes to pre-render
const routes = [
  {
    path: '/',
    title: 'SURXTECH | IT Company & Software Development in Dindigul',
    description: 'SURXTECH is an IT startup and software development company based in Nilakottai, Dindigul, Tamil Nadu. Building custom websites, mobile applications, AI solutions, and enterprise software.',
    h1: 'Building Digital Solutions for Growing Businesses',
    content: `
      <section>
        <h2>IT Company & Software Development in Dindigul, Tamil Nadu</h2>
        <p>Headquartered in <strong>Nilakottai, Dindigul District, Tamil Nadu</strong>, <strong>SURXTECH</strong> is a modern software development startup dedicated to engineering high-performance digital products, web applications, and enterprise software systems for businesses.</p>
        <p>We combine modern full-stack architectures (React, Next.js, Node.js, Python, Flutter) with dependable local customer support across Nilakottai, Dindigul, Batlagundu, Madurai, Theni, and Tamil Nadu.</p>
      </section>

      <section>
        <h2>Business Digital Solutions & Services</h2>
        <p>We engineer scalable web applications, mobile apps, and business software tailored for startups, retail shops, clinics, educational institutions, and growing enterprises:</p>
        <ul>
          <li><a href="/web-development"><strong>Web Development Services</strong></a>: Lightning-fast business websites, corporate portals, and custom React/Next.js web applications.</li>
          <li><a href="/ecommerce-development"><strong>E-Commerce Development</strong></a>: Online stores with UPI payment integration, WhatsApp order routing, and inventory tracking.</li>
          <li><a href="/mobile-app-development"><strong>Mobile App Development</strong></a>: Cross-platform Android & iOS applications using Flutter and React Native with offline data sync.</li>
          <li><a href="/custom-software-development"><strong>Custom Software Development</strong></a>: Tailored billing systems, ERP, CRM, and clinic management software with 100% IP ownership.</li>
          <li><a href="/ai-solutions"><strong>AI-Powered Business Solutions</strong></a>: Automated WhatsApp chatbots, workflow automation, and predictive data tools.</li>
          <li><a href="/ui-ux-design"><strong>UI/UX Design Services</strong></a>: Interactive Figma prototypes, design systems, and conversion-optimized user flows.</li>
          <li><a href="/seo-services"><strong>Search Engine Optimization (SEO)</strong></a>: Local SEO in Dindigul, Google Business Profile optimization, and technical SEO audits.</li>
          <li><a href="/website-maintenance"><strong>Website Maintenance & Support</strong></a>: Annual maintenance contracts (AMC), security patches, speed audits, and 99.9% uptime.</li>
        </ul>
        <p><a href="/services">Explore All Business Services &rarr;</a></p>
      </section>

      <section>
        <h2>Verified Client Case Studies</h2>
        <ul>
          <li><strong>RIR Tours & Travels</strong>: Modern corporate travel & fleet booking portal with instant WhatsApp booking quotes. <a href="/case-studies">Read Case Study &rarr;</a></li>
          <li><strong>Thangamalar Jewellers</strong>: Digital jewellery catalogue with live gold rate calculations and direct store reserve flow. <a href="/case-studies">Read Case Study &rarr;</a></li>
        </ul>
      </section>

      <section>
        <h2>Frequently Asked Questions (FAQ)</h2>
        ${defaultFaqs.map(f => `
          <div>
            <h3>${f.question}</h3>
            <p>${f.answer}</p>
          </div>
        `).join('')}
      </section>

      <section>
        <h2>Contact SURXTECH in Nilakottai & Dindigul</h2>
        <p><strong>Headquarters:</strong> Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208, India.</p>
        <p><strong>WhatsApp / Phone:</strong> <a href="tel:+919342553805">+91 93425 53805</a> | <strong>Email:</strong> <a href="mailto:surxtech@gmail.com">surxtech@gmail.com</a></p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/surxtech" target="_blank" rel="noopener noreferrer">@surxtech</a></p>
      </section>
    `
  },
  {
    path: '/about',
    title: 'About SURXTECH | IT Startup & Software Development Company in Dindigul',
    description: 'Learn about SURXTECH, an IT startup in Nilakottai, Dindigul, Tamil Nadu. We engineer high-performance web applications, custom software, mobile apps, and AI solutions for growing businesses.',
    h1: 'Engineering Modern Technology for Growing Businesses',
    content: `
      <h2>Our Mission & Core Philosophy</h2>
      <p>SURXTECH is an IT startup headquartered in Nilakottai, Dindigul District, Tamil Nadu. We empower small and medium enterprises with custom digital systems, scalable cloud architectures, and conversion-optimized websites.</p>
      <p>Our team of experienced engineers, architects, and designers specialize in modern stacks including React, Next.js, Node.js, Python, and Flutter.</p>
      <p>Office: Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208. Phone: <a href="tel:+919342553805">+91 93425 53805</a>.</p>
    `
  },
  {
    path: '/team',
    title: 'Meet Our Engineering Team | SURXTECH Dindigul',
    description: 'Meet the founders, tech leads, full stack engineers, and UI/UX designers behind SURXTECH in Nilakottai, Dindigul, Tamil Nadu.',
    h1: 'Meet Our Engineering Team',
    content: `
      <h2>The Founders & Engineers Behind SURXTECH</h2>
      <p>Our leadership and core development team:</p>
      <ul>
        <li><strong>J. Thirukarthik</strong> — Founder & Tech Lead (React, Node, Architecture) · Instagram: <a href="https://instagram.com/karthiks_83">@karthiks_83</a></li>
        <li><strong>S. Surya</strong> — Co-Founder (Product Strategy & Operations) · Instagram: <a href="https://instagram.com/surxtech">@surxtech</a></li>
        <li><strong>Varun Raj</strong> — Full Stack Developer (React, Node, MongoDB) · Instagram: <a href="https://instagram.com/jarnurav">@jarnurav</a></li>
        <li><strong>Raja Rajan</strong> — Full Stack Developer (Next.js, Cloud APIs, SQL) · Instagram: <a href="https://instagram.com/_rajzx_45">@_rajzx_45</a></li>
        <li><strong>Stephen Raj</strong> — UI/UX Designer (Figma, Systems, Prototyping) · Instagram: <a href="https://instagram.com/stephensteve123">@stephensteve123</a></li>
        <li><strong>Shivan</strong> — Video Editor & Motion Designer (Premiere, VFX, Reels) · Instagram: <a href="https://instagram.com/unlucky_sivan_02">@unlucky_sivan_02</a></li>
      </ul>
    `
  },
  {
    path: '/services',
    title: 'Business Software Development & Digital Services | SURXTECH Dindigul',
    description: 'Comprehensive software services by SURXTECH in Tamil Nadu: Web development, e-commerce, custom business software, mobile apps, AI solutions, and SEO.',
    h1: 'End-to-End Business Software & Digital Services',
    content: `
      <h2>Full-Scale Engineering for Modern Businesses</h2>
      <p>We provide full-stack web and mobile application engineering, cloud infrastructure, and custom business software for enterprises across Tamil Nadu.</p>
      <h3>Available Services:</h3>
      <p><a href="/web-development">Web Development</a> · <a href="/ecommerce-development">E-Commerce</a> · <a href="/mobile-app-development">Mobile Apps</a> · <a href="/custom-software-development">Custom Software</a> · <a href="/ai-solutions">AI Solutions</a> · <a href="/ui-ux-design">UI/UX Design</a> · <a href="/seo-services">SEO Services</a> · <a href="/website-maintenance">Website Maintenance</a></p>
    `
  },
  {
    path: '/portfolio',
    title: 'Client Case Studies & Verified Projects | SURXTECH Dindigul',
    description: 'Explore real software projects, web applications, and digital systems built by SURXTECH for businesses across Tamil Nadu.',
    h1: 'Verified Client Case Studies & Production Portfolio',
    content: `
      <h2>Real Digital Transformations for Real Businesses</h2>
      <p>Discover how SURXTECH helps enterprises, retailers, and service providers automate workflows, launch high-speed web platforms, and increase revenue.</p>
      <ul>
        <li><strong>RIR Tours & Travels</strong> — Travel portal & booking calculator with WhatsApp integration.</li>
        <li><strong>Thangamalar Jewellers</strong> — Digital jewellery catalog with real-time daily gold rate updates.</li>
      </ul>
    `
  },
  {
    path: '/case-studies',
    title: 'Software Development Case Studies in Tamil Nadu | SURXTECH',
    description: 'In-depth case studies showcasing how SURXTECH solved business problems through custom web development, mobile apps, and e-commerce platforms.',
    h1: 'Software Development Case Studies',
    content: `
      <h2>Detailed Engineering Project Breakdowns</h2>
      <p>Read about our problem-solving methodologies, technical architectures, and measurable results for clients in Tamil Nadu.</p>
    `
  },
  {
    path: '/process',
    title: 'Our Agile Software Development Process | SURXTECH',
    description: 'Learn how SURXTECH plans, designs, engineers, tests, and deploys high-scale software applications using transparent agile methodologies.',
    h1: 'Transparent, Milestone-Driven Engineering Process',
    content: `
      <h2>How We Deliver Production-Quality Software</h2>
      <p>From initial discovery and wireframes to clean modular code, unit testing, and post-deployment 24/7 technical support.</p>
    `
  },
  {
    path: '/contact',
    title: 'Contact SURXTECH | IT Company in Nilakottai & Dindigul, Tamil Nadu',
    description: 'Get in touch with SURXTECH for business website development, mobile apps, and custom software. Office in Nilakottai, Dindigul.',
    h1: 'Connect With Our Engineering Team in Nilakottai, Dindigul',
    content: `
      <h2>Reach Out for Business Software Solutions</h2>
      <p><strong>Physical Office:</strong> Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208, India.</p>
      <p><strong>WhatsApp / Phone:</strong> <a href="tel:+919342553805">+91 93425 53805</a></p>
      <p><strong>Email:</strong> <a href="mailto:surxtech@gmail.com">surxtech@gmail.com</a></p>
      <p><strong>Google Maps:</strong> <a href="https://maps.google.com/?q=Nilakottai,+Dindigul,+Tamil+Nadu" target="_blank" rel="noopener noreferrer">View Nilakottai Location on Google Maps &rarr;</a></p>
    `
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | SURXTECH',
    description: 'SURXTECH privacy policy. Learn how we handle client data, intellectual property confidentiality, and website visitor privacy with total transparency.',
    h1: 'Privacy Policy',
    content: `<h2>Data Protection & Privacy Standards</h2><p>SURXTECH respects your privacy and protects business proprietary information and client assets.</p>`
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | SURXTECH',
    description: 'SURXTECH terms of service. Guidelines, deliverables, intellectual property ownership, and milestone policies for business clients.',
    h1: 'Terms and Conditions',
    content: `<h2>Terms of Service & Engagement Guidelines</h2><p>Comprehensive terms covering milestone payments, full source code ownership handover, and quality warranty standards.</p>`
  },
  {
    path: '/blog',
    title: 'Technology & Software Engineering Blog | SURXTECH Dindigul',
    description: 'Practical software architecture insights, web development best practices, and IT strategy guides by SURXTECH in Tamil Nadu.',
    h1: 'SURXTECH Engineering Blog',
    content: `<h2>Practical Guides on Software Development & Business Technology</h2><p>Articles written by our software engineers on selecting IT companies in Dindigul, website costs, custom software vs builders, and digital strategy.</p>`
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
      <p><a href="/contact">Request a Quote for ${s.shortTitle} &rarr;</a></p>
    `
  });
});

// Add all business blog post routes
genuineBlogArticles.forEach(a => {
  routes.push({
    path: `/blog/${a.slug}`,
    title: a.metaTitle,
    description: a.metaDesc,
    h1: a.title,
    content: `
      <h2>${a.category} · ${a.readTime} · By ${a.author}</h2>
      <p>${a.excerpt}</p>
      <div>${a.content.replace(/\n/g, '<br />')}</div>
      <p><a href="/blog">&larr; Back to All Articles</a></p>
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
    // Exact canonical URL (no trailing slash for subpages; root retains slash)
    const canonicalUrl = `${SITE_URL}${r.path === '/' ? '/' : r.path}`;

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

    // Inject 100% VISIBLE semantic HTML inside <div id="root">
    const semanticMarkup = `
      <div id="root">
        <header class="site-prerender-nav">
          <a href="/" style="font-weight: 800; font-size: 18px; color: #0f172a; text-decoration: none;">SURXTECH</a>
          <nav>
            <a href="/">Home</a> | 
            <a href="/about">About</a> | 
            <a href="/services">Service</a> | 
            <a href="/services#enquiry">Enquire</a> | 
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main class="site-prerender-content">
          <h1>${r.h1}</h1>
          ${r.content}
          <footer class="site-prerender-footer">
            <p><strong>SURXTECH</strong> — IT Startup & Software Development Company, Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208, India. Email: <a href="mailto:surxtech@gmail.com">surxtech@gmail.com</a> | Phone: <a href="tel:+919342553805">+91 93425 53805</a></p>
            <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-conditions">Terms & Conditions</a> | &copy; ${new Date().getFullYear()} SURXTECH</p>
          </footer>
        </main>
      </div>
    `;

    html = html.replace('<div id="root"></div>', semanticMarkup.trim());

    // Write file outputs
    if (r.path === '/') {
      fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
    } else {
      const cleanSlug = r.path.replace(/^\//, '');
      const routeFolder = path.join(distDir, cleanSlug);

      if (!fs.existsSync(routeFolder)) {
        fs.mkdirSync(routeFolder, { recursive: true });
      }

      // Write directory index for hosts supporting /path/
      fs.writeFileSync(path.join(routeFolder, 'index.html'), html, 'utf-8');

      // Write clean HTML file for hosts supporting /path (cleanUrls: true)
      fs.writeFileSync(path.join(distDir, `${cleanSlug}.html`), html, 'utf-8');
    }
  }

  // Create 404.html for static host fallbacks
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

  console.log(`✓ Pre-rendered ${routes.length} static HTML landing pages in dist/!`);
}

prerender();
