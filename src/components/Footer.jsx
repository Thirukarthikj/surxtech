import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, MessageSquare, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="f-logo">
            <img src="/logo.png" alt="SurxTech Logo" className="f-logo-img" />
            <span className="f-logo-text">
              SURX<em>TECH</em>
            </span>
          </Link>
          <p>
            Creative Design | Smart Development
            <br />
            Web · Apps · Branding · Editing
            <br />
            <br />
            Your Digital Partner — building ideas that matter.
          </p>
        </div>

        <div>
          <div className="f-group-title">Services</div>
          <ul className="f-links">
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">App Development</Link></li>
            <li><Link to="/services">UI / UX Design</Link></li>
            <li><Link to="/services">Graphic Design</Link></li>
            <li><Link to="/services">Video Editing</Link></li>
            <li><Link to="/services">Branding</Link></li>
            <li><Link to="/services">Student Internships</Link></li>
            <li><Link to="/services">College Projects</Link></li>
          </ul>
        </div>

        <div>
          <div className="f-group-title">Navigation</div>
          <ul className="f-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/process">Our Process</Link></li>
            <li><Link to="/work">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="f-group-title">Get In Touch</div>
          <ul className="f-links">
            <li><a href="mailto:surxtech@gmail.com">Email Us</a></li>
            <li><a href="https://instagram.com/surxtech" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/919342553805?text=Hi%20SurxTech" target="_blank" rel="noopener noreferrer">WhatsApp (+91 93425 53805)</a></li>
            <li><a href="https://linkedin.com/company/surxtech" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="f-copy">© {new Date().getFullYear()} SurxTech. All rights reserved. Nilakottai, Dindigul, India.</div>
        <div className="f-social">
          <a href="https://instagram.com/surxtech" className="soc-btn" target="_blank" rel="noopener noreferrer" title="Instagram">
            <Camera size={16} />
          </a>
          <a href="mailto:surxtech@gmail.com" className="soc-btn" title="Email">
            <Mail size={16} />
          </a>
          <a href="https://wa.me/919342553805?text=Hi%20SurxTech" className="soc-btn" target="_blank" rel="noopener noreferrer" title="WhatsApp (+91 93425 53805)">
            <MessageSquare size={16} />
          </a>
          <a href="https://linkedin.com/company/surxtech" className="soc-btn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
