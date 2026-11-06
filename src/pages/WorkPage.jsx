import React from 'react';
import WorkPortfolio from '../components/WorkPortfolio';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

export default function WorkPage({ onSelectProject }) {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Portfolio', item: '/portfolio' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Portfolio & Selected Client Work | SURXTECH Dindigul"
        description="Browse web applications, e-commerce stores, custom software, and mobile apps delivered by SURXTECH for businesses across Tamil Nadu."
        canonical="/portfolio"
        breadcrumbs={breadcrumbs}
      />
      <WorkPortfolio onSelectProject={onSelectProject} />
      <CTASection />
    </div>
  );
}
