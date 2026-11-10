import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { studentServices } from '../data/solutionsData';
import { createServiceSchema, createFAQSchema } from '../utils/seoSchemas';
import { GraduationCap, ArrowRight, CheckCircle2, ShieldCheck, Code2, BookOpen, Video, HelpCircle, MessageCircle } from 'lucide-react';

export default function StudentProjectsPage() {
  const pageFaqs = [
    {
      question: 'Which college degrees and courses does SURXTECH support for projects?',
      answer:
        'We mentor students enrolled in MCA, BCA, B.Sc Computer Science, B.Sc Information Technology, BE Computer Science, B.Tech IT, and AI & Data Science engineering programs across colleges and universities in Tamil Nadu.',
    },
    {
      question: 'What materials are included in the student project package?',
      answer:
        'Each student project package includes: 1) Complete, bug-free, well-commented source code, 2) Complete project documentation report adhering to college/Anna University format, 3) Review presentation slides (PPT), 4) ER & UML system architecture diagrams, and 5) Detailed code explanation sessions for viva examination defense.',
    },
    {
      question: 'Can you help us with custom project ideas approved by our college guide?',
      answer:
        'Yes. If your college professor or guide has provided a specific IEEE paper, problem statement, or custom title, our engineering team will architect and implement that exact topic to meet your institution requirements.',
    },
    {
      question: 'Will I understand the project well enough to answer external viva examiners?',
      answer:
        'Yes. Our core commitment is genuine student understanding. We conduct 1-on-1 code explanation sessions explaining how the modules work, how the database interacts, and the theoretical concepts behind the project so you can answer any viva question with confidence.',
    },
  ];

  const pageSchema = [
    createServiceSchema({
      name: 'College Student Project Guidance & Technical Mentoring',
      description:
        'Professional final year and mini project development for MCA, BCA, B.Sc CS, BE, and B.Tech students in Tamil Nadu. Clean source code, documentation, PPT, and viva preparation.',
      url: '/student-projects',
    }),
    createFAQSchema(pageFaqs),
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Student Projects', item: '/student-projects' },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title="Student Project Center in Tamil Nadu | Final Year Projects | SURXTECH"
        description="Professional final year and mini project development for MCA, BCA, B.Sc CS, BE, and B.Tech students in Tamil Nadu. Source code, report, PPT, and viva coaching."
        canonical="/student-projects"
        schema={pageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Header */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '30px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <GraduationCap size={14} style={{ marginRight: '4px' }} /> Academic Excellence &amp; Technical Mentoring
        </div>
        <h1 className="s-title" style={{ fontSize: 'clamp(32px, 4.8vw, 50px)', marginBottom: '16px' }}>
          College Student <span className="highlight-text">Project Guidance</span> in Tamil Nadu
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '16.5px', maxWidth: '780px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          SURXTECH mentors <strong>MCA, BCA, B.Sc CS, BE, and B.Tech students</strong> through real-world software project implementations. We pair production-quality source code with complete academic documentation, presentation slides, and line-by-line viva coaching.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">
            Enquire About Student Projects <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/919342553805?text=Hi%20SurxTech!%20I%20am%20a%20college%20student%20looking%20for%20project%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <MessageCircle size={16} color="#10b981" /> WhatsApp Student Helpline
          </a>
        </div>
      </section>

      {/* Ethical Educational Support Commitment Banner */}
      <section className="section alt" style={{ padding: '36px 24px' }}>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'var(--surface)',
            border: '1px solid rgba(37, 99, 235, 0.25)',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <ShieldCheck size={36} color="var(--blue)" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '6px' }}>
              Responsible Academic Mentoring &amp; Learning Integrity
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: '1.6', margin: 0 }}>
              At SURXTECH, our focus is empowering students with practical coding competence. We teach you how the architecture works, walk you through the database schemas, and prepare you to present your project with confidence before external examiners. We promote learning, understanding, and technical growth.
            </p>
          </div>
        </div>
      </section>

      {/* Degrees & Streams Supported */}
      <section className="section">
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Academic Programs</div>
          <h2 className="s-title">Degrees &amp; Streams We Mentor</h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
            Specialized project architectures conforming to university academic standards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { degree: 'MCA (Master of Computer Applications)', desc: 'Cloud SaaS, MERN full-stack, enterprise databases & IEEE-aligned papers.' },
            { degree: 'BE / B.Tech (CSE, IT, AI & Data Science)', desc: 'Deep learning, computer vision, distributed systems & novel algorithm benchmarks.' },
            { degree: 'BCA (Bachelor of Computer Applications)', desc: 'Practical database applications, modern React/Node web portals & Python automation.' },
            { degree: 'B.Sc Computer Science & IT', desc: 'Core programming concepts, database management systems & clean web interfaces.' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '18px', padding: '24px', boxShadow: 'var(--shadow-xs)' }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>{item.degree}</div>
              <p style={{ color: 'var(--muted)', fontSize: '13.5px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Disciplines Hub Grid */}
      <section className="section alt">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>Technologies &amp; Stacks</div>
          <h2 className="s-title">Explore Project Specializations</h2>
          <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
            Select your desired technology or degree track below to view syllabus, deliverables, and guidance details.
          </p>
        </div>

        <div className="home-hub-grid">
          {studentServices.map((proj) => (
            <Link key={proj.slug} to={proj.path} className="home-hub-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <div className="hub-card-icon" style={{ fontSize: '30px' }}>{proj.icon}</div>
                <span className="hub-card-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderColor: 'rgba(16, 185, 129, 0.25)' }}>
                  View Track
                </span>
              </div>
              <h3 className="hub-card-title">{proj.title}</h3>
              <div className="hub-card-sub" style={{ color: '#059669', fontWeight: 600 }}>{proj.primaryKeyword}</div>
              <p className="hub-card-desc">{proj.description}</p>
              <div className="hub-card-btn">
                <span>View Full Specifications</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section className="section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Complete Handover Package</div>
            <h2 className="s-title">What Every Student Receives</h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
              We ensure you have every technical and academic asset required for an outstanding submission.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { icon: <Code2 size={22} color="var(--blue)" />, title: 'Complete Working Source Code', desc: 'Modular, well-commented source code with local installation scripts.' },
              { icon: <BookOpen size={22} color="#10b981" />, title: 'Documentation Report (Docx & PDF)', desc: 'Conforming to university guidelines with ER diagrams, DFDs, and system architecture.' },
              { icon: <Video size={22} color="#8b5cf6" />, title: 'Presentation PPT & Demo Video', desc: 'Professional slide decks tailored for Review 1, Review 2, and Final Viva.' },
              { icon: <HelpCircle size={22} color="#f59e0b" />, title: 'Viva Voice Preparation & Q&A', desc: '1-on-1 code explanation sessions covering all modules and expected viva questions.' }
            ].map((d, i) => (
              <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--ink)', marginBottom: '6px' }}>{d.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)', margin: 0, lineHeight: '1.5' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={pageFaqs} title="Student Projects FAQ" subtitle="Got Questions?" />

      {/* CTA */}
      <CTASection
        title="Ready to Build an Outstanding Final Year Project?"
        subtitle="Connect with our software engineers in Nilakottai, Dindigul today for topic selection, synopsis approval, and step-by-step guidance."
      />
    </div>
  );
}

