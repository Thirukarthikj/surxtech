import React from 'react';

const techItems = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲', name: 'Next.js' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🐦', name: 'Flutter' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🎨', name: 'Figma' },
  { icon: '☁️', name: 'AWS / GCP' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🔥', name: 'Firebase' },
];

export default function TechStack() {
  return (
    <section className="section alt" id="stack">
      <div className="stack-hdr">
        <div className="s-label" style={{ justifyContent: 'center' }}>
          Technology
        </div>
        <h2 className="s-title">
          Our <span className="ghost">Tech Stack</span>
        </h2>
        <p>We work with cutting-edge tools to build fast, scalable, and maintainable products.</p>
      </div>

      <div className="stack-grid">
        {techItems.map((tech, idx) => (
          <div key={idx} className="stack-item">
            <div className="s-icon">{tech.icon}</div>
            <div className="s-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
