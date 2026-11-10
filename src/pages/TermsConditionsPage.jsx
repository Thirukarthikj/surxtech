import React from 'react';
import SEO from '../components/SEO';
import { FileText } from 'lucide-react';

export default function TermsConditionsPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Terms & Conditions', item: '/terms-and-conditions' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Terms and Conditions | SURXTECH"
        description="SURXTECH terms of service. Guidelines, deliverables, intellectual property ownership, and milestone policies for business clients and students."
        canonical="/terms-and-conditions"
        breadcrumbs={breadcrumbs}
      />

      <section className="section" style={{ maxWidth: '860px', margin: '0 auto', paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <FileText size={14} style={{ marginRight: '4px' }} /> Service Agreement
          </div>
          <h1 className="s-title" style={{ fontSize: 'clamp(30px, 4.4vw, 44px)', marginBottom: '12px' }}>
            Terms and Conditions
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '14.5px' }}>
            Effective Date: November 2026 · SURXTECH (Nilakottai, Dindigul, Tamil Nadu)
          </p>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: 'clamp(24px, 4vw, 44px)', boxShadow: 'var(--shadow-sm)', lineHeight: '1.8', color: 'var(--muted)', fontSize: '15px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>1. Scope of Engagement</h2>
          <p style={{ marginBottom: '20px' }}>
            By engaging SURXTECH for business website development, mobile app engineering, AI automation, or custom software solutions, you agree to these Terms and Conditions. All project scopes, timelines, and deliverables are confirmed in writing prior to project mobilization.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>2. Intellectual Property &amp; Code Ownership</h2>
          <p style={{ marginBottom: '20px' }}>
            Upon receipt of 100% of the agreed project fees, full legal ownership of the developed source code, custom graphic assets, and database architectures is transferred completely to the client. SURXTECH retains the right to display non-confidential project screenshots in our portfolio.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>3. Quality Assurance &amp; Warranty</h2>
          <p style={{ marginBottom: '20px' }}>
            SURXTECH guarantees that all software delivered adheres to industry coding best practices, security standards, and agreed functional specifications. We provide post-deployment warranty support to address any bugs or defects in the delivered scope.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>4. Milestone Payments &amp; Deliverables</h2>
          <p style={{ marginBottom: '20px' }}>
            Payments are structured on milestone terms. Staging reviews are provided at key phases to ensure complete satisfaction. Deposits cover mobilization and initial architecture setup and are non-refundable once development has commenced.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>5. Governing Law</h2>
          <p style={{ margin: 0 }}>
            These terms are governed by the laws of India and the jurisdiction of courts in Dindigul District, Tamil Nadu. For questions regarding our terms, email <a href="mailto:surxtech@gmail.com" style={{ color: 'var(--blue)' }}>surxtech@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

