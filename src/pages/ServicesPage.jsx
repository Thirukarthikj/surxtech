import React, { useState } from 'react';
import ServicesBento, { servicesData } from '../components/ServicesBento';
import ServiceModal from '../components/ServiceModal';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { Send, Check, MessageSquare } from 'lucide-react';

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

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <ServicesBento onSelectService={handleServiceSelectFromBento} />

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
                <label className="f-lbl">Full Name *</label>
                <input
                  type="text"
                  className="f-inp"
                  placeholder="Your full name"
                  required
                  value={enquiryForm.name}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                />
              </div>
              <div className="f-grp">
                <label className="f-lbl">Email Address *</label>
                <input
                  type="email"
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
                <label className="f-lbl">Service Needed *</label>
                <select
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
                <label className="f-lbl">Company / Brand Name</label>
                <input
                  type="text"
                  className="f-inp"
                  placeholder="Company name (optional)"
                  value={enquiryForm.company}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                />
              </div>
            </div>

            <div className="f-grp">
              <label className="f-lbl">Desired Timeline</label>
              <select
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
              <label className="f-lbl">Project Details &amp; Requirements *</label>
              <textarea
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
