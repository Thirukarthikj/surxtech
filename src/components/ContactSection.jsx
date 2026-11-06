import React, { useState, useEffect } from 'react';
import { Mail, Instagram, MessageCircle, MapPin, Send, Check } from 'lucide-react';

export default function ContactSection({ selectedServiceFromModal }) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceFromModal) {
      setFormState((prev) => ({
        ...prev,
        service: selectedServiceFromModal.name || prev.service,
        message: prev.message || `Hi SurxTech! I am interested in booking the ${selectedServiceFromModal.name} service.`,
      }));
    }
  }, [selectedServiceFromModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section className="section" id="contact">
      <div className="contact-grid">
        <div className="c-info">
          <div className="s-label">Contact</div>
          <h2 className="s-title">
            Let's Build <span className="highlight-text">Together</span>
          </h2>
          <p>
            We'd love to hear about your project. Send us a message and we'll get back to you within 24 hours, ready to help.
          </p>
          <div className="c-channels">
            <a href="mailto:surxtech@gmail.com" className="c-chan">
              <div className="c-chan-icon">
                <Mail size={20} color="var(--blue)" />
              </div>
              <div>
                <div className="c-chan-lbl">Email</div>
                <div className="c-chan-val">surxtech@gmail.com</div>
              </div>
            </a>
            <a href="https://instagram.com/surxtech" target="_blank" rel="noopener noreferrer" className="c-chan">
              <div className="c-chan-icon">
                <Instagram size={20} color="var(--blue)" />
              </div>
              <div>
                <div className="c-chan-lbl">Instagram</div>
                <div className="c-chan-val">@surxtech</div>
              </div>
            </a>
            <a href="https://wa.me/?text=Hi%20SurxTech" target="_blank" rel="noopener noreferrer" className="c-chan">
              <div className="c-chan-icon">
                <MessageCircle size={20} color="var(--blue)" />
              </div>
              <div>
                <div className="c-chan-lbl">WhatsApp / Call</div>
                <div className="c-chan-val">Connect with our team</div>
              </div>
            </a>
            <div className="c-chan" style={{ cursor: 'default' }}>
              <div className="c-chan-icon">
                <MapPin size={20} color="var(--blue)" />
              </div>
              <div>
                <div className="c-chan-lbl">Location</div>
                <div className="c-chan-val">Coimbatore, India · Remote Worldwide</div>
              </div>
            </div>
          </div>
        </div>

        <form className="c-form" onSubmit={handleSubmit}>
          <div className="f-row">
            <div className="f-grp">
              <label className="f-lbl" htmlFor="contact-first-name">First Name</label>
              <input
                id="contact-first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="f-inp"
                placeholder="Your name"
                required
                value={formState.firstName}
                onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
              />
            </div>
            <div className="f-grp">
              <label className="f-lbl" htmlFor="contact-last-name">Last Name</label>
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="f-inp"
                placeholder="Last name"
                value={formState.lastName}
                onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="f-grp">
            <label className="f-lbl" htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className="f-inp"
              placeholder="your@email.com"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>

          <div className="f-grp">
            <label className="f-lbl" htmlFor="contact-service">Service Needed</label>
            <select
              id="contact-service"
              name="service"
              className="f-sel"
              value={formState.service}
              onChange={(e) => setFormState({ ...formState, service: e.target.value })}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="UI / UX Design">UI / UX Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Branding & Identity">Branding &amp; Identity</option>
              <option value="Content Creation">Content Creation</option>
              <option value="College Student Internships">College Student Internships</option>
              <option value="College Projects (Mini & Major)">College Projects (Mini &amp; Major)</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="f-grp">
            <label className="f-lbl" htmlFor="contact-message">Tell Us About Your Project</label>
            <textarea
              id="contact-message"
              name="message"
              className="f-area"
              placeholder="Describe your idea, goals, and timeline..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
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
                <Check size={18} /> Sent! We'll be in touch soon.
              </span>
            ) : (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Send Message <Send size={16} />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
