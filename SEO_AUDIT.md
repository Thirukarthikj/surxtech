# SURXTECH — Technical SEO & Architecture Audit

**Target Website:** [https://www.surxtech.com](https://www.surxtech.com)  
**Company:** SURXTECH (IT Startup / Software Development Company)  
**Location:** Nilakottai, Dindigul, Tamil Nadu, India  
**Date of Audit:** November 2026  
**Auditor:** Senior Technical SEO Architect & Senior React Engineer  

---

## 1. Executive Summary

SURXTECH is an emerging technology startup positioned in Tamil Nadu, India, operating two distinct business pillars:
1. **Business Solutions:** Web development, e-commerce platforms, mobile applications, custom software, and AI solutions for small-to-medium businesses and enterprises.
2. **Student Project Solutions:** Technical guidance, final-year project development, documentation, and viva preparation for MCA, BCA, B.Sc CS, BE, and B.Tech students.

The current website is built as a single-page application (SPA) using React 18, Vite 6, and React Router 7. While visually modern with interactive components, it suffers from severe technical SEO deficiencies that hinder organic Google visibility:
- **Zero static pre-rendering:** Crawlers receive an empty HTML shell (`<div id="root"></div>`).
- **Missing indexation assets:** No `robots.txt` or `sitemap.xml`.
- **Missing metadata:** No page-specific titles, meta descriptions, canonical URLs, or structured data (JSON-LD).
- **Positioning mismatch:** Legacy content scattered references to a "creative agency" and "internship provider" rather than a software development & IT company.
- **Thin content & lack of landing pages:** High-intent queries (e.g., *"IT company in Dindigul"*, *"Final year project center in Tamil Nadu"*, *"MERN stack project guidance"*, *"Website development Dindigul"*) lack dedicated, keyword-targeted landing pages.

---

## 2. Technical SEO & Indexability Issues

### Issue 2.1: Client-Side Rendering (CSR) Indexing Risk
- **Finding:** The Vite build outputs a single `index.html` with no route-specific pre-rendering. While Googlebot executes JavaScript, CSR causes delayed indexing, rendering queue bottlenecks, and complete invisibility on non-JS search engines (Bing, DuckDuckGo, Yahoo) and social link preview scrapers (WhatsApp, LinkedIn, Twitter).
- **Remedy:** Implement build-time static pre-rendering (SSG) for all public landing pages to emit discrete `index.html` files per route with fully populated `<head>` tags and semantic DOM content.

### Issue 2.2: Missing `robots.txt`
- **Finding:** No `public/robots.txt` exists. Crawlers default to standard crawling with no sitemap hint or crawl delay management.
- **Remedy:** Create a compliant `robots.txt` explicitly allowing all public assets, specifying the canonical sitemap at `https://www.surxtech.com/sitemap.xml`.

### Issue 2.3: Missing `sitemap.xml`
- **Finding:** No XML sitemap exists to notify Google of indexable URLs, last modification timestamps, or content priorities.
- **Remedy:** Generate a valid XML sitemap including the homepage, all business service pages, student project pages, company pages, and blog articles.

### Issue 2.4: Absence of Canonical Links
- **Finding:** No `<link rel="canonical">` tags exist in `index.html` or through component state.
- **Remedy:** Implement self-referencing canonical tags standardizing on `https://www.surxtech.com/<path>/` across all routes.

### Issue 2.5: Absence of Schema Markup (JSON-LD)
- **Finding:** No structured data exists on the site.
- **Remedy:** Inject semantic JSON-LD schemas:
  - `Organization` & `WebSite` on the root.
  - `LocalBusiness` specifying Nilakottai / Dindigul coordinates, phone (`+91 9342553805`), email (`surxtech@gmail.com`), and service areas.
  - `Service` schema for individual service offerings.
  - `EducationalOccupationalProgram` / `Course` / `Service` for student technical guidance.
  - `BreadcrumbList` for hierarchical navigation.
  - `Article` for technical blog posts.

---

## 3. Brand & Positioning Strategy Realignment

### Current State
- The site previously featured copy identifying as a "creative agency studio" and "internship provider".

### Required Transformation
- **Core Identity:** Professional IT Startup & Software Development Company.
- **Target Audience A (Business Solutions):**
  - Small & Medium Businesses, Retailers, Healthcare/Clinics, Schools/Institutions, Travel, Food & Hospitality.
  - Core Services: Business Websites, E-Commerce, Custom Software, Mobile Apps (Android/iOS), AI Solutions, UI/UX, SEO, Maintenance.
- **Target Audience B (Student Project Solutions):**
  - MCA, BCA, B.Sc CS, BE, B.Tech students.
  - Academic & Technical Services: Final-year projects, Mini projects, Python/AI/ML, MERN stack, React, Full-stack apps, IEEE-aligned documentation, viva preparation, and mentoring.
  - Ethical Framing: Emphasize practical learning, code comprehension, and genuine technical mentorship.

---

## 4. Keyword Strategy & Landing Page Architecture

### 4.1 Keyword Clusters
| Cluster | Target Keywords | Target Route |
|---|---|---|
| **Primary IT & Software** | *IT company in Dindigul*, *Software development company in Dindigul*, *Web development company in Tamil Nadu*, *IT company in Nilakottai* | `/` (Homepage) |
| **Business Solutions Hub** | *Digital solutions for business*, *IT services company Tamil Nadu* | `/business-solutions` |
| **Web Development** | *Web development company in Dindigul*, *Business website development Tamil Nadu*, *Custom web app development* | `/web-development` |
| **E-Commerce Development** | *Ecommerce website development Tamil Nadu*, *Online store developer Dindigul* | `/ecommerce-development` |
| **Mobile App Development** | *Android application development Tamil Nadu*, *Mobile app development company Dindigul* | `/mobile-app-development` |
| **Custom Software** | *Custom software development Tamil Nadu*, *Business management software Dindigul* | `/custom-software-development` |
| **AI Solutions** | *AI development company in Tamil Nadu*, *AI solutions for small businesses* | `/ai-solutions` |
| **UI/UX Design** | *UI UX design services Tamil Nadu*, *Figma product design Dindigul* | `/ui-ux-design` |
| **SEO Services** | *SEO services in Dindigul*, *Local SEO company Tamil Nadu* | `/seo-services` |
| **Website Maintenance** | *Website maintenance services Tamil Nadu*, *Website security & AMC support* | `/website-maintenance` |
| **Student Projects Hub** | *Final year project development in Tamil Nadu*, *College project center Dindigul* | `/student-projects` |
| **MCA Projects** | *MCA final year projects Tamil Nadu*, *MCA IEEE projects with source code* | `/mca-projects` |
| **BCA Projects** | *BCA final year projects*, *BCA mini project guidance* | `/bca-projects` |
| **Engineering Projects** | *Engineering final year projects*, *BE BTech CSE IT projects Dindigul* | `/engineering-projects` |
| **Python Projects** | *Python projects for college students*, *Python data science mini projects* | `/python-projects` |
| **MERN Stack Projects** | *MERN stack final year projects*, *React Node MongoDB projects for students* | `/mern-stack-projects` |
| **AI/ML Projects** | *AI and machine learning student projects*, *Deep learning IEEE project guidance* | `/ai-ml-projects` |
| **React Projects** | *React projects for students*, *Frontend web development college projects* | `/react-projects` |

---

## 5. Local SEO & Geographic Authority

- **Headquarters:** Nilakottai, Dindigul District, Tamil Nadu – 624208.
- **Target Geographies:** Nilakottai, Dindigul, Batlagundu, Madurai, Theni, Coimbatore, Tiruchirappalli, Chennai.
- **Local Signal Checklist:**
  - Standardized NAP (Name, Address, Phone): SURXTECH, Nilakottai, Dindigul, Tamil Nadu | +91 9342553805.
  - Embedded Google Map with directions link.
  - Geo-coordinates schema markup (`geo: { latitude: 10.1601, longitude: 77.8631 }`).
  - Google Business Profile setup instructions.

---

## 6. Implementation Roadmap

1. **Phase 2 (Technical SEO):** Build SEO Component, inject dynamic meta & schema, create `robots.txt`, `sitemap.xml`, and configure static HTML pre-rendering.
2. **Phase 3 (Homepage Optimization):** Realign homepage copy to dual customer segments (Business & Students), implement optimized H1, H2, and H3 structure.
3. **Phase 4 (New Landing Pages):** Implement dedicated Business Solutions (`/business-solutions`, `/web-development`, etc.) and Student Project Pages (`/student-projects`, `/mca-projects`, etc.).
4. **Phase 5 (Portfolio & Blog Architecture):** Build case studies with verified genuine client projects (RIR Tours & Travels, Thangamalar Jewellers) and technical articles.
5. **Phase 6 (Local SEO & Legal Pages):** Add Privacy Policy, Terms & Conditions, and complete Local Business Schema.
6. **Phase 7 (Verification & Testing):** Run `npm run build`, pre-render HTML verification, test all routes in browser, and check Core Web Vitals.
7. **Phase 8 (Final Report):** Publish `SEO_IMPLEMENTATION_REPORT.md`.

