import React from 'react';
import WorkPortfolio from '../components/WorkPortfolio';
import CTASection from '../components/CTASection';

export default function WorkPage({ onSelectProject }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <WorkPortfolio onSelectProject={onSelectProject} />
      <CTASection />
    </div>
  );
}
