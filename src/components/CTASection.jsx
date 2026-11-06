import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="cta-wrap">
      <div className="cta-inner">
        <div className="s-label">Ready to Build?</div>
        <div className="cta-title">
          Turn Your Idea Into
          <br />a Real Product
        </div>
        <p className="cta-sub">
          Great ideas need the right team. Let's create something together — DM us to get started. Quick and reliable, always.
        </p>
        <div className="cta-btns">
          <Link to="/contact" className="btn-white">
            Start a Project <ArrowRight size={16} />
          </Link>
          <a href="mailto:surxtech@gmail.com" className="cta-email">
            <Mail size={16} /> surxtech@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
