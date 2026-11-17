import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { genuineBlogArticles } from '../data/solutionsData';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Technology & Software Engineering Blog | SURXTECH Dindigul"
        description="Practical software architecture insights, web development best practices, and IT strategy guides by SURXTECH in Tamil Nadu."
        canonical="/blog"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <BookOpen size={14} style={{ marginRight: '4px' }} /> Engineering Insights &amp; Guides
        </div>
        <h1 className="s-title" style={{ fontSize: 'clamp(32px, 5vw, 50px)', marginBottom: '16px' }}>
          SURXTECH <span className="highlight-text">Engineering Blog</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16.5px', maxWidth: '720px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          Practical articles written by our software engineers on web architecture, cloud systems, and small business digital growth in Tamil Nadu.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="section alt" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {genuineBlogArticles.map((art) => (
            <article
              key={art.slug}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      background: 'rgba(37,99,235,0.08)',
                      color: 'var(--blue)',
                    }}
                  >
                    {art.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--muted)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {art.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {art.readTime}
                    </span>
                  </div>
                </div>

                <h2 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px', lineHeight: '1.35' }}>
                  <Link to={`/blog/${art.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {art.title}
                  </Link>
                </h2>

                <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                  {art.excerpt}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12.5px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <User size={13} /> {art.author}
                </span>
                <Link
                  to={`/blog/${art.slug}`}
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Looking for Expert Engineering Support?"
        subtitle="Connect with our software team in Nilakottai, Dindigul today to build your custom web application or business software system."
      />
    </div>
  );
}

