import React from 'react';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import { localBusinessSchema } from '../utils/seoSchemas';

export default function ContactPage({ selectedService }) {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Contact', item: '/contact' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Contact SURXTECH | IT Company in Nilakottai & Dindigul, Tamil Nadu"
        description="Get in touch with SURXTECH for business website development, mobile apps, and custom software solutions. Office in Nilakottai, Dindigul."
        canonical="/contact"
        schema={localBusinessSchema}
        breadcrumbs={breadcrumbs}
      />
      <ContactSection selectedServiceFromModal={selectedService} />
      <FAQSection />
    </div>
  );
}
