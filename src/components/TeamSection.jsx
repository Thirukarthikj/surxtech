import React, { useState } from 'react';
import { User, X, ArrowRight, CheckCircle2, Linkedin, Github, Mail, Globe } from 'lucide-react';
import ProfileCard from './ProfileCard';

const members = [
  {
    id: 'thirukarthick',
    icon: '⚡',
    bg: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
    teamTitle: 'Development Team',
    memberName: 'J. Thirukarthick',
    roleTitle: 'Founder & Tech Lead',
    skillSummary: 'Web · Mobile Apps · Architecture · Strategy',
    bio: 'Lead architect behind SurxTech digital products. Thirukarthick specializes in building high-scale React, Next.js, Node.js applications and cloud infrastructures with robust security and performance.',
    skills: ['React', 'Next.js', 'Node.js', 'Flutter', 'TypeScript', 'AWS'],
    experience: '6+ Years Experience · 50+ Apps Delivered',
    portfolioUrl: 'https://thirukarthik.web.app/',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'jthirukarthick@gmail.com',
    avatarUrl: '/images/team/thirukarthick.svg',
    handle: 'thirukarthick',
    status: 'Online ⚡',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 50%, #bfdbfe 100%)',
  },
  {
    id: 'ananya',
    icon: '🎨',
    bg: 'linear-gradient(135deg,#0284c7,#2563eb)',
    teamTitle: 'Design Lead',
    memberName: 'Ananya Roy',
    roleTitle: 'Lead UI/UX Strategist',
    skillSummary: 'Figma · Design Systems · Motion · Prototypes',
    bio: 'Passionate about craft and conversion. Ananya leads user research, wireframing, component design systems, and visual branding that elevate startups into enterprise-grade products.',
    skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Adobe CC'],
    experience: '5+ Years Experience · 40+ Brand Kits Built',
    linkedin: 'https://linkedin.com',
    email: 'design@surxtech.com',
    avatarUrl: '/images/team/ananya.svg',
    handle: 'ananyaroy',
    status: 'Designing 🎨',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #f0f9ff 50%, #bae6fd 100%)',
  },
  {
    id: 'vikram',
    icon: '⚙️',
    bg: 'linear-gradient(135deg,#1d4ed8,#60a5fa)',
    teamTitle: 'Engineering',
    memberName: 'Vikram Sharma',
    roleTitle: 'Senior DevOps Engineer',
    skillSummary: 'Node · Python · AWS · Docker · PostgreSQL',
    bio: 'Infrastructure specialist ensuring 99.99% server uptime and lightning-fast API responses. Vikram architects cloud databases, CI/CD pipelines, and microservices.',
    skills: ['Node.js', 'Python', 'Docker', 'PostgreSQL', 'AWS EC2/RDS', 'GraphQL'],
    experience: '6+ Years Experience · 99.99% Uptime Record',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'dev@surxtech.com',
    avatarUrl: '/images/team/vikram.svg',
    handle: 'vikramsharma',
    status: 'In Code ⚙️',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #e0f2fe 50%, #93c5fd 100%)',
  },
  {
    id: 'rohan',
    icon: '🎬',
    bg: 'linear-gradient(135deg,#0369a1,#38bdf8)',
    teamTitle: 'Content & Media',
    memberName: 'Rohan Patel',
    roleTitle: 'Media Lead & Editor',
    skillSummary: 'Premiere · Motion Graphics · Brand Films · Social',
    bio: 'Creative storyteller transforming raw footage into broadcast-quality promotional films, social media reels, motion graphics intros, and sound designs.',
    skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    experience: '4+ Years Experience · 1.5M+ Social Views',
    linkedin: 'https://linkedin.com',
    email: 'media@surxtech.com',
    avatarUrl: '/images/team/rohan.svg',
    handle: 'rohanpatel',
    status: 'Creating 🎬',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #ebf8ff 50%, #7dd3fc 100%)',
  },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="section alt" id="team" style={{ padding: '80px 24px', overflow: 'hidden' }}>
      <div className="team-hdr" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          The People
        </div>
        <h2 className="s-title">
          Meet Our <span className="highlight-text">Team</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: '12px', fontSize: '15px', maxWidth: '580px', margin: '12px auto 0' }}>
          A tight-knit crew of designers, developers, and strategists who love building things that matter. Hover or move your cursor to interact with our 3D profiles.
        </p>
      </div>

      <div
        className="team-interactive-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 12px'
        }}
      >
        {members.map((m) => (
          <div key={m.id} style={{ cursor: 'pointer' }} onClick={() => setActiveMember(m)}>
            <ProfileCard
              avatarUrl={m.avatarUrl}
              miniAvatarUrl={m.avatarUrl}
              name={m.memberName}
              title={m.roleTitle}
              handle={m.handle}
              status={m.status}
              innerGradient={m.innerGradient}
              contactText="View Profile"
              onContactClick={() => setActiveMember(m)}
            />
          </div>
        ))}
      </div>

      {/* TEAM MEMBER PROFILE MODAL */}
      {activeMember && (
        <div className="modal-overlay" onClick={() => setActiveMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <button className="modal-close" onClick={() => setActiveMember(null)} aria-label="Close profile">
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px' }}>
              <div
                className="team-ava"
                style={{
                  background: activeMember.bg,
                  fontSize: '32px',
                  width: '68px',
                  height: '68px',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
                }}
              >
                {activeMember.icon}
              </div>
              <div>
                <span className="s-label" style={{ fontSize: '11px', margin: 0 }}>
                  {activeMember.teamTitle}
                </span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink)', lineHeight: '1.2' }}>
                  {activeMember.memberName}
                </h3>
                <div style={{ fontSize: '13.5px', color: 'var(--blue)', fontWeight: 600 }}>
                  {activeMember.roleTitle}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '10px 16px',
                background: 'rgba(37,99,235,0.08)',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--blue)',
                marginBottom: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <CheckCircle2 size={16} /> {activeMember.experience}
            </div>

            <p style={{ color: 'var(--muted)', lineHeight: '1.75', fontSize: '14.5px', marginBottom: '24px' }}>
              {activeMember.bio}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--ink)',
                  marginBottom: '10px',
                }}
              >
                Core Expertise &amp; Skills
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {activeMember.skills.map((skill, idx) => (
                  <span key={idx} className="b-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
              {activeMember.portfolioUrl && (
                <a
                  href={activeMember.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #0284c7)',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    padding: '12px 20px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '10px',
                  }}
                >
                  <Globe size={16} /> Visit Portfolio
                </a>
              )}
              <a
                href={`mailto:${activeMember.email}`}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '13.5px', padding: '12px 20px' }}
              >
                <Mail size={16} /> Email {activeMember.memberName.split(' ')[0]}
              </a>
              {activeMember.linkedin && (
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn"
                  style={{ width: '44px', height: '44px' }}
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {activeMember.github && (
                <a
                  href={activeMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soc-btn"
                  style={{ width: '44px', height: '44px' }}
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
