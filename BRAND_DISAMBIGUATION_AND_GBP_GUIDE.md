# SURXTECH — Brand Identity Disambiguation & Local SEO Playbook

## 1. Executive Summary: Resolving the "Sur Tech" Kolkata Confusion

### The Root Cause
When searching for **"Surxtech"** on Google, users were previously presented with:
> *"Showing results for Sur Tech. Search instead for Surxtech."*
> (Google displayed **Dr. Sudhir Chandra Sur Institute of Technology**, an established engineering college in Kolkata, West Bengal).

This confusion occurred due to two primary algorithmic factors:
1. **Phonetic & String Edit Distance**: Google's search query spellchecker (`Did You Mean?`) treats an unfamiliar brand token like `Surxtech` as a likely typo for the high-volume entity `Sur Tech`.
2. **False Semantic Topic Clustering**: Because the website previously targeted academic student queries (*"MCA Final Year Projects"*, *"BCA Projects"*, *"Engineering Projects"*, *"College Project Center"*), Google's NLP models categorized the domain into the **"Higher Education / Engineering Colleges"** semantic cluster. Concurrently, Google saw `Sur Tech` (an engineering college) with thousands of student inquiries and assumed the user made a typo while searching for that college.

---

## 2. Immediate Code & Structural Fixes Implemented

1. **Complete Removal of College Project & Internship Content**:
   - The false educational cluster has been completely eliminated from the codebase.
   - All legacy student project routes now issue a clean redirect to `/services`.
   - The sitemap has been purged down to **30 canonical, business-focused URLs** (no student URLs).
   - All blog posts have been repositioned into high-authority software engineering and technology strategy guides for SMEs and enterprises.

2. **Authoritative JSON-LD Entity Schema (Disambiguation Node)**:
   - The Organization schema now explicitly defines `@id: "https://www.surxtech.com/#organization"` with:
     - `name: "SURXTECH"`
     - `legalName: "SURXTECH"`
     - `alternateName: ["SurxTech", "SURXTECH Software Solutions", "SURXTECH IT Company"]`
     - `disambiguatingDescription: "SURXTECH is an independent IT startup and software development company founded by J. Thirukarthik in Nilakottai, Dindigul District, Tamil Nadu, India (domain: surxtech.com). It is not affiliated with Sur Tech, JIS Group, or any educational institutions in Kolkata."`
     - `brand: { "@type": "Brand", "@id": "https://www.surxtech.com/#brand", "name": "SURXTECH" }`
     - `founder: { "@type": "Person", "name": "J. Thirukarthik", "url": "https://thiruportfolio-navy.vercel.app/" }`
     - `sameAs: ["https://instagram.com/surxtech", "https://linkedin.com/company/surxtech", "https://github.com/Thirukarthikj", "https://thiruportfolio-navy.vercel.app/"]`

3. **On-Page Brand Disambiguation & Anchor Content**:
   - Explicit brand declarations on the **About Page** (`/about`) and **Footer**:
     > *"SURXTECH™ is an independent technology startup and software development company founded by J. Thirukarthik, headquartered in Nilakottai, Dindigul District, Tamil Nadu — 624208, India. Official domain: surxtech.com."*

4. **UI & Responsive Layout Optimization**:
   - Restored the balanced **4-column desktop footer layout** with centered `max-width: 1280px` constraint, eliminating the squished "mobile screen view" appearance on wide monitors.
   - Maintained Thirukarthik's portfolio URL (`https://thiruportfolio-navy.vercel.app/`) and the team update badge.

---

## 3. Google Business Profile (GBP) Step-by-Step Setup

Creating an official Google Business Profile is the fastest and most effective way to force Google's Knowledge Graph to register **SURXTECH** as an independent verified business entity.

### Step 1: Create Profile at `business.google.com`
- **Business Name**: `SURXTECH` *(Do NOT add keyword stuffing like "SURXTECH Best Web Design" — keep it strictly "SURXTECH")*
- **Primary Category**: **Software Company**
- **Secondary Categories**:
  - Website Designer
  - Computer Support and Services
  - Internet Marketing Service

### Step 2: Location & Address
- **Physical Address**:
  - Street Address: `Main Road`
  - City / Town: `Nilakottai`
  - District: `Dindigul District`
  - State: `Tamil Nadu`
  - PIN Code: `624208`
  - Country: `India`
- **Service Areas (Add all target geographies)**:
  - Nilakottai
  - Dindigul
  - Batlagundu
  - Madurai
  - Theni
  - Tamil Nadu

### Step 3: Contact & Links
- **Phone**: `+91 93425 53805`
- **Website URL**: `https://www.surxtech.com` *(Must match the exact canonical domain)*
- **Hours**: Monday – Saturday, 9:00 AM – 7:00 PM

### Step 4: Verification & Photos
- Complete verification via video/postcard as required by Google.
- Upload:
  - Official high-res logo (`logo.png`).
  - Office exterior/interior photos or workspace photos in Nilakottai.
  - Team photos featuring J. Thirukarthik and the engineering team.

---

## 4. Google Search Console (GSC) Action Plan

### 1. Resubmit Sitemap
1. Open [Google Search Console](https://search.google.com/search-console).
2. Navigate to **Sitemaps** on the left menu.
3. Submit: `https://www.surxtech.com/sitemap.xml`.
4. Verify that Google discovers all **30 valid canonical URLs**.

### 2. URL Inspection & Priority Recrawl Request
1. In the top inspection bar, enter `https://www.surxtech.com/`.
2. Click **Test Live URL** to confirm that Google's crawler:
   - Receives **HTTP 200**.
   - Renders the pre-rendered HTML containing the `SURXTECH` H1, company overview, and Organization JSON-LD.
   - Detects no crawler blocks.
3. Click **Request Indexing**.

---

## 5. Knowledge Graph Entity Citation Checklist

To permanently sever any association with "Sur Tech" Kolkata and establish SURXTECH in Google Knowledge Graph:

| Platform | Profile URL / Action | Status / Requirement |
| :--- | :--- | :--- |
| **LinkedIn** | `linkedin.com/company/surxtech` | Complete company overview, set website to `surxtech.com`, Nilakottai address |
| **Crunchbase** | `crunchbase.com/organization/surxtech` | Create startup profile for SURXTECH (Founder: J. Thirukarthik) |
| **GitHub** | `github.com/surxtech` or `github.com/Thirukarthikj` | Add `https://www.surxtech.com` in profile bio |
| **Instagram** | `instagram.com/surxtech` | Bio: "Official Instagram for SURXTECH — IT Startup & Software Company, Nilakottai, Dindigul. https://www.surxtech.com" |
| **JustDial** | Nilakottai / Dindigul listing | Exact NAP: SURXTECH, Main Road, Nilakottai, 624208 |
| **IndiaMART** | Software Services listing | Consistent brand name: SURXTECH |
| **Google Maps** | Google Business Profile | Primary Category: Software Company |

*Once 5–10 consistent external co-citations pair "SURXTECH" with "Nilakottai, Dindigul, Software Company", Google's Knowledge Graph algorithm will auto-generate an entity Knowledge Panel for the search query `"Surxtech"` and cease showing the Kolkata college.*
