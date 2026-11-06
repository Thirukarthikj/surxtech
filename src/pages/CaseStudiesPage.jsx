import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { genuineCaseStudies } from '../data/solutionsData';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Case Studies', item: '/case-studies' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Client Case Studies & Verified Projects | SURXTECH Dindigul"
        description="Explore real-world software and web development case studies delivered by SURXTECH in Tamil Nadu, featuring RIR Tours & Travels and Thangamalar Jewellers."
        canonical="/case-studies"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <Sparkles size={14} style={{ marginRight: '4px' }} /> Verified Engineering Outcomes
        </div>
        <h1 className="s-title" style={{ fontSize: 'clamp(32px, 5vw, 50px)', marginBottom: '16px' }}>
          Client Case Studies &amp; <span className="highlight-text">Proven Results</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16.5px', maxWidth: '740px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          Real software platforms, business websites, and digital systems architected by SURXTECH. Each study details the genuine business problem, technological solution, and verified results.
        </p>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="section alt" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {genuineCaseStudies.map((cs, idx) => (
            <article
              key={cs.id}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <span
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    background: 'rgba(37,99,235,0.08)',
                    color: 'var(--blue)',
                  }}
                >
                  {cs.category}
                </span>
                <div style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> {cs.location}
                </div>
              </div>

              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 32px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '18px', lineHeight: 1.25 }}>
                {cs.title}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '28px' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.15)', borderRadius: '16px', padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#dc2626', marginBottom: '8px' }}>
                    The Business Problem
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: '1.6', margin: 0 }}>
                    {cs.problem}
                  </p>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.04)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '16px', padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#059669', marginBottom: '8px' }}>
                    The SURXTECH Solution
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: '1.6', margin: 0 }}>
                    {cs.solution}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
                  Measured &amp; Verified Results:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
                  {cs.results.map((res, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(37,99,235,0.04)',
                        border: '1px solid rgba(37,99,235,0.12)',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                      }}
                    >
                      <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--muted)', marginRight: '4px' }}>
                    Tech Stack:
                  </span>
                  {cs.technologies.map((t, idx) => (
                    <span key={idx} className="b-tag" style={{ fontSize: '12px' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
                  Request Similar Solution <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want Results Like These for Your Business?"
        subtitle="Schedule a free technical consultation with our tech leads in Nilakottai, Dindigul today."
      />
    </div>
  );
}
