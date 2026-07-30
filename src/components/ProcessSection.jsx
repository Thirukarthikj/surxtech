import React from 'react';

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery',
    desc: 'We understand your goals, audience, and constraints — then map a clear strategy before writing a single line of code.',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'Design',
    desc: 'Wireframes, UI concepts, and interactive prototypes refined through your feedback until every detail is right.',
  },
  {
    num: '03',
    icon: '⚙️',
    title: 'Build',
    desc: 'Clean, scalable code with agile sprints. Regular demos keep you in the loop at every milestone.',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Launch & Support',
    desc: 'Smooth deployment, performance tuning, and ongoing support so your product keeps growing after go-live.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section alt" id="process">
      <div style={{ textAlign: 'center' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          How We Work
        </div>
        <h2 className="s-title">
          Our <span className="ghost">Process</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: '16px', fontWeight: '300', fontSize: '15px' }}>
          Simple, transparent, and built around your goals.
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step) => (
          <div key={step.num} className="process-step">
            <div className="p-step-num">{step.num}</div>
            <div className="p-step-icon">{step.icon}</div>
            <div className="p-step-title">{step.title}</div>
            <p className="p-step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
