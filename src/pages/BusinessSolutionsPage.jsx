import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { businessServices } from '../data/solutionsData';
import { createServiceSchema, createFAQSchema } from '../utils/seoSchemas';
import { Briefcase, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Server, MapPin } from 'lucide-react';

export default function BusinessSolutionsPage() {
  const pageFaqs = [
    {
      question: 'Which businesses in Tamil Nadu benefit most from SURXTECH solutions?',
      answer:
        'We work across diverse industries including retail merchants, jewellery showrooms, healthcare clinics and hospitals, schools and colleges, travel agencies, logistics operators, manufacturing units, and technology startups.',
    },
    {
      question: 'How do you ensure our business website or software loads fast?',
      answer:
        'We build on lightweight, modern frameworks like React and Next.js, optimize images with next-gen formats, minimize script payloads, and deploy via global Content Delivery Networks (CDNs) with SSL encryption.',
    },
    {
      question: 'What is the payment milestone structure for business projects?',
      answer:
        'We divide project investments into clear milestones: a 50% mobilization deposit at kickoff, and 50% upon final staging review and launch signoff. For larger enterprise builds, we support 3-part or 4-part agile milestone sprints.',
    },
  ];

  const pageSchema = [
    createServiceSchema({
      name: 'Business Digital Solutions & Software Development',
      description:
        'Comprehensive digital development solutions for businesses in Tamil Nadu: web development, e-commerce, custom software, mobile apps, and AI automation by SURXTECH.',
      url: '/business-solutions',
    }),
    createFAQSchema(pageFaqs),
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Business Solutions', item: '/business-solutions' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Business Solutions & Custom Software Development | SURXTECH Dindigul"
        description="Transform your business with SURXTECH. High-performance web development, e-commerce, Android apps, custom business software, and AI solutions in Tamil Nadu."
        canonical="/business-solutions"
        schema={pageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <Briefcase size={14} style={{ marginRight: '4px' }} /> Enterprise &amp; SME Technology Partner
        </div>
        <h1 className="s-title" style={{ fontSize: 'clamp(32px, 5vw, 50px)', marginBottom: '16px' }}>
          Digital Development Solutions for <span className="highlight-text">Growing Businesses</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16.5px', maxWidth: '740px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          SURXTECH designs, engineers, and maintains high-impact digital systems for small-to-medium businesses, startups, and institutions across <strong>Nilakottai, Dindigul, and Tamil Nadu</strong>.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">
            Discuss Your Business Project <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/919342553805?text=Hi%20SurxTech!%20I%20would%20like%20to%20discuss%20a%20business%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            ⚡ WhatsApp Quick Consultation
          </a>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="section alt" style={{ padding: '40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'var(--surface)', padding: '28px', borderRadius: '20px', border: '1px solid var(--border)' }}>
            <Zap size={28} color="var(--blue)" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--ink)' }}>Blazing-Fast Speed</h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Sub-second load times engineered with modern React, Next.js, and edge CDN deployments that reduce bounce rates and boost Google rankings.
            </p>
          </div>
          <div style={{ background: 'var(--surface)', padding: '28px', borderRadius: '20px', border: '1px solid var(--border)' }}>
            <ShieldCheck size={28} color="#10b981" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--ink)' }}>100% Code Ownership</h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>
              You own all intellectual property, source code, database architectures, and Figma assets upon project completion. Zero vendor lock-in.
            </p>
          </div>
          <div style={{ background: 'var(--surface)', padding: '28px', borderRadius: '20px', border: '1px solid var(--border)' }}>
            <Server size={28} color="#8b5cf6" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: 'var(--ink)' }}>Dedicated Local Support</h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>
              Direct access to senior tech leads and software engineers based in Nilakottai and Dindigul for ongoing maintenance, updates, and assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Our Core Services</div>
          <h2 className="s-title">Explore Specialized Business Solutions</h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
            Click on any service below to explore features, timelines, deliverables, and technical architecture.
          </p>
        </div>

        <div className="home-hub-grid">
          {businessServices.map((svc) => (
            <Link key={svc.slug} to={svc.path} className="home-hub-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <div className="hub-card-icon" style={{ fontSize: '30px' }}>{svc.icon}</div>
                <span className="hub-card-badge">Explore Service</span>
              </div>
              <h3 className="hub-card-title">{svc.title}</h3>
              <div className="hub-card-sub" style={{ color: 'var(--blue)', fontWeight: 600 }}>{svc.primaryKeyword}</div>
              <p className="hub-card-desc">{svc.description}</p>
              <div className="hub-card-btn">
                <span>View Full Specifications</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Target Business Sectors */}
      <section className="section alt">
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Industries We Serve</div>
          <h2 className="s-title">Digital Solutions Tailored for Every Sector</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '36px' }}>
            {[
              'Retail & Supermarkets',
              'Jewellery & Gold Showrooms',
              'Hospitals & Healthcare Clinics',
              'Educational Institutions & Schools',
              'Tour & Travel Operators',
              'Hotels, Cafes & Restaurants',
              'Logistics & Fleet Transporters',
              'Technology & B2B Startups'
            ].map((ind, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '18px 20px', borderRadius: '14px', border: '1px solid var(--border)', fontSize: '14px', fontWeight: 600, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--blue)" /> {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={pageFaqs} title="Business Solutions FAQ" subtitle="Got Questions?" />

      {/* CTA */}
      <CTASection
        title="Ready to Build a Fast, Modern Business System?"
        subtitle="Contact our Nilakottai engineering office today for a free project scope review, architecture roadmap, and transparent quote."
      />
    </div>
  );
}
