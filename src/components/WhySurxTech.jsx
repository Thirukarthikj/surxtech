import React from 'react';

const whyItems = [
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'We move quickly without cutting corners. Your timeline is treated as seriously as your vision.',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    desc: 'Every pixel crafted with intention. Every function tested to perfection before it ships.',
  },
  {
    icon: '🎯',
    title: 'Client-First Mindset',
    desc: 'Your goals drive everything. We listen deeply, adapt fast, and deliver exactly what you need.',
  },
  {
    icon: '🕐',
    title: '24/7 Support',
    desc: 'Always available. Fast replies and dedicated assistance whenever you need us.',
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
              <div className="tech-logo-big">S</div>
              <div className="tech-name-big">
                SURX<span>TECH</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px', letterSpacing: '0.08em' }}>
                YOUR DIGITAL PARTNER
              </div>
            </div>
          </div>

          <div className="f-card f-card-1">
            <div className="f-val">100%</div>
            <div className="f-lbl">Client Satisfaction</div>
          </div>
          <div className="f-card f-card-2">
            <div className="f-val" style={{ color: 'var(--sky)' }}>
              Fast
            </div>
            <div className="f-lbl">Turnaround Always</div>
          </div>
          <div className="f-card f-card-3">
            <div className="f-val" style={{ color: '#7c3aed' }}>
              24/7
            </div>
            <div className="f-lbl">Support Available</div>
          </div>
        </div>

        <div className="split-content">
          <div className="s-label">Why SurxTech</div>
          <h2 className="s-title">
            Why Businesses<br />
            <span className="ghost">Trust Us</span>
          </h2>
          <p>
            We combine sharp creativity with technical depth to deliver solutions that don't just look good — they perform. Every project gets our absolute best, from first brief to final delivery.
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
