import React, { useState, useEffect } from 'react';
import { Mail, Instagram, MessageCircle, MapPin, Send, Check, ArrowRight } from 'lucide-react';

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
            <a href="https://wa.me/919342553805?text=Hi%20SurxTech" target="_blank" rel="noopener noreferrer" className="c-chan">
              <div className="c-chan-icon">
                <MessageCircle size={20} color="var(--blue)" />
              </div>
              <div>
                <div className="c-chan-lbl">WhatsApp / Call</div>
                <div className="c-chan-val">+91 93425 53805</div>
              </div>
            </a>
            <a
              href="https://maps.google.com/?q=Nilakottai,+Dindigul,+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="c-chan"
              title="View on Google Maps"
            >
              <div className="c-chan-icon">
                <MapPin size={20} color="var(--blue)" />
              </div>
              <div>
                <div className="c-chan-lbl">Location</div>
                <div className="c-chan-val">Nilakottai, Dindigul · Remote Worldwide</div>
              </div>
            </a>
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

      {/* GOOGLE MAP EMBED */}
      <div className="contact-map-wrap" style={{ marginTop: '56px' }}>
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
            background: 'var(--surface)',
          }}
        >
          <div
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              background: 'var(--surface)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(37,99,235,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--blue)',
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>SurxTech Headquarters</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Nilakottai, Dindigul, Tamil Nadu, India</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Nilakottai,+Dindigul,+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '13px', padding: '10px 18px', gap: '6px' }}
            >
              Get Directions <ArrowRight size={14} />
            </a>
          </div>

          <iframe
            title="SurxTech Office Location Map - Nilakottai Dindigul"
            src="https://maps.google.com/maps?q=Nilakottai,%20Dindigul,%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
