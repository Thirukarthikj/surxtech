import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { businessServices } from '../data/solutionsData';
import { createServiceSchema, createFAQSchema } from '../utils/seoSchemas';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, MessageCircle, Phone, Mail, ChevronRight } from 'lucide-react';

export default function BusinessDetailPage({ defaultSlug }) {
  const location = useLocation();
  // Extract slug from URL path (e.g. /web-development -> web-development)
  const pathSlug = location.pathname.replace(/^\/|\/$/g, '');
  const slug = defaultSlug || pathSlug;

  const service = businessServices.find((s) => s.slug === slug) || businessServices[0];

  const serviceFaqs = service.faqs.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  const pageSchema = [
    createServiceSchema({
      name: service.title,
      description: service.metaDesc,
      url: service.path,
      serviceType: service.shortTitle,
    }),
    createFAQSchema(serviceFaqs),
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Business Solutions', item: '/business-solutions' },
    { name: service.shortTitle, item: service.path },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
        canonical={service.path}
        schema={pageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Navigation */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 16px' }}>
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
          <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/business-solutions" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Business Solutions</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--blue)', fontWeight: 600 }}>{service.shortTitle}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <span style={{ fontSize: '16px', marginRight: '6px' }}>{service.icon}</span> {service.primaryKeyword}
          </div>
          <h1 className="s-title" style={{ fontSize: 'clamp(32px, 4.8vw, 52px)', marginBottom: '18px', lineHeight: 1.15 }}>
            {service.title}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7', maxWidth: '780px', margin: '0 auto 28px' }}>
            {service.tagline}. {service.description}
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px' }}>
              Enquire About {service.shortTitle} <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/919342553805?text=Hi%20SurxTech!%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '14px 28px' }}
            >
              <MessageCircle size={16} color="#10b981" /> WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Audience */}
      <section className="section alt" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="s-label">Target Audience</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', marginBottom: '16px' }}>
              Who Is This Service Designed For?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '20px' }}>
              {service.targetAudience}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                <CheckCircle2 size={18} color="var(--blue)" /> Engineered specifically for your business workflow
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                <CheckCircle2 size={18} color="var(--blue)" /> High-speed performance with zero monthly vendor lock-in
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                <CheckCircle2 size={18} color="var(--blue)" /> Supported directly by our Nilakottai engineering team
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '18px' }}>
              Why Choose SURXTECH for {service.shortTitle}?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>
                <Zap size={20} color="var(--blue)" style={{ flexShrink: 0 }} />
                <span><strong>Modern Stack:</strong> Clean code built with contemporary industry frameworks.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>
                <ShieldCheck size={20} color="#10b981" style={{ flexShrink: 0 }} />
                <span><strong>Complete Code Ownership:</strong> You retain 100% of the intellectual property.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>
                <Layers size={20} color="#8b5cf6" style={{ flexShrink: 0 }} />
                <span><strong>SEO &amp; Mobile-Ready:</strong> Built-in search optimization and mobile responsive layouts.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Specifications</div>
            <h2 className="s-title">Key Features &amp; Capabilities</h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
              Comprehensive functionality engineered to scale effortlessly with your business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <CheckCircle2 size={22} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: 600, lineHeight: '1.4' }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables List */}
      <section className="section alt">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Handover Package</div>
            <h2 className="s-title">What You Receive (Deliverables)</h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
              Clear, transparent deliverables handed over upon project completion.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--blue)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Specific FAQs */}
      <FAQSection faqs={serviceFaqs} title={`${service.shortTitle} FAQs`} subtitle="Questions Answered" />

      {/* Internal Navigation to Other Business Services */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Explore More Services</div>
            <h2 className="s-title" style={{ fontSize: '26px' }}>Other Business Digital Solutions</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {businessServices
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={other.path}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '20px',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  className="hover-card"
                >
                  <div style={{ fontSize: '26px', marginBottom: '8px' }}>{other.icon}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>
                    {other.shortTitle}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Learn More <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to Build Your ${service.shortTitle}?`}
        subtitle="Contact SURXTECH in Nilakottai, Dindigul today for a free technical consultation and customized proposal."
      />
    </div>
  );
}

