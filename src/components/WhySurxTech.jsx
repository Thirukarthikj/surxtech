import React from 'react';

const whyItems = [
  {
    icon: '⚡',
    title: 'Rapid Engineering & Delivery',
    desc: 'We build quickly with clean architecture without cutting corners. Your business launch and digital roadmap are treated with absolute commitment.',
  },
  {
    icon: '🔒',
    title: '100% Code & Asset Ownership',
    desc: 'You receive complete source code, database schemas, and design assets upon handover. Zero proprietary vendor lock-in.',
  },
  {
    icon: '🎯',
    title: 'Dedicated Engineering Support',
    desc: 'Direct communication with the engineers building your solution. Continuous post-deployment maintenance, SLA guarantees, and security updates.',
  },
  {
    icon: '📍',
    title: 'Local Engineering Office',
    desc: 'Headquartered in Nilakottai, Dindigul District — offering direct developer access, transparent pricing, and 24/7 technical support.',
  },
];

export default function WhySurxTech() {
  return (
    <section className="section" id="about">
      <div className="split-grid">
        <div className="split-visual">
          <div className="split-visual-inner">
            <div className="tech-ring tr1">
              <div className="orbit-dot"></div>
            </div>
            <div className="tech-ring tr2">
              <div className="orbit-dot orbit-dot2"></div>
            </div>
            <div className="tech-ring tr3">
              <div className="orbit-dot orbit-dot3"></div>
            </div>
            <div className="tech-center">
              <img src="/logo.png" alt="SURXTECH Logo" className="tech-logo-img" />
              <div className="tech-name-big">
                SURX<span>TECH</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '6px', letterSpacing: '0.08em', fontWeight: 700 }}>
                IT &amp; SOFTWARE SOLUTIONS
              </div>
            </div>
          </div>

          <div className="f-card f-card-1">
            <div className="f-val">100%</div>
            <div className="f-lbl">Code Ownership</div>
          </div>
          <div className="f-card f-card-2">
            <div className="f-val" style={{ color: 'var(--sky)' }}>
              Fast
            </div>
            <div className="f-lbl">Turnaround Always</div>
          </div>
          <div className="f-card f-card-3">
            <div className="f-val" style={{ color: '#7c3aed' }}>
              Nilakottai
            </div>
            <div className="f-lbl">Dindigul, TN</div>
          </div>
        </div>

        <div className="split-content">
          <div className="s-label">Why Choose SURXTECH</div>
          <h2 className="s-title">
            Why Growing Businesses<br />
            <span className="highlight-text">Trust Our Team</span>
          </h2>
          <p>
            We combine modern software engineering standards with transparent local collaboration. Whether developing an enterprise web application, mobile app, or custom business management system, we prioritize clean code, measurable performance, and real business value.
          </p>
          <div className="why-list">
            {whyItems.map((item, i) => (
              <div key={i} className="why-item">
                <div className="w-icon">{item.icon}</div>
                <div>
                  <div className="w-title">{item.title}</div>
                  <div className="w-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
