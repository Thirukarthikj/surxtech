import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const projectsData = [
  {
    id: 'startup-launch',
    category: 'web',
    chip: '⚡ Web Platform',
    title: 'Digital Startup Launch',
    titleHighlight: 'Startup Launch',
    desc: 'Full-stack SaaS platform — from UI design to backend architecture and cloud deployment.',
    tags: ['Next.js', 'Node', 'PostgreSQL', 'AWS'],
    image: '/images/saas-dashboard.png',
    tint: 'tint-1',
    spanTwo: true,
    fullDetails: {
      client: 'Apex SaaS Technologies',
      timeline: '6 Weeks',
      summary: 'Architected and developed an enterprise-grade web SaaS application featuring multi-tenant authentication, automated billing via Stripe, subscription analytics, and cloud infrastructure setup on AWS EC2/RDS.',
      results: ['3.2x Improvement in user onboarding speed', '99.99% Server Uptime on AWS', 'Processed over $50k in subscriptions in Month 1']
    }
  },
  {
    id: 'mobile-app',
    category: 'mobile',
    chip: '📱 Mobile App',
    title: 'Cross-Platform Mobile App',
    titleHighlight: 'Mobile App',
    desc: 'iOS & Android app with real-time features and a clean onboarding flow.',
    tags: ['Flutter', 'Firebase'],
    image: '/images/mobile-app.png',
    tint: 'tint-2',
    spanTwo: false,
    fullDetails: {
      client: 'PulseFit Health & Fitness',
      timeline: '4 Weeks',
      summary: 'Created a cross-platform Flutter application for iOS and Android with live biometric sync, workout tracking, push notifications, and Firebase real-time database.',
      results: ['4.9 Stars average rating across iOS & Android stores', 'Over 25,000 active downloads', 'Zero crash reports in production release']
    }
  },
  {
    id: 'brand-system',
    category: 'design',
    chip: '🎨 Branding',
    title: 'Complete Brand System',
    titleHighlight: 'Brand System',
    desc: 'Logo, identity, brand guidelines, and a full visual language for a growing startup.',
    tags: ['Figma', 'Illustrator'],
    image: '/images/brand-identity.png',
    tint: 'tint-3',
    spanTwo: false,
    fullDetails: {
      client: 'Vanguard Capital Partners',
      timeline: '3 Weeks',
      summary: 'Crafted a comprehensive brand identity including logo design, color systems, typography pairings, social media brand kits, and business collateral guidelines.',
      results: ['Unified visual presence across digital & print media', '100+ Asset design kit delivered', 'Enhanced brand perception leading to seed funding']
    }
  },
  {
    id: 'ecommerce-storefront',
    category: 'web',
    chip: '🛒 E-Commerce',
    title: 'E-Commerce Storefront',
    titleHighlight: 'Storefront',
    desc: 'High-conversion product pages, cart flows, and a custom CMS for seamless management.',
    tags: ['React', 'Stripe', 'MongoDB'],
    image: '/images/ecommerce.png',
    tint: 'tint-4',
    spanTwo: true,
    fullDetails: {
      client: 'LuxeLiving Direct',
      timeline: '5 Weeks',
      summary: 'Engineered a modern React e-commerce platform with custom product configurators, instant checkout integration, order tracking dashboard, and inventory sync.',
      results: ['45% Increase in cart conversion rate', '< 1.2s average page load speed', 'Handled 10k daily visitor spike smoothly']
    }
  },
  {
    id: 'brand-film',
    category: 'media',
    chip: '🎬 Video Production',
    title: 'Brand Film & Reels',
    titleHighlight: 'Film & Reels',
    desc: 'Social-first video content — reels, shorts, and brand films edited to a cinematic standard.',
    tags: ['Premiere', 'After Effects'],
    image: '/images/video-production.png',
    tint: 'tint-5',
    spanTwo: false,
    fullDetails: {
      client: 'Nova Sound Studios',
      timeline: '2 Weeks',
      summary: 'Produced high-impact cinematic promotional reels, brand commercial spots, motion graphics intro sequences, and audio mastering for social media campaigns.',
      results: ['1.2 Million total organic impressions', '4.8x Higher social engagement rate', 'Featured on top creative design showcases']
    }
  }
];

export default function WorkPortfolio({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section className="section" id="work">
      <div className="work-hdr">
        <div>
          <div className="s-label">Portfolio</div>
          <h2 className="s-title">
            Selected <span className="ghost">Work</span>
          </h2>
        </div>
        <Link to="/contact" className="btn-outline" style={{ fontSize: '14px', padding: '12px 26px' }}>
          Start Your Project →
        </Link>
      </div>

      <div className="work-filters">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
          All Projects
        </button>
        <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>
          Web Development
        </button>
        <button className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>
          Mobile Apps
        </button>
        <button className={`filter-btn ${filter === 'design' ? 'active' : ''}`} onClick={() => setFilter('design')}>
          Branding & Design
        </button>
        <button className={`filter-btn ${filter === 'media' ? 'active' : ''}`} onClick={() => setFilter('media')}>
          Video & Media
        </button>
      </div>

      <div className="work-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`work-card ${project.tint} ${project.spanTwo ? 'span-2' : ''}`}
            onClick={() => onSelectProject(project)}
            title="Click to view case study details"
          >
            {project.image && (
              <div className="work-card-img-wrap">
                <img src={project.image} alt={project.title} className="work-card-img" />
              </div>
            )}
            <div className="work-inner">
              <div>
                <div className="work-chip">{project.chip}</div>
                <div className="work-title">
                  {project.title.replace(project.titleHighlight, '')}
                  <span>{project.titleHighlight}</span>
                </div>
                <div className="work-desc">{project.desc}</div>
              </div>
              <div className="work-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="w-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="work-arrow">
              <ArrowUpRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
