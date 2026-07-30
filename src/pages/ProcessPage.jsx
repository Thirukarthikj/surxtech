import React from 'react';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import { Layers, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

const processPillars = [
  {
    icon: <Zap size={24} color="var(--blue)" />,
    title: 'Agile & Transparent Sprints',
    desc: 'We break complex projects into bi-weekly milestones with live staging link access, so you see real progress continuously.',
  },
  {
    icon: <ShieldCheck size={24} color="var(--sky)" />,
    title: 'Rigorously Tested Code',
    desc: 'Unit testing, cross-browser compatibility checks, mobile responsiveness tests, and security reviews before every deployment.',
  },
  {
    icon: <Layers size={24} color="var(--violet)" />,
    title: 'Scalable System Architecture',
    desc: 'Built with modern stack standards ensuring your web or mobile app can easily handle thousands of active users without rewrite.',
  },
  {
    icon: <RefreshCw size={24} color="#059669" />,
    title: 'Seamless Handover & Support',
    desc: 'Detailed documentation, video walkthroughs, full source code transfer, and 24/7 post-launch maintenance.',
  },
];

export default function ProcessPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <ProcessSection />

      <section className="section" style={{ paddingTop: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            Why Our Process Works
          </div>
          <h2 className="s-title">
            Built for <span className="ghost">Reliability</span>
          </h2>
        </div>

        <div className="process-pillars-grid">
          {processPillars.map((p, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
