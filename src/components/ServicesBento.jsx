import React from 'react';

export const servicesData = [
  {
    id: 'web-dev',
    num: '01',
    icon: '🌐',
    name: 'Web Development',
    desc: 'Custom websites, landing pages, SaaS products, and e-commerce platforms. Fast and fully responsive across every device.',
    tags: ['React', 'Next.js', 'Node'],
    class: 'b1',
    details: 'We build high-performance web applications tailored to your business needs. Using modern frameworks like React, Next.js, and Node.js, we deliver clean architecture, SEO optimization, and lightning-fast load times.',
    deliverables: ['Custom Web Applications', 'E-Commerce Platforms', 'Interactive Dashboards', 'Headless CMS Integration', 'SEO & Speed Optimization']
  },
  {
    id: 'app-dev',
    num: '02',
    icon: '📱',
    name: 'App Development',
    desc: 'Cross-platform mobile and progressive web applications that engage your users and scale effortlessly with your business growth.',
    tags: ['Flutter', 'React Native', 'PWA'],
    class: 'b2',
    details: 'From native mobile performance to versatile cross-platform solutions, we build iOS and Android apps with intuitive UI/UX, real-time push notifications, offline support, and backend synchronization.',
    deliverables: ['iOS & Android Apps', 'Flutter Cross-Platform', 'Progressive Web Apps (PWAs)', 'REST / GraphQL API Integration', 'App Store & Play Store Publishing']
  },
  {
    id: 'ui-ux',
    num: '03',
    icon: '🎨',
    name: 'UI / UX Design',
    desc: 'Interfaces that users love. Wireframes, prototypes, and pixel-perfect designs that convert visitors into customers.',
    tags: ['Figma', 'Prototyping'],
    class: 'b3',
    details: 'User-centered design is at the core of everything we build. We perform thorough user research, create interactive Figma wireframes, and design modern design systems that elevate your brand visual presence.',
    deliverables: ['User Research & Journey Mapping', 'Figma Wireframes & Prototypes', 'Design System Creation', 'Mobile & Desktop App UI', 'Conversion Rate Optimization']
  },
  {
    id: 'video-editing',
    num: '04',
    icon: '🎬',
    name: 'Video Editing',
    desc: 'Reels, brand films, YouTube content, and promotional videos — cut and graded to broadcast quality standards.',
    tags: ['Premiere', 'After Effects'],
    class: 'b4',
    details: 'Transform raw footage into compelling video narratives. We specialize in high-converting social reels, promotional brand films, YouTube edits, motion graphics, sound design, and color grading.',
    deliverables: ['Social Media Reels & Shorts', 'Brand Promotional Videos', 'Motion Graphics & VFX', 'Color Grading & Sound Mix', 'YouTube Content Editing']
  },
  {
    id: 'graphic-design',
    num: '05',
    icon: '✦',
    name: 'Graphic Design',
    desc: 'Logos, posters, social media kits, menu cards, and print materials — all crafted with intention and style.',
    tags: ['Illustrator', 'Photoshop'],
    class: 'b5',
    details: 'High-impact visual graphics designed to make your business memorable. From print banners and restaurant menus to digital social media templates and vector illustrations.',
    deliverables: ['Vector Logos & Icons', 'Social Media Design Kits', 'Event Posters & Banners', 'Menu Cards & Stationery', 'Marketing Collateral']
  },
  {
    id: 'branding',
    num: '06',
    icon: '💼',
    name: 'Branding & Identity',
    desc: 'Complete brand systems — logo, color palette, typography, tone of voice, and a full brand guide that keeps you consistent everywhere.',
    tags: ['Strategy', 'Visual Identity', 'Guidelines'],
    class: 'b6',
    details: 'Build a distinct brand identity that resonates with your target audience. We establish your strategic brand positioning, logo suite, color harmonies, brand voice, and official style guide.',
    deliverables: ['Brand Strategy & Positioning', 'Primary & Secondary Logo Suite', 'Typography & Palette System', 'Brand Book & Usage Guidelines', 'Social Media Identity']
  },
  {
    id: 'content',
    num: '07',
    icon: '📣',
    name: 'Content Creation',
    desc: 'Social media content, copywriting, and campaign strategy that builds authority and drives real engagement for your brand.',
    tags: ['Social', 'Copy', 'Strategy'],
    class: 'b7',
    details: 'Engaging content that turns casual viewers into loyal customers. We craft strategic copy, social media campaigns, blog posts, and marketing funnel messaging optimized for audience growth.',
    deliverables: ['Social Media Campaign Strategy', 'Ad Copywriting & Scripts', 'Content Calendar Creation', 'Email Marketing Newsletters', 'SEO Blog Writing']
  },
  {
    id: 'internships',
    num: '08',
    icon: '🎓',
    name: 'College Student Internships',
    desc: 'Hands-on industrial internships for college students. Work on live production applications with senior developer mentorship and verified certification.',
    tags: ['Live Projects', 'Mentorship', 'Certification'],
    class: 'b8',
    details: 'We provide comprehensive industrial internship programs for college students looking for real-world development experience. Work directly alongside our engineers on React, Node.js, Flutter, UI/UX, and cloud deployments with official completion letters and verified recommendation certificates.',
    deliverables: ['Hands-on Real-World Project Experience', '1-on-1 Guidance from Tech Leads', 'Verified Internship Certificate & LOR', 'Full Stack & Mobile Development Training', 'Resume Building & Technical Interview Prep']
  },
  {
    id: 'college-projects',
    num: '09',
    icon: '💡',
    name: 'College Projects (Mini & Major)',
    desc: 'End-to-end college project solutions for engineering & IT students — complete working source code, project documentation report, PPT, and viva coaching.',
    tags: ['Mini Projects', 'Final Year', 'IEEE & Custom'],
    class: 'b9',
    details: 'Get your mini and major college projects built with high code quality and contemporary frameworks. We provide clean, bug-free source code, database architectures, IEEE/college standard documentation, PPT presentations, and full viva explanation support.',
    deliverables: ['Complete Working Source Code & GitHub Repo', 'IEEE / College Format Project Report & Documentation', 'System Architecture & Database Schema Diagrams', 'Project Presentation PPT & Demo Video', 'Complete Code Explanation & Viva Preparation']
  }
];

export default function ServicesBento({ onSelectService }) {
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.style.setProperty('--mx', `${x}%`);
    cardRef.style.setProperty('--my', `${y}%`);
  };

  return (
    <section className="section" id="services">
      <div className="services-hdr">
        <div>
          <div className="s-label">What We Build</div>
          <h2 className="s-title">
            End-to-End<br />
            <span className="ghost">Digital Services</span>
          </h2>
        </div>
        <p className="services-hdr-right">
          From concept to deployment — we handle everything. Fast delivery, premium quality, client-focused execution on every single project.
        </p>
      </div>

      <div className="bento">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className={`bento-card ${item.class}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onClick={() => onSelectService(item)}
            title="Click for full service details"
          >
            <span className="b-num">{item.num}</span>
            <div className="b-icon">{item.icon}</div>
            <div className="b-name">{item.name}</div>
            <p className="b-desc">{item.desc}</p>
            <div className="b-tags">
              {item.tags.map((tag, i) => (
                <span key={i} className="b-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
