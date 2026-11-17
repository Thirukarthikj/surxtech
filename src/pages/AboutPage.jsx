import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import WhySurxTech from '../components/WhySurxTech';
import TechStack from '../components/TechStack';
import CTASection from '../components/CTASection';
import { Users, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Code2 } from 'lucide-react';

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="About SURXTECH | IT Startup & Software Development Company in Dindigul"
        description="Learn about SURXTECH, an IT startup in Nilakottai, Dindigul, Tamil Nadu. We engineer high-performance web applications, custom software, mobile apps, and AI solutions for growing businesses."
        canonical="/about"
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <MapPin size={14} style={{ marginRight: '4px' }} /> Rooted in Tamil Nadu
        </div>
        <h1 className="s-title" style={{ fontSize: 'clamp(32px, 5vw, 50px)', marginBottom: '16px' }}>
          Engineering Modern Technology for <span className="highlight-text">Growing Businesses</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16.5px', maxWidth: '760px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          SURXTECH is an IT startup headquartered in <strong>Nilakottai, Dindigul District, Tamil Nadu</strong>. We are dedicated to delivering high-performance digital products, scalable web applications, custom enterprise systems, and intelligent automation for businesses across Tamil Nadu and beyond.
        </p>
      </section>

      {/* Mission & Philosophy */}
      <section className="section alt" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
              Our Mission
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7' }}>
              To empower startups, retail enterprises, healthcare providers, educational institutions, and growing businesses with enterprise-grade web applications, custom management software, e-commerce stores, and AI automation that eliminate manual inefficiencies and fuel commercial growth.
            </p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '32px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
              Our Engineering Philosophy
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7' }}>
              We believe in writing clean, scalable code with zero proprietary vendor lock-in. Every client receives 100% full ownership of their source code, database architectures, and digital assets, paired with transparent collaboration and reliable local support.
            </p>
          </div>
        </div>
      </section>

      <WhySurxTech />
      <TechStack />

      {/* Team CTA */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="about-team-banner">
          <div className="hub-card-icon" style={{ margin: '0 auto 16px' }}>
            <Users size={32} color="var(--blue)" />
          </div>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            The People Behind SurxTech
          </div>
          <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '14px' }}>
            Meet Our <span className="highlight-text">Engineering Team</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '560px', margin: '0 auto 28px', fontSize: '15px', lineHeight: '1.7' }}>
            Meet our tech leads, full stack developers, UI/UX designers, and cloud architects who turn your business vision into production-ready software.
          </p>
          <Link to="/team" className="btn-primary" style={{ display: 'inline-flex' }}>
            Meet The Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTASection
        title="Ready to Work with an IT Company That Delivers?"
        subtitle="Contact our Nilakottai engineering team today to discuss your next web, mobile, or enterprise software project."
      />
    </div>
  );
}
