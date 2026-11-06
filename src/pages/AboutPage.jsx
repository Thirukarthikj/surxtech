import React from 'react';
import { Link } from 'react-router-dom';
import WhySurxTech from '../components/WhySurxTech';
import TechStack from '../components/TechStack';
import CTASection from '../components/CTASection';
import { Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <WhySurxTech />
      <TechStack />

      {/* SEE OUR TEAM BANNER ON ABOUT PAGE */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="about-team-banner">
          <div className="hub-card-icon" style={{ margin: '0 auto 16px' }}>
            <Users size={32} color="var(--blue)" />
          </div>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            The People Behind SurxTech
          </div>
          <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '14px' }}>
            Meet Our <span className="highlight-text">Expert Team</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 28px', fontSize: '15px', lineHeight: '1.7' }}>
            Explore full profiles, experience records, skills, and contact channels for our developers, designers, backend engineers, and media creators.
          </p>
          <Link to="/team" className="btn-primary" style={{ display: 'inline-flex' }}>
            See Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
