import React, { useState } from 'react';
import { User, X, ArrowRight, CheckCircle2, Linkedin, Github, Mail, Globe, Sparkles } from 'lucide-react';
import ProfileCard from './ProfileCard';

const members = [
  {
    id: 'thirukarthick',
    icon: '⚡',
    bg: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
    teamTitle: 'Development Team',
    memberName: 'J. Thirukarthik',
    roleTitle: 'Founder & Tech Lead',
    skillSummary: 'Web · Mobile Apps · Architecture',
    bio: 'Lead architect behind SurxTech digital products. Thirukarthick specializes in building high-scale React, Next.js, Node.js applications and cloud infrastructures with robust security and performance.',
    skills: ['React', 'Next.js', 'Node.js', 'Flutter', 'TypeScript', 'AWS'],
    experience: '6+ Years Experience · 50+ Apps Delivered',
    portfolioUrl: 'https://thiruportfolio-navy.vercel.app/',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'surxtech@gmail.com',
    avatarUrl: '',
    handle: 'thirukarthick',
    status: 'Online ⚡',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #eff6ff 50%, #bfdbfe 100%)',
  },
  {
    id: 'surya',
    icon: '🚀',
    bg: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    teamTitle: 'Executive Team',
    memberName: 'S.Surya',
    roleTitle: 'Co-Founder',
    skillSummary: 'Strategy · Operations · Growth',
    bio: 'Co-Founder at SurxTech. Driving product strategy, business growth, client partnerships, and creative operations across all startup initiatives.',
    skills: ['Product Strategy', 'Business Growth', 'UI/UX Design', 'Client Relations', 'Operations'],
    experience: 'Co-Founder & Executive Lead',
    portfolioUrl: '',
    linkedin: 'https://linkedin.com',
    github: '',
    email: 'surya@surxtech.com',
    avatarUrl: '',
    handle: 'surya',
    status: 'Online 🚀',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #f5f3ff 50%, #ddd6fe 100%)',
  },
  {
    id: 'varunraj',
    icon: '💻',
    bg: 'linear-gradient(135deg,#0284c7,#06b6d4)',
    teamTitle: 'Development Team',
    memberName: 'Varun Raj',
    roleTitle: 'Full Stack Developer',
    skillSummary: 'Frontend · Backend · APIs',
    bio: 'Full Stack Developer at SurxTech specializing in building high-performance web applications, scalable backend microservices, and modern database architectures.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript'],
    experience: 'Full Stack Developer · SurxTech',
    portfolioUrl: 'https://varunraj.web.app/',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'surxtech@gmail.com',
    avatarUrl: '',
    handle: 'varunraj',
    status: 'Online 💻',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #f0fdfa 50%, #ccfbf1 100%)',
  },
  {
    id: 'rajarajan',
    icon: '⚙️',
    bg: 'linear-gradient(135deg,#059669,#10b981)',
    teamTitle: 'Development Team',
    memberName: 'Raja Rajan',
    roleTitle: 'Full Stack Developer',
    skillSummary: 'Next.js · Node.js · Cloud APIs',
    bio: 'Full Stack Developer engineering robust cloud-native systems, seamless API integrations, and intuitive responsive user interfaces for modern businesses.',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'SQL', 'Docker', 'Git'],
    experience: 'Full Stack Developer · SurxTech',
    portfolioUrl: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'surxtech@gmail.com',
    avatarUrl: '',
    handle: 'rajarajan',
    status: 'Online ⚙️',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #ecfdf5 50%, #a7f3d0 100%)',
  },
  {
    id: 'stephenraj',
    icon: '🎨',
    bg: 'linear-gradient(135deg,#ec4899,#f43f5e)',
    teamTitle: 'Design Team',
    memberName: 'Stephen Raj',
    roleTitle: 'UI/UX Designer',
    skillSummary: 'Product Design · Figma · Systems',
    bio: 'UI/UX Designer focused on crafting user-centered digital experiences, comprehensive design systems, interactive prototypes, and high-impact visual interfaces.',
    skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
    experience: 'UI/UX Designer · SurxTech',
    portfolioUrl: '',
    linkedin: 'https://linkedin.com',
    github: '',
    email: 'surxtech@gmail.com',
    avatarUrl: '',
    handle: 'stephenraj',
    status: 'Designing 🎨',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #fdf2f8 50%, #fbcfe8 100%)',
  },
  {
    id: 'shivan',
    icon: '🎬',
    bg: 'linear-gradient(135deg,#f59e0b,#ea580c)',
    teamTitle: 'Creative Media Team',
    memberName: 'Shivan',
    roleTitle: 'Video Editor & Motion Designer',
    skillSummary: 'Video Editing · Motion VFX · Reels',
    bio: 'Creative Video Editor and Motion Designer delivering cinematic brand videos, dynamic motion graphics, engaging short-form reels, and post-production visuals.',
    skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Reels & Shorts', 'Sound Design'],
    experience: 'Video Editor · SurxTech',
    portfolioUrl: '',
    linkedin: 'https://linkedin.com',
    github: '',
    email: 'surxtech@gmail.com',
    avatarUrl: '',
    handle: 'shivan',
    status: 'Editing 🎬',
    innerGradient: 'linear-gradient(160deg, #ffffff 0%, #fffbeb 50%, #fed7aa 100%)',
  },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState(null);

  const handleMemberClick = (m) => {
    if (m.portfolioUrl) {
      window.open(m.portfolioUrl, '_blank', 'noopener,noreferrer');
    } else {
      setActiveMember(m);
    }
  };

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
          The founders, developers, designers, and creatives behind SurxTech. Hover or click to explore profile details.
        </p>
      </div>

      <div
        className="team-interactive-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 340px))',
          justifyContent: 'center',
          gap: '32px',
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 12px'
        }}
      >
        {members.map((m) => (
          <div key={m.id} style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleMemberClick(m)}>
            <ProfileCard
              avatarUrl={m.avatarUrl}
              miniAvatarUrl={m.avatarUrl}
              icon={m.icon}
              name={m.memberName}
              title={m.roleTitle}
              skillSummary={m.skillSummary}
              handle={m.handle}
              status={m.status}
              innerGradient={m.innerGradient}
              contactText={m.portfolioUrl ? "View Portfolio" : "View Profile"}
              onContactClick={() => handleMemberClick(m)}
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
