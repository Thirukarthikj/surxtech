import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesBento, { servicesData } from '../components/ServicesBento';
import ServiceModal from '../components/ServiceModal';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import { Send, Check, MessageSquare, GraduationCap, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';

export default function ServicesPage({ onSelectService, selectedService, setSelectedService }) {
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    timeline: 'Standard (3-4 Weeks)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleEnquireSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEnquiryForm({
        name: '',
        email: '',
        company: '',
        service: 'Web Development',
        timeline: 'Standard (3-4 Weeks)',
        message: '',
      });
    }, 4500);
  };

  const handleServiceSelectFromBento = (svc) => {
    setSelectedService(svc);
    setEnquiryForm((prev) => ({ ...prev, service: svc.name }));
  };

  const handleStudentProgramSelect = (serviceName) => {
    setEnquiryForm((prev) => ({ ...prev, service: serviceName }));
    const enquiryEl = document.getElementById('service-enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Software Development & Student Project Solutions | SURXTECH Dindigul"
        description="Comprehensive technology services by SURXTECH in Tamil Nadu: Web development, e-commerce, custom business software, mobile apps, and student final-year project guidance."
        canonical="/services"
        breadcrumbs={breadcrumbs}
      />

      {/* Segment Navigation Quick Links */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 20px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/business-solutions" className="btn-primary" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
          <Briefcase size={15} /> Business Solutions Hub →
        </Link>
        <Link to="/student-projects" className="btn-outline" style={{ padding: '10px 20px', fontSize: '13.5px' }}>
          <GraduationCap size={15} /> Student Projects Hub →
        </Link>
      </div>

      <ServicesBento onSelectService={handleServiceSelectFromBento} />

      {/* STUDENT PROJECTS & GUIDANCE SPOTLIGHT */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(14,165,233,0.06) 100%)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            borderRadius: '24px',
            padding: '48px 36px',
            boxShadow: '0 12px 36px rgba(37, 99, 235, 0.05)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>
              <GraduationCap size={16} /> Student Project Solutions
            </div>
            <h2 className="s-title" style={{ fontSize: 'clamp(28px, 4.5vw, 40px)', marginBottom: '12px' }}>
              College Student <span className="highlight-text">Project Guidance</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.7' }}>
              We mentor MCA, BCA, B.Sc CS, BE, and B.Tech students through final-year and mini projects with source code, report documentation, and 1-on-1 viva coaching.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Card 1: Internship */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '20px',
                  }}
                >
                  🎓
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6', marginBottom: '8px' }}>
                  Industrial Training
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
                  Internships for College Students
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Gain real industrial training working alongside senior software engineers. Build production-grade features in React, Node.js, Flutter, UI/UX, and cloud deployments.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {[
                    'Live project exposure on real-world web & mobile applications',
                    'Direct 1-on-1 mentorship from tech leads and architects',
                    'Authorized Internship Certificate & Letter of Recommendation',
                    'Technical interview preparation & resume enhancement'
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--ink2)' }}>
                      <CheckCircle2 size={16} color="var(--blue)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => handleStudentProgramSelect('College Student Internships')}
              >
                Apply for Internship <ArrowRight size={16} />
              </button>
            </div>

            {/* Card 2: College Projects */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '20px',
                  }}
                >
                  💡
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#06b6d4', marginBottom: '8px' }}>
                  Academic Assistance
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
                  College Projects (Mini &amp; Major)
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '20px' }}>
                  End-to-end development of mini, semester, and final-year academic projects for Engineering, BCA, MCA, and IT students with complete documentation.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {[
                    '100% bug-free working source code with clean architecture',
                    'Complete IEEE / University standard project documentation report',
                    'System architecture diagrams, ER diagrams & database schema',
                    'Full code explanation & viva presentation defense coaching'
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--ink2)' }}>
                      <CheckCircle2 size={16} color="var(--blue)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => handleStudentProgramSelect('College Projects (Mini & Major)')}
              >
                Enquire for College Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <ProcessSection />

      {/* SERVICE ENQUIRY FORM SECTION */}
      <section className="section" id="service-enquiry" style={{ marginTop: '40px' }}>
        <div className="enquiry-card">
          <div className="enquiry-hdr">
            <div className="s-label">
              <MessageSquare size={14} style={{ marginRight: '4px' }} /> Quick Service Inquiry
            </div>
            <h2 className="s-title">
              Enquire About A <span className="highlight-text">Service</span>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
              Have a specific project in mind? Tell us what you need and get a detailed response within 24 hours.
            </p>
          </div>

          <form className="c-form" onSubmit={handleEnquireSubmit} style={{ marginTop: '32px' }}>
            <div className="f-row">
              <div className="f-grp">
                <label className="f-lbl" htmlFor="enquiry-fullname">Full Name *</label>
                <input
                  id="enquiry-fullname"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="f-inp"
                  placeholder="Your full name"
                  required
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                />
              </div>
              <div className="f-grp">
                <label className="f-lbl" htmlFor="enquiry-email">Email Address *</label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="f-inp"
                  placeholder="your@email.com"
                  required
                  value={enquiryForm.email}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                />
              </div>
            </div>

            <div className="f-row">
              <div className="f-grp">
                <label className="f-lbl" htmlFor="enquiry-service">Service Needed *</label>
                <select
                  id="enquiry-service"
                  name="service"
                  className="f-sel"
                  value={enquiryForm.service}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, service: e.target.value })}
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.name}>
                      {svc.icon} {svc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="f-grp">
                <label className="f-lbl" htmlFor="enquiry-company">Company / Brand Name</label>
                <input
                  id="enquiry-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="f-inp"
                  placeholder="Company name (optional)"
                  value={enquiryForm.company}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                />
              </div>
            </div>

            <div className="f-grp">
              <label className="f-lbl" htmlFor="enquiry-timeline">Desired Timeline</label>
              <select
                id="enquiry-timeline"
                name="timeline"
                className="f-sel"
                value={enquiryForm.timeline}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, timeline: e.target.value })}
              >
                <option value="Express (1-2 Weeks)">Express (1-2 Weeks)</option>
                <option value="Standard (3-4 Weeks)">Standard (3-4 Weeks)</option>
                <option value="Flexible (5+ Weeks)">Flexible (5+ Weeks)</option>
              </select>
            </div>

            <div className="f-grp">
              <label className="f-lbl" htmlFor="enquiry-message">Project Details &amp; Requirements *</label>
              <textarea
                id="enquiry-message"
                name="message"
                className="f-area"
                required
                placeholder="Share your goals, requirements, features, or design inspirations..."
                rows={5}
                value={enquiryForm.message}
                onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="f-submit"
              style={
                submitted
                  ? {
                      background: 'linear-gradient(135deg, #059669, #0d9488)',
                      boxShadow: '0 6px 20px rgba(5,150,105,.3)',
                    }
                  : {}
              }
            >
              {submitted ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} /> Service Enquiry Sent! We will contact you within 24 hours.
                </span>
              ) : (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Submit Service Enquiry <Send size={16} />
                </span>
              )}
            </button>
          </form>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
