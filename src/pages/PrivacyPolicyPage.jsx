import React from 'react';
import SEO from '../components/SEO';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Privacy Policy', item: '/privacy-policy' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Privacy Policy | SURXTECH"
        description="SURXTECH privacy policy. Learn how we handle client data, intellectual property confidentiality, and website visitor privacy with total transparency."
        canonical="/privacy-policy"
        breadcrumbs={breadcrumbs}
      />

      <section className="section" style={{ maxWidth: '860px', margin: '0 auto', paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <Shield size={14} style={{ marginRight: '4px' }} /> Legal &amp; Transparency
          </div>
          <h1 className="s-title" style={{ fontSize: 'clamp(30px, 4.4vw, 44px)', marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '14.5px' }}>
            Last Updated: November 2026 · SURXTECH (Nilakottai, Dindigul, Tamil Nadu)
          </p>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: 'clamp(24px, 4vw, 44px)', boxShadow: 'var(--shadow-sm)', lineHeight: '1.8', color: 'var(--muted)', fontSize: '15px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>1. Introduction</h2>
          <p style={{ marginBottom: '20px' }}>
            SURXTECH ("we", "our", or "us") operates the website <strong>https://www.surxtech.com</strong>. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal and business information when you use our website or consult on business software solutions.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '12px' }}>We collect only necessary information that you voluntarily provide to us via contact forms, email, or direct WhatsApp inquiries:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Contact Details:</strong> Name, email address, phone number, and location.</li>
            <li><strong>Project Scope:</strong> Business requirements, feature specifications, and technology preferences.</li>
            <li><strong>Usage Data:</strong> Standard anonymous server telemetry (IP address, browser type, pages viewed) collected to improve website performance.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: '12px' }}>Your information is strictly used to:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li>Respond to your technical inquiries and prepare project proposals.</li>
            <li>Coordinate development milestones, source code handovers, and documentation reviews.</li>
            <li>Provide ongoing maintenance, security updates, and customer support.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>4. Data Protection &amp; Confidentiality</h2>
          <p style={{ marginBottom: '20px' }}>
            We implement industry-standard encryption, strict access controls, and secure communication channels. We never sell, lease, or share your proprietary business data or project materials with any third-party marketing companies.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '10px' }}>5. Contact Information</h2>
          <p style={{ margin: 0 }}>
            If you have questions regarding this Privacy Policy, please contact our team at:<br />
            <strong>SURXTECH</strong><br />
            Main Road, Nilakottai, Dindigul District, Tamil Nadu — 624208<br />
            Email: <a href="mailto:surxtech@gmail.com" style={{ color: 'var(--blue)' }}>surxtech@gmail.com</a><br />
            Phone: <a href="tel:+919342553805" style={{ color: 'var(--blue)' }}>+91 93425 53805</a>
          </p>
        </div>
      </section>
    </div>
  );
}

