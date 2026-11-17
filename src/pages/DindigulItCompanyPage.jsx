import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  organizationSchema,
  localBusinessSchema,
  createServiceSchema,
  createFAQSchema
} from '../utils/seoSchemas';
import {
  Globe,
  Smartphone,
  Code2,
  Cpu,
  ShoppingCart,
  Bot,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Building2,
  Layers,
  Sparkles,
  Zap,
  Users,
  Compass,
  FileCheck,
  Headphones
} from 'lucide-react';

export default function DindigulItCompanyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    message: ''
  });

  const faqs = [
    {
      q: 'Is SurxTech located in Dindigul?',
      a: 'SurxTech is headquartered in Nilakottai within Dindigul District, Tamil Nadu (PIN: 624208). We serve businesses throughout Dindigul city, Nilakottai, Batlagundu, Palani, Oddanchatram, Kodaikanal, Madurai, Theni, and across Tamil Nadu through in-person consultations and high-touch digital delivery.'
    },
    {
      q: 'What IT services does SurxTech offer for businesses in Dindigul?',
      a: 'We provide full-lifecycle software and digital solutions including custom website development, enterprise web application engineering, cross-platform Android & iOS mobile app development, bespoke business ERP and billing software, e-commerce storefronts, AI workflow automation, UI/UX prototyping, and technical SEO.'
    },
    {
      q: 'How much does website or software development cost in Dindigul?',
      a: 'Standard business websites generally range from ₹8,000 to ₹25,000 depending on features and page count. Full-scale e-commerce stores and custom software systems start from ₹25,000 to ₹75,000+. We provide fixed-price transparent quotes with zero hidden charges.'
    },
    {
      q: 'How long does it take to deliver a completed project?',
      a: 'Standard business websites are typically delivered within 7 to 14 business days. Complex custom software applications, web portals, and mobile apps typically require 3 to 6 weeks with regular milestone staging demonstrations.'
    },
    {
      q: 'Will our website appear on Google for Dindigul search queries?',
      a: 'Yes. Every project includes built-in technical SEO, mobile-first responsive architecture, Google Search Console indexing verification, XML sitemaps, and Schema.org structured data designed to rank for local Dindigul and Tamil Nadu searches.'
    },
    {
      q: 'Will our business own 100% of the developed source code?',
      a: 'Yes, absolutely. Upon final project handover, 100% legal ownership of all source code, database architectures, graphics, and deployment assets transfers entirely to your business with zero recurring software licensing lock-in.'
    },
    {
      q: 'Do you provide maintenance and technical support after launch?',
      a: 'Yes. Every software and website project includes post-launch technical warranty support. We also offer affordable Annual Maintenance Contracts (AMC) covering 24/7 uptime monitoring, database backups, security patches, and emergency assistance.'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'IT Company in Dindigul', item: '/it-company-in-dindigul' }
  ];

  const serviceSchema = createServiceSchema({
    name: 'IT Services & Software Development in Dindigul',
    description:
      'Professional IT services, custom software engineering, web application development, mobile apps, and AI solutions for businesses in Dindigul District, Tamil Nadu by SurxTech.',
    url: '/it-company-in-dindigul',
    serviceType: 'Information Technology Services'
  });

  const pageSchemas = [
    organizationSchema,
    localBusinessSchema,
    serviceSchema,
    createFAQSchema(faqs)
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi SurxTech! New inquiry from Dindigul IT page:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Requirement: ${formData.message}`;

    window.open(
      `https://wa.me/919342553805?text=${encodeURIComponent(text)}`,
      '_blank'
    );
    setFormSubmitted(true);
  };

  const servicesList = [
    {
      icon: <Globe size={28} color="var(--blue)" />,
      title: 'Website Development',
      link: '/website-development',
      desc: 'Fast, modern, mobile-first corporate websites and conversion-focused landing pages engineered with React and Next.js.'
    },
    {
      icon: <Layers size={28} color="#0ea5e9" />,
      title: 'Full Stack Web Applications',
      link: '/web-application-development',
      desc: 'Scalable cloud web portals, multi-tenant SaaS dashboards, and real-time database applications built on Node.js and PostgreSQL.'
    },
    {
      icon: <Smartphone size={28} color="#6366f1" />,
      title: 'Mobile App Development',
      link: '/mobile-app-development',
      desc: 'Cross-platform iOS and Android mobile apps engineered with Flutter, featuring offline sync and native performance.'
    },
    {
      icon: <Code2 size={28} color="#8b5cf6" />,
      title: 'Custom Software Development',
      link: '/custom-software-development',
      desc: 'Tailor-made ERP, clinic management, retail billing, and inventory systems designed exclusively around your business workflow.'
    },
    {
      icon: <ShoppingCart size={28} color="#ec4899" />,
      title: 'E-commerce Development',
      link: '/ecommerce-development',
      desc: 'High-converting online stores with Indian payment gateways (UPI, Cards), automated WhatsApp notifications, and stock control.'
    },
    {
      icon: <Bot size={28} color="#10b981" />,
      title: 'AI Automation Solutions',
      link: '/ai-automation',
      desc: 'Smart 24/7 WhatsApp AI chatbots, automated document data extraction, predictive inventory modeling, and workflow automation.'
    }
  ];

  const industries = [
    { name: 'Retail & Wholesale', desc: 'POS billing, inventory sync, e-commerce storefronts, and WhatsApp catalogs.' },
    { name: 'Healthcare & Clinics', desc: 'Patient management portals, appointment booking systems, and digital records.' },
    { name: 'Educational Institutions', desc: 'School & college management software, student databases, and admission portals.' },
    { name: 'Tours & Travels', desc: 'Fleet booking calculators, automated itinerary generators, and instant quote flows.' },
    { name: 'Manufacturing & Agro', desc: 'Production tracking, raw material supply management, and dispatch software.' },
    { name: 'Startups & SMEs', desc: 'MVP prototyping, SaaS platforms, high-speed corporate websites, and cloud migration.' }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '96px' }}>
      <SEO
        title="IT Company in Dindigul | SurxTech – Software & Web Development"
        description="Looking for an IT company in Dindigul? SurxTech provides professional website development, software development, mobile applications, AI automation and digital solutions."
        canonical="/it-company-in-dindigul"
        schema={pageSchemas}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Navigation */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 12px' }}>
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--muted)'
          }}
        >
          <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--blue)', fontWeight: 600 }}>
            IT Company in Dindigul
          </span>
        </nav>
      </div>

      {/* ── SECTION 1: HERO & INTRODUCTION TO SURXTECH ── */}
      <section className="section" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <MapPin size={14} style={{ marginRight: '4px' }} /> Software Development Partner in Dindigul District
          </div>

          <h1
            className="s-title"
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '1.15',
              marginBottom: '20px'
            }}
          >
            IT Company in Dindigul – <span className="highlight-text">SurxTech</span>
          </h1>

          <p
            style={{
              color: 'var(--muted)',
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: '1.7',
              maxWidth: '820px',
              margin: '0 auto 28px'
            }}
          >
            Welcome to <strong>SurxTech</strong> (SURXTECH). We are an independent modern IT startup and software engineering firm delivering dependable digital transformation solutions for growing businesses, retail enterprises, healthcare providers, and startups across Dindigul District and Tamil Nadu.
          </p>

          {/* Location Transparency Banner */}
          <div
            style={{
              background: 'rgba(37, 99, 235, 0.05)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              borderRadius: '16px',
              padding: '16px 24px',
              maxWidth: '880px',
              margin: '0 auto 32px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}
          >
            <Building2 size={22} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--ink)' }}>
              <strong>Our Location &amp; Regional Service Coverage:</strong> SurxTech is physically headquartered on <strong>Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208</strong>. While our primary development office is in Nilakottai, we actively serve clients throughout <strong>Dindigul city</strong>, <strong>Batlagundu</strong>, <strong>Palani</strong>, <strong>Oddanchatram</strong>, <strong>Kodaikanal</strong>, <strong>Madurai</strong>, <strong>Theni</strong>, and across the state of Tamil Nadu with direct developer consultations and full-scale engineering delivery.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#dindigul-contact" className="btn-primary" style={{ padding: '14px 28px' }}>
              Request a Free Consultation <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/919342553805?text=Hi%20SurxTech!%20I%20am%20looking%20for%20an%20IT%20company%20in%20Dindigul."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '14px 28px' }}
            >
              <MessageCircle size={16} color="#10b981" /> WhatsApp Us (+91 93425 53805)
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: IT SERVICES IN DINDIGUL OVERVIEW ── */}
      <section className="section alt" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>
              <Layers size={14} style={{ marginRight: '4px' }} /> Full-Lifecycle Capabilities
            </div>
            <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Professional IT Services in <span className="highlight-text">Dindigul</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '680px', margin: '12px auto 0', fontSize: '16px' }}>
              From initial architectural consulting and UI/UX prototyping to full-stack code implementation and cloud deployment, SurxTech provides end-to-end technology solutions built for commercial success.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {servicesList.map((svc, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease'
                }}
              >
                <div>
                  <div style={{ marginBottom: '16px' }}>{svc.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.65', marginBottom: '20px' }}>
                    {svc.desc}
                  </p>
                </div>
                <Link
                  to={svc.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--blue)',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none'
                  }}
                >
                  Explore Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WEBSITE DEVELOPMENT SERVICES ── */}
      <section className="section" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <div className="s-label">High-Performance Web Design</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', marginBottom: '18px' }}>
              Website Development Services in <span className="highlight-text">Dindigul</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '20px' }}>
              Your business website is your 24/7 digital storefront. At SurxTech, we do not use bloated, slow-loading site builders that crash or degrade over time. We engineer clean, hand-coded websites using <strong>React</strong> and <strong>Next.js</strong> that achieve 90+ Google PageSpeed scores and load in under 1.5 seconds.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Mobile-first responsive design adapted for smartphones, tablets, and desktops',
                'Built-in technical SEO with semantic HTML5, fast canonical URLs, and schema markup',
                'Instant WhatsApp lead generation routing and secure SSL encryption',
                'User-friendly admin dashboard for hassle-free content and image updates'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                  <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/website-development" className="btn-primary" style={{ display: 'inline-flex' }}>
              Explore Website Development <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
              What Every Website Includes:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
              {[
                { title: 'Sub-Second Load Speeds', detail: 'Optimized asset bundles, responsive images, and edge CDN delivery.' },
                { title: 'Local Google SEO Setup', detail: 'Configured for high visibility across Dindigul, Nilakottai, and Tamil Nadu searches.' },
                { title: '100% IP & Code Ownership', detail: 'Zero proprietary platform lock-in. All files and database assets belong to you.' },
                { title: '12-Month Technical Warranty', detail: 'Proactive support and maintenance to ensure zero unexpected downtime.' }
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '14px 18px', background: 'rgba(37,99,235,0.04)', borderRadius: '12px', borderLeft: '3px solid var(--blue)' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FULL STACK WEB APPLICATION DEVELOPMENT ── */}
      <section className="section alt" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: 'var(--shadow)'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--blue)', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Full Stack Architecture
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
              Modern Technology Stack
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {[
                { stack: 'React 18 / Next.js', role: 'Frontend UI' },
                { stack: 'Node.js / Express', role: 'API Services' },
                { stack: 'PostgreSQL / Mongo', role: 'Database' },
                { stack: 'Python / FastAPI', role: 'AI & Data Services' },
                { stack: 'Docker & AWS', role: 'Cloud Deployment' },
                { stack: 'JWT & OAuth2', role: 'Security & Auth' }
              ].map((t, idx) => (
                <div key={idx} style={{ padding: '12px 14px', background: 'rgba(0,0,0,0.02)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)' }}>{t.stack}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{t.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="s-label">Enterprise-Grade Architecture</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', marginBottom: '18px' }}>
              Full Stack Web Application Development
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '20px' }}>
              When your operational complexity requires more than a brochure website, SurxTech designs dynamic full-stack web applications tailored to your exact business workflow. We build multi-tenant SaaS products, customer relationship management (CRM) portals, supply chain trackers, and automated data reporting platforms.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Role-Based Access Control (RBAC) for Admin, Manager, and Staff accounts',
                'Asynchronous high-concurrency APIs capable of handling heavy concurrent traffic',
                'Automated PDF report and invoice generation with barcode/QR integration',
                'Comprehensive audit logging and database encryption conforming to industry security'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                  <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/web-application-development" className="btn-primary" style={{ display: 'inline-flex' }}>
              View Web Application Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MOBILE APPLICATION DEVELOPMENT ── */}
      <section className="section" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <div className="s-label">iOS &amp; Android Apps</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', marginBottom: '18px' }}>
              Mobile Application Development in <span className="highlight-text">Dindigul</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '20px' }}>
              Reach your customers directly on their smartphones. SurxTech develops cross-platform mobile apps using <strong>Flutter</strong> and <strong>React Native</strong> that deliver smooth 60fps native performance on both Android devices and iPhones with a single codebase.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Offline-first architecture with real-time cloud database synchronization',
                'Push notifications for promotions, order updates, and service reminders',
                'Integrated GPS location tracking, live route navigation, and delivery tracking',
                'Full end-to-end publishing assistance on the Google Play Store and Apple App Store'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                  <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/mobile-app-development" className="btn-primary" style={{ display: 'inline-flex' }}>
              Explore Mobile App Development <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              background: 'linear-gradient(145deg, var(--surface) 0%, rgba(37, 99, 235, 0.04) 100%)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
              Mobile App Solutions We Build:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {[
                { title: 'Customer Ordering & Booking Apps', desc: 'Allow customers to browse products, select appointment slots, and pay via UPI.' },
                { title: 'Field Staff & Delivery Partner Apps', desc: 'Live GPS route dispatching, digital proof-of-delivery signatures, and offline task entry.' },
                { title: 'Internal Business Management Apps', desc: 'Real-time sales tracking, stock entry, expense logging, and team communication.' }
              ].map((app, idx) => (
                <div key={idx} style={{ padding: '16px', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>{app.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.5' }}>{app.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CUSTOM SOFTWARE DEVELOPMENT ── */}
      <section className="section alt" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
              Why Bespoke Software Outperforms Generic Packages:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
              {[
                { title: 'No Per-User Recurring Fees', desc: 'Stop paying ₹500–₹2,000 per user every month. You own your software asset outright.' },
                { title: 'Exact Business Alignment', desc: 'Engineered specifically for your existing invoices, pricing tiers, and tax requirements.' },
                { title: 'Total Data Confidentiality', desc: 'Your commercial records, customer numbers, and margins remain private on your secure servers.' },
                { title: 'Effortless Scaling', desc: 'Add new branches, counters, or warehouse locations whenever your business expands.' }
              ].map((b, idx) => (
                <div key={idx} style={{ padding: '14px 18px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>{b.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="s-label">Tailored Enterprise Systems</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', marginBottom: '18px' }}>
              Custom Software Development in <span className="highlight-text">Dindigul</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '20px' }}>
              Every enterprise operates differently. Generic off-the-shelf software packages often force you to change your workflow or pay expensive ongoing license fees for features you never use. SurxTech engineers custom software tailored strictly to your operations.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Retail Point of Sale (POS) and automated GST billing systems',
                'Clinic, hospital, and diagnostic laboratory management software',
                'Warehouse inventory tracking with multi-location stock transfer handling',
                'Integrated accounting, receipt generation, and daily balance sheet reports'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                  <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/custom-software-development" className="btn-primary" style={{ display: 'inline-flex' }}>
              Explore Custom Software Solutions <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: E-COMMERCE DEVELOPMENT ── */}
      <section className="section" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <div className="s-label">Online Retail Solutions</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', marginBottom: '18px' }}>
              E-Commerce Website Development in <span className="highlight-text">Tamil Nadu</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '20px' }}>
              Expand your sales beyond Dindigul to customers across India. We build fast, secure e-commerce storefronts tailored for retail showrooms, textile houses, jewellery brands, grocery suppliers, and specialty manufacturers.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Seamless integration with Razorpay, PhonePe, and Cashfree supporting UPI, Cards, and Netbanking',
                'Automated customer order confirmations and tracking alerts sent via WhatsApp',
                'Mobile-optimized single-page checkout minimizing cart abandonment rates',
                'Inventory stock alerts, automated GST invoices, and coupon promotion managers'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                  <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/ecommerce-development" className="btn-primary" style={{ display: 'inline-flex' }}>
              Explore E-Commerce Development <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: 'var(--shadow)'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
              E-Commerce Capabilities:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {[
                'UPI / QR Fast Checkout',
                'WhatsApp Order Sync',
                'Multi-Variant Catalogs',
                'Automated GST Billing',
                'Real-Time Stock Alerts',
                'Daily Sales Analytics'
              ].map((cap, idx) => (
                <div key={idx} style={{ padding: '14px', background: 'rgba(37,99,235,0.04)', borderRadius: '12px', fontSize: '13.5px', fontWeight: 700, color: 'var(--ink)', textAlign: 'center' }}>
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: AI AUTOMATION SOLUTIONS ── */}
      <section className="section alt" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: 'var(--shadow)'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#10b981', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Smart Business Automation
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
              How Local Businesses Use AI Today:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {[
                { title: '24/7 WhatsApp AI Customer Support', desc: 'Answers questions, shares pricing, and collects leads while your staff sleeps.' },
                { title: 'Automated Invoice & Receipt OCR', desc: 'Scans paper bills and extracts totals directly into billing spreadsheets.' },
                { title: 'Predictive Inventory Forecasting', desc: 'Prevents stockouts by analyzing past purchase history and seasonality.' }
              ].map((ai, idx) => (
                <div key={idx} style={{ padding: '14px 18px', background: 'rgba(16,185,129,0.05)', borderRadius: '12px', borderLeft: '3px solid #10b981' }}>
                  <div style={{ fontWeight: 700, fontSize: '14.5px', color: 'var(--ink)' }}>{ai.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>{ai.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="s-label" style={{ color: '#059669' }}>Artificial Intelligence for Business</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', marginBottom: '18px' }}>
              AI Automation Solutions in <span className="highlight-text">Dindigul</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '20px' }}>
              Artificial Intelligence is no longer just for multinational tech giants. SurxTech helps small and medium companies in Dindigul and Tamil Nadu deploy practical AI tools that eliminate hours of repetitive manual data entry, streamline customer conversations, and cut operational overhead.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Automated 24/7 WhatsApp chat assistants operating in English and Tamil',
                'Optical character recognition (OCR) extracting text from scanned slips and invoices',
                'Private custom AI assistants trained strictly on your internal business product catalogs',
                'Automated lead qualification and CRM task synchronization'
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/ai-automation" className="btn-primary" style={{ display: 'inline-flex', background: '#059669', borderColor: '#059669' }}>
              Explore AI Automation Solutions <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: WHY CHOOSE SURXTECH? ── */}
      <section className="section" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} style={{ marginRight: '4px' }} /> The SurxTech Advantage
          </div>
          <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
            Why Choose SurxTech as Your <span className="highlight-text">Technology Partner?</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '720px', margin: '0 auto 44px' }}>
            We combine high-level software engineering expertise with accessible local accountability. Here is why businesses choose us:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              textAlign: 'left'
            }}
          >
            {[
              {
                icon: <FileCheck size={26} color="var(--blue)" />,
                title: '100% Code Ownership',
                desc: 'You receive full ownership of your source code, database architectures, and design files upon completion with zero vendor lock-in.'
              },
              {
                icon: <Users size={26} color="var(--blue)" />,
                title: 'Direct Tech Lead Access',
                desc: 'Speak directly with founder and tech lead J. Thirukarthik and senior developers — no endless middleman account managers.'
              },
              {
                icon: <Zap size={26} color="var(--blue)" />,
                title: 'Modern Architecture',
                desc: 'We engineer with React, Next.js, Node.js, and Python, ensuring sub-second page rendering and long-term maintainability.'
              },
              {
                icon: <Headphones size={26} color="var(--blue)" />,
                title: 'Dependable Local Support',
                desc: 'Based in Nilakottai, Dindigul District — we are easily reachable via phone, WhatsApp, and in-person consultations.'
              }
            ].map((adv, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '18px',
                  padding: '28px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ marginBottom: '14px' }}>{adv.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>
                  {adv.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: OUR PROJECTS AND PORTFOLIO ── */}
      <section className="section alt" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>
              <ShieldCheck size={14} style={{ marginRight: '4px' }} /> Verified Case Studies
            </div>
            <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Real Results for <span className="highlight-text">Real Businesses</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', margin: '12px auto 0', fontSize: '16px' }}>
              Explore how we have engineered production digital products that streamline customer operations and drive measurable revenue.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Travel &amp; Logistics Portal
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
                RIR Tours &amp; Travels
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '20px' }}>
                Engineered an interactive travel portal featuring instant vehicle rental rate calculators, destination packages, and one-click WhatsApp quotation dispatch.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{ padding: '4px 10px', background: 'rgba(37,99,235,0.08)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--blue)' }}>React</span>
                <span style={{ padding: '4px 10px', background: 'rgba(37,99,235,0.08)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--blue)' }}>WhatsApp API</span>
                <span style={{ padding: '4px 10px', background: 'rgba(37,99,235,0.08)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: 'var(--blue)' }}>Local SEO</span>
              </div>
              <Link to="/case-studies" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Read Detailed Case Study <ArrowRight size={14} />
              </Link>
            </div>

            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Digital Jewelry Catalogue
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
                Thangamalar Jewellers
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '20px' }}>
                Developed a responsive mobile jewellery catalogue with daily automated gold rate calculations, multi-category showcases, and instant customer in-store reservation requests.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{ padding: '4px 10px', background: 'rgba(245,158,11,0.08)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#d97706' }}>Full-Stack</span>
                <span style={{ padding: '4px 10px', background: 'rgba(245,158,11,0.08)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#d97706' }}>Live Rates API</span>
                <span style={{ padding: '4px 10px', background: 'rgba(245,158,11,0.08)', borderRadius: '6px', fontSize: '12px', fontWeight: 600, color: '#d97706' }}>Mobile UX</span>
              </div>
              <Link to="/case-studies" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Read Detailed Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: INDUSTRIES WE SERVE ── */}
      <section className="section" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>
              <Compass size={14} style={{ marginRight: '4px' }} /> Sector Expertise
            </div>
            <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              Industries We Serve in <span className="highlight-text">Dindigul &amp; Tamil Nadu</span>
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: '640px', margin: '12px auto 0', fontSize: '16px' }}>
              We understand the commercial realities of local trade, regional enterprises, and fast-moving tech startups.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {industries.map((ind, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>
                  {ind.name}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FREQUENTLY ASKED QUESTIONS ── */}
      <section className="section alt" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>
              <Headphones size={14} style={{ marginRight: '4px' }} /> Clear Answers
            </div>
            <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Frequently Asked <span className="highlight-text">Questions</span>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15.5px' }}>
              Common questions about partnering with SurxTech for your software development in Dindigul.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13: CONTACT AND CALL TO ACTION ── */}
      <section id="dindigul-contact" className="section" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '28px',
              padding: 'clamp(28px, 5vw, 56px)',
              boxShadow: 'var(--shadow)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="s-label">Let's Connect</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--ink)', lineHeight: '1.2', marginBottom: '16px' }}>
                Ready to Upgrade Your Business with a <span className="highlight-text">Dindigul IT Partner?</span>
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '28px' }}>
                Contact our engineering team today to discuss your website, mobile app, or custom software requirements. We provide free architectural consultation and clear project quotes within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={18} color="var(--blue)" />
                  <span style={{ fontSize: '14.5px', color: 'var(--ink)' }}>
                    Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} color="var(--blue)" />
                  <a href="tel:+919342553805" style={{ fontSize: '14.5px', color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>
                    +91 93425 53805
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} color="var(--blue)" />
                  <a href="mailto:surxtech@gmail.com" style={{ fontSize: '14.5px', color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>
                    surxtech@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              {formSubmitted ? (
                <div
                  style={{
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid #10b981',
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={40} color="#10b981" style={{ margin: '0 auto 12px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>
                    Inquiry Transmitted!
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.6' }}>
                    Thank you. We have opened WhatsApp to connect you directly with our tech lead. We look forward to discussing your project!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                      Your Name / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma / Sharma Retail"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid var(--border)',
                          background: 'var(--bg)',
                          color: 'var(--ink)',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid var(--border)',
                          background: 'var(--bg)',
                          color: 'var(--ink)',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                      Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Full Stack Web Applications">Full Stack Web Applications</option>
                      <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
                      <option value="Custom Software Development">Custom Software Development (ERP / Billing)</option>
                      <option value="E-Commerce Store Development">E-Commerce Store Development</option>
                      <option value="AI Automation Solutions">AI Automation & WhatsApp Bots</option>
                      <option value="SEO & Website Maintenance">SEO & Website Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                      Project Details / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your goals, budget, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        background: 'var(--bg)',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      justifyContent: 'center',
                      fontSize: '15px',
                      marginTop: '4px'
                    }}
                  >
                    Submit Inquiry &amp; Connect on WhatsApp <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
