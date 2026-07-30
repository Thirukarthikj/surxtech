import React from 'react';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';

export default function TeamPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <TeamSection />
      <CTASection />
    </div>
  );
}
