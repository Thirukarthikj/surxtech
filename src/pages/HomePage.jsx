import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MarqueeBanner from '../components/MarqueeBanner';
import CTASection from '../components/CTASection';
import { ArrowRight, Layers, LayoutGrid, Cpu, Briefcase, Users, PhoneCall } from 'lucide-react';

const homeExploreCards = [
  {
    icon: <Users size={28} color="var(--blue)" />,
    title: 'About SurxTech',
    subtitle: 'Who We Are & What Drives Us',
    desc: 'Learn about our agency, team members, core philosophy, and technical values.',
    link: '/about',
    linkText: 'Explore About Page',
    badge: 'Agency Profile',
  },
  {
    icon: <LayoutGrid size={28} color="var(--sky)" />,
    title: 'Services & Enquiries',
    subtitle: '7 Core Digital Capabilities',
    desc: 'Web apps, mobile products, UI/UX design, branding, and instant service enquiry form.',
    link: '/services',
    linkText: 'View Services & Enquire',
    badge: 'Services Suite',
  },
  {
    icon: <Cpu size={28} color="var(--violet)" />,
    title: 'Development Process',
    subtitle: '4-Stage Agile Methodology',
    desc: 'From initial discovery & design prototypes to clean build & 24/7 post-launch support.',
    link: '/process',
    linkText: 'See How We Work',
    badge: 'Workflow',
  },
  {
    icon: <Briefcase size={28} color="#059669" />,
    title: 'Selected Portfolio',
    subtitle: 'Real Client Case Studies',
    desc: 'Explore SaaS platforms, mobile apps, e-commerce storefronts, and brand design kits.',
    link: '/work',
    linkText: 'Browse Work Portfolio',
    badge: 'Case Studies',
  },
];

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Hero />
      <MarqueeBanner />

      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            Explore SurxTech
          </div>
          <h2 className="s-title">
            Discover Our <span className="ghost">Digital World</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginTop: '12px', fontWeight: '300', fontSize: '16px', maxWidth: '600px', margin: '12px auto 0' }}>
            Navigate through our dedicated pages to see how we help startups and established brands build exceptional products.
          </p>
        </div>

        <div className="home-hub-grid">
          {homeExploreCards.map((card, idx) => (
            <Link key={idx} to={card.link} className="home-hub-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div className="hub-card-icon">{card.icon}</div>
                <span className="hub-card-badge">{card.badge}</span>
              </div>
              <h3 className="hub-card-title">{card.title}</h3>
              <div className="hub-card-sub">{card.subtitle}</div>
              <p className="hub-card-desc">{card.desc}</p>
              <div className="hub-card-btn">
                <span>{card.linkText}</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
