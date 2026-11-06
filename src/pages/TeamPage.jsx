import React from 'react';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

export default function TeamPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Team', item: '/team' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Meet Our Engineering Team | SURXTECH Dindigul"
        description="Meet the founders, tech leads, full stack engineers, and UI/UX designers behind SURXTECH in Nilakottai, Dindigul, Tamil Nadu."
        canonical="/team"
        breadcrumbs={breadcrumbs}
      />
      <TeamSection />
      <CTASection />
    </div>
  );
}
