import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import TextType from './TextType';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>

      <div className="hero-eyebrow">
        IT Startup · Nilakottai, Dindigul, Tamil Nadu
      </div>

      <h1 className="hero-h1" style={{ fontSize: 'clamp(32px, 5.2vw, 62px)', lineHeight: '1.15', marginBottom: '20px' }}>
        Building Digital Solutions for <span className="highlight-text">Growing Businesses</span>.
      </h1>

      <p className="hero-sub" style={{ fontSize: 'clamp(16px, 2vw, 19px)', maxWidth: '780px', lineHeight: '1.6', marginBottom: '32px' }}>
        <strong>Your Technology Partner</strong> for Web Development, Custom Software, Mobile Apps, AI Applications, and Digital Transformation in Tamil Nadu.
      </p>

      <div className="hero-btns" style={{ flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
        <Link to="/services" className="btn-primary" style={{ padding: '14px 26px' }}>
          Explore Our Services <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn-outline" style={{ padding: '14px 26px' }}>
          Get In Touch <ArrowRight size={16} />
        </Link>
      </div>

      <div className="hero-badge-strip">
        <div>
          <div className="hb-val">100%</div>
          <div className="hb-label">Client Satisfaction</div>
        </div>
        <div className="hb-div"></div>
        <div>
          <div className="hb-val">24/7</div>
          <div className="hb-label">Support Available</div>
        </div>
        <div className="hb-div"></div>
        <div>
          <div className="hb-val">Fast</div>
          <div className="hb-label">Turnaround</div>
        </div>
      </div>
    </section>
  );
}
