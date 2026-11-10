import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MarqueeBanner from '../components/MarqueeBanner';
import TechStack from '../components/TechStack';
import WhySurxTech from '../components/WhySurxTech';
import ProcessSection from '../components/ProcessSection';
import FAQSection, { defaultFaqs } from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema, localBusinessSchema, createFAQSchema } from '../utils/seoSchemas';
import { businessServices, genuineCaseStudies } from '../data/solutionsData';
import { ArrowRight, CheckCircle2, ShieldCheck, Code2, Briefcase, Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export default function HomePage() {
  const homeSchemas = [
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    createFAQSchema(defaultFaqs),
  ];

  return (
    <div className="page-wrapper">
      <SEO
        title="SURXTECH | IT Company & Software Development in Dindigul"
        description="SURXTECH provides website development, mobile apps, AI solutions and custom software for businesses across Nilakottai, Dindigul, and Tamil Nadu."
        canonical="/"
        schema={homeSchemas}
      />

      <Hero />
      <MarqueeBanner />

      {/* ── COMPANY INTRODUCTION SECTION ── */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <MapPin size={14} style={{ marginRight: '4px' }} /> Technology Partner in Tamil Nadu
          </div>
          <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '18px' }}>
            IT Company &amp; Software Development in <span className="highlight-text">Dindigul</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16.5px', lineHeight: '1.8', marginBottom: '24px' }}>
            Headquartered in <strong>Nilakottai, Dindigul District</strong>, <strong>SURXTECH</strong> is a modern software development startup dedicated to engineering robust, high-performance <strong>digital solutions for businesses</strong> across Tamil Nadu. We partner with startups, retail shops, clinics, educational institutions, and growing enterprises to build custom web, mobile, and cloud software systems.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--ink)' }}>
              <CheckCircle2 size={18} color="var(--blue)" /> 100% Source Code Ownership
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--ink)' }}>
              <CheckCircle2 size={18} color="var(--blue)" /> Modern Tech: React, Node, Python, Flutter
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--ink)' }}>
              <CheckCircle2 size={18} color="var(--blue)" /> Nilakottai &amp; Dindigul Local Engineering Team
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE DIGITAL SOLUTIONS ── */}
      <section className="section alt" id="services-overview">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '44px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="s-label">
              <Briefcase size={14} style={{ marginRight: '4px' }} /> Enterprise &amp; SME Technology Solutions
            </div>
            <h2 className="s-title">
              Digital Solutions for <span className="highlight-text">Growing Businesses</span>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '15.5px', maxWidth: '640px' }}>
              Engineered for small and medium businesses, startups, retailers, clinics, institutions, and service providers seeking modern web, mobile, and custom software systems.
            </p>
          </div>
          <Link to="/services" className="btn-primary" style={{ padding: '12px 24px' }}>
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="home-hub-grid">
          {businessServices.map((svc) => (
            <Link key={svc.slug} to={svc.path} className="home-hub-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <div className="hub-card-icon" style={{ fontSize: '28px' }}>{svc.icon}</div>
                <span className="hub-card-badge">Business Solution</span>
              </div>
              <h3 className="hub-card-title">{svc.shortTitle}</h3>
              <div className="hub-card-sub" style={{ color: 'var(--blue)', fontWeight: 600 }}>{svc.primaryKeyword}</div>
              <p className="hub-card-desc">{svc.description.slice(0, 130)}...</p>
              <div className="hub-card-btn">
                <span>Explore {svc.shortTitle}</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGIES & ENGINEERING EXPERTISE ── */}
      <TechStack />

      {/* ── RECENT CLIENT WORK & CASE STUDIES PREVIEW ── */}
      <section className="section alt">
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} style={{ marginRight: '4px' }} /> Proven Results
          </div>
          <h2 className="s-title">
            Featured <span className="highlight-text">Case Studies</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '10px', fontSize: '15.5px', maxWidth: '600px', margin: '10px auto 0' }}>
            Real projects delivered with verified business impact, performance engineering, and measurable client results.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          {genuineCaseStudies.map((cs) => (
            <div
              key={cs.id}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    background: 'rgba(37,99,235,0.08)',
                    color: 'var(--blue)',
                    marginBottom: '14px',
                  }}
                >
                  {cs.category}
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {cs.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '18px' }}>
                  <strong>Client Challenge:</strong> {cs.problem}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Key Outcomes:
                  </div>
                  {cs.results.map((res, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>
                      <CheckCircle2 size={15} color="#10b981" /> {res}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {cs.tags.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="b-tag" style={{ fontSize: '11px', padding: '3px 8px' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/case-studies" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Read Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE SURXTECH ── */}
      <WhySurxTech />

      {/* ── 4-STAGE DEVELOPMENT PROCESS ── */}
      <ProcessSection />

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <FAQSection
        faqs={defaultFaqs}
        title="Frequently Asked Questions"
        subtitle="Got Questions?"
      />

      {/* ── CTA SECTION ── */}
      <CTASection
        title="Ready to Transform Your Business With High-Performance Software?"
        subtitle="Need a modern business website, custom software application, mobile app, or AI automation? Connect with our engineering team in Nilakottai, Dindigul."
      />
    </div>
  );
}
