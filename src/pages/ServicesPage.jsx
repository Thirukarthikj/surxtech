import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ServicesBento, { servicesData } from '../components/ServicesBento';
import ServiceModal from '../components/ServiceModal';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import { Send, Check, MessageSquare, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';

export default function ServicesPage({ onSelectService, selectedService, setSelectedService }) {
  const location = useLocation();
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Web Development',
    timeline: 'Standard (3-4 Weeks)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.hash === '#enquiry' || location.hash === '#service-enquiry') {
      const el = document.getElementById('enquiry') || document.getElementById('service-enquiry');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

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

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Services', item: '/services' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Software Development & Digital Services | SURXTECH Dindigul"
        description="Comprehensive technology services by SURXTECH in Tamil Nadu: Web development, e-commerce, custom business software, mobile applications, AI solutions, and SEO."
        canonical="/services"
        breadcrumbs={breadcrumbs}
      />

      {/* Dual Capability Suite Switcher */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 30px', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '4px solid var(--blue)', borderRadius: '18px', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--blue)', letterSpacing: '0.08em' }}>Segment A</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginTop: '2px' }}>Business Digital Solutions</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>Websites, Apps, AI Automation &amp; Custom Software</div>
            </div>
            <Link to="/business-solutions" className="btn-primary" style={{ padding: '9px 16px', fontSize: '13px', flexShrink: 0 }}>
              Business Hub <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '4px solid #10b981', borderRadius: '18px', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: '#059669', letterSpacing: '0.08em' }}>Segment B</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginTop: '2px' }}>Student Project Solutions</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>MCA, BCA, BE, B.Tech, Python &amp; MERN Mentoring</div>
            </div>
            <Link to="/student-projects" className="btn-primary" style={{ padding: '9px 16px', fontSize: '13px', background: '#059669', borderColor: '#059669', flexShrink: 0 }}>
              Student Hub <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      <ServicesBento onSelectService={handleServiceSelectFromBento} />

      {/* OUR PROCESS SECTION */}
      <ProcessSection />

      {/* SERVICE ENQUIRY FORM SECTION */}
      <section className="section" id="enquiry" style={{ marginTop: '40px' }}>
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
                  <option value="MCA Final Year Projects">🎓 MCA Final Year Projects</option>
                  <option value="BCA Final Year Projects">💻 BCA Final Year Projects</option>
                  <option value="BE / B.Tech Projects">⚙️ Engineering Final Year Projects</option>
                  <option value="Python / AI Projects">🧠 Python &amp; AI/ML Projects</option>
                  <option value="Other / Custom Inquiry">💡 Other / Custom Inquiry</option>
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
