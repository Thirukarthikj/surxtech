import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { genuineBlogArticles } from '../data/solutionsData';
import { createArticleSchema } from '../utils/seoSchemas';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, ChevronRight, Share2, Tag } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const article = genuineBlogArticles.find((a) => a.slug === slug) || genuineBlogArticles[0];

  const pageSchema = createArticleSchema({
    title: article.title,
    description: article.metaDesc,
    url: `/blog/${article.slug}`,
    datePublished: `${article.date}T09:00:00+05:30`,
    authorName: article.author,
  });

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: article.title, item: `/blog/${article.slug}` },
  ];

  // Helper to render markdown-like content blocks
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('### ')) {
        return (
          <h2 key={idx} style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, color: 'var(--ink)', marginTop: '32px', marginBottom: '14px', lineHeight: 1.3 }}>
            {trimmed.replace('### ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('#### ')) {
        return (
          <h3 key={idx} style={{ fontSize: '18px', fontWeight: 700, color: 'var(--blue)', marginTop: '24px', marginBottom: '10px' }}>
            {trimmed.replace('#### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('- ')) {
        return (
          <li key={idx} style={{ fontSize: '15.5px', color: 'var(--muted)', lineHeight: '1.7', marginLeft: '20px', marginBottom: '8px' }}>
            {trimmed.replace('- ', '')}
          </li>
        );
      }
      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ')) {
        return (
          <div key={idx} style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginTop: '18px', marginBottom: '6px' }}>
            {trimmed}
          </div>
        );
      }
      if (trimmed.length === 0) {
        return <div key={idx} style={{ height: '12px' }} />;
      }
      return (
        <p key={idx} style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '16px' }}>
          {trimmed}
        </p>
      );
    });
  };

  const otherArticles = genuineBlogArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title={article.metaTitle}
        description={article.metaDesc}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        schema={pageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 16px' }}>
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
          <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/blog" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--blue)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>
            {article.title}
          </span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="section" style={{ paddingTop: '16px', paddingBottom: '30px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 700,
                background: 'rgba(37,99,235,0.08)',
                color: 'var(--blue)',
              }}
            >
              {article.category}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {article.date}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.4vw, 48px)', fontWeight: 800, color: 'var(--ink)', lineHeight: '1.2', marginBottom: '20px' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '24px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue), var(--sky))', color: '#fff', display: 'grid', placeContent: 'center', fontWeight: 800 }}>
              JT
            </div>
            <div>
              <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--ink)' }}>{article.author}</div>
              <div style={{ fontSize: '12.5px', color: 'var(--muted)' }}>Founder &amp; Tech Lead · SURXTECH</div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="section" style={{ paddingTop: '0', paddingBottom: '50px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: 'clamp(24px, 4vw, 48px)', boxShadow: 'var(--shadow-sm)' }}>
            {renderContent(article.content)}
          </div>
        </div>
      </article>

      {/* Related Reading */}
      <section className="section alt" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '24px' }}>
            Recommended Articles
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {otherArticles.map((other) => (
              <Link
                key={other.slug}
                to={`/blog/${other.slug}`}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--blue)' }}>{other.category}</span>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', margin: '8px 0 10px', lineHeight: 1.35 }}>
                    {other.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                    {other.excerpt.slice(0, 100)}...
                  </p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '12.5px', fontWeight: 700, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Read Guide <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build or Consult With Our Engineers?"
        subtitle="Contact SURXTECH in Nilakottai, Dindigul today for software development or student project guidance."
      />
    </div>
  );
}
