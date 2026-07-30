import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

export default function ContactPage({ selectedService }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <ContactSection selectedServiceFromModal={selectedService} />
      <FAQSection />
    </div>
  );
}
