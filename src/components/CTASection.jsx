import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';

export default function CTASection({
  title = 'Turn Your Idea Into a High-Impact Product',
  subtitle = 'Great businesses and academic milestones need the right technology partner. Connect with our engineering team in Nilakottai, Dindigul today.',
}) {
  return (
    <div className="cta-wrap">
      <div className="cta-inner">
        <div className="s-label" style={{ color: '#ffffff', opacity: 0.9 }}>Ready to Build?</div>
        <h2 className="cta-title">
          {title}
        </h2>
        <p className="cta-sub">
          {subtitle}
        </p>
        <div className="cta-btns" style={{ flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          <Link to="/contact" className="btn-white">
            Discuss Your Project <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/919342553805?text=Hi%20SurxTech!%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-email"
            style={{ background: 'rgba(37, 211, 102, 0.25)', borderColor: 'rgba(37, 211, 102, 0.5)' }}
          >
            <MessageCircle size={16} /> WhatsApp: +91 93425 53805
          </a>
          <a href="mailto:surxtech@gmail.com" className="cta-email">
            <Mail size={16} /> surxtech@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
