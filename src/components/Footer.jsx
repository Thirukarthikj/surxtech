import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, MessageSquare, Linkedin, MapPin, Phone, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px' }}>
        <div style={{ maxWidth: '320px' }}>
          <Link to="/" className="f-logo">
            <img src="/logo.png" alt="SURXTECH Logo" className="logo-img" />
            <span className="logo-text">SURX<em>TECH</em></span>
          </Link>
          <p className="f-tagline" style={{ lineHeight: '1.7', marginTop: '14px' }}>
            IT Startup &amp; Software Development Company based in Nilakottai, Dindigul, Tamil Nadu. Building digital products for businesses and mentoring college students on technical projects.
            <br />
            <br />
            <strong>Creative Design. Powerful Code. Smart Apps.</strong>
          </p>
        </div>

        <div>
          <div className="f-group-title">Business Solutions</div>
          <ul className="f-links">
            <li><Link to="/business-solutions">Solutions Overview</Link></li>
            <li><Link to="/web-development">Web Development</Link></li>
            <li><Link to="/ecommerce-development">E-Commerce Stores</Link></li>
            <li><Link to="/mobile-app-development">Android &amp; iOS Apps</Link></li>
            <li><Link to="/custom-software-development">Custom Software</Link></li>
            <li><Link to="/ai-solutions">AI Business Solutions</Link></li>
            <li><Link to="/ui-ux-design">UI/UX Design</Link></li>
            <li><Link to="/seo-services">SEO Services</Link></li>
            <li><Link to="/website-maintenance">Website Maintenance</Link></li>
          </ul>
        </div>

        <div>
          <div className="f-group-title">Student Projects</div>
          <ul className="f-links">
            <li><Link to="/student-projects">Projects Overview</Link></li>
            <li><Link to="/mca-projects">MCA Final Year Projects</Link></li>
            <li><Link to="/bca-projects">BCA Projects</Link></li>
            <li><Link to="/engineering-projects">BE / B.Tech Projects</Link></li>
            <li><Link to="/python-projects">Python Projects</Link></li>
            <li><Link to="/mern-stack-projects">MERN Stack Projects</Link></li>
            <li><Link to="/ai-ml-projects">AI &amp; ML Projects</Link></li>
            <li><Link to="/react-projects">React Projects</Link></li>
          </ul>
        </div>

        <div>
          <div className="f-group-title">Company &amp; Guides</div>
          <ul className="f-links">
            <li><Link to="/about">About SURXTECH</Link></li>
            <li><Link to="/team">Engineering Team</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/case-studies">Client Case Studies</Link></li>
            <li><Link to="/blog">Engineering Blog</Link></li>
            <li><Link to="/process">Development Process</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <div className="f-group-title">Contact &amp; Location</div>
          <ul className="f-links">
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--muted)', fontSize: '13px' }}>
              <MapPin size={16} color="var(--blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Nilakottai, Dindigul District, Tamil Nadu — 624208</span>
            </li>
            <li style={{ marginTop: '8px' }}>
              <a href="tel:+919342553805" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="var(--blue)" /> +91 93425 53805
              </a>
            </li>
            <li style={{ marginTop: '8px' }}>
              <a href="mailto:surxtech@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="var(--blue)" /> surxtech@gmail.com
              </a>
            </li>
            <li style={{ marginTop: '8px' }}>
              <a href="https://wa.me/919342553805?text=Hi%20SurxTech" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={15} color="#10b981" /> WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="f-copy">
          © {new Date().getFullYear()} SURXTECH. All rights reserved. Nilakottai, Dindigul, Tamil Nadu, India.
        </div>
        <div className="f-social">
          <a href="https://instagram.com/surxtech" className="soc-btn" target="_blank" rel="noopener noreferrer" title="Instagram @surxtech">
            <Camera size={16} />
          </a>
          <a href="mailto:surxtech@gmail.com" className="soc-btn" title="Email surxtech@gmail.com">
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
