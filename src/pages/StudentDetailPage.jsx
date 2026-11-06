import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { studentServices } from '../data/solutionsData';
import { createServiceSchema, createFAQSchema } from '../utils/seoSchemas';
import { ArrowRight, CheckCircle2, ShieldCheck, GraduationCap, Code2, BookOpen, MessageCircle, ChevronRight, Video, HelpCircle } from 'lucide-react';

export default function StudentDetailPage({ defaultSlug }) {
  const location = useLocation();
  const pathSlug = location.pathname.replace(/^\/|\/$/g, '');
  const slug = defaultSlug || pathSlug;

  const project = studentServices.find((p) => p.slug === slug) || studentServices[0];

  const projectFaqs = project.faqs.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  const pageSchema = [
    createServiceSchema({
      name: project.title,
      description: project.metaDesc,
      url: project.path,
      serviceType: project.shortTitle,
    }),
    createFAQSchema(projectFaqs),
  ];

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Student Projects', item: '/student-projects' },
    { name: project.shortTitle, item: project.path },
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <SEO
        title={project.metaTitle}
        description={project.metaDesc}
        canonical={project.path}
        schema={pageSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Breadcrumb Navigation */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 16px' }}>
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
          <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/student-projects" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Student Projects</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#059669', fontWeight: 600 }}>{project.shortTitle}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <div className="s-label" style={{ justifyContent: 'center' }}>
            <span style={{ fontSize: '16px', marginRight: '6px' }}>{project.icon}</span> {project.primaryKeyword}
          </div>
          <h1 className="s-title" style={{ fontSize: 'clamp(32px, 4.8vw, 50px)', marginBottom: '18px', lineHeight: 1.15 }}>
            {project.title}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '17px', lineHeight: '1.7', maxWidth: '780px', margin: '0 auto 28px' }}>
            {project.tagline}. {project.description}
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 28px' }}>
              Enquire About {project.shortTitle} <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/919342553805?text=Hi%20SurxTech!%20I%20am%20a%20student%20inquiring%20about%20${encodeURIComponent(project.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '14px 28px' }}
            >
              <MessageCircle size={16} color="#10b981" /> WhatsApp Guidance Helpline
            </a>
          </div>
        </div>
      </section>

      {/* Educational Mentoring Commitment */}
      <section className="section alt" style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', background: 'var(--surface)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '20px', padding: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <ShieldCheck size={32} color="#10b981" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--ink)' }}>
              100% Comprehension Guarantee: You Understand What You Present
            </div>
            <div style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', lineHeight: '1.6' }}>
              We do not treat student projects as mere file downloads. We conduct structured code walkthroughs explaining module logic, algorithms, and database queries so you master the system and excel in your college viva examination.
            </div>
          </div>
        </div>
      </section>

      {/* Target Students & Overview */}
      <section className="section" style={{ padding: '50px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <div className="s-label">Eligibility &amp; Target Course</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', marginBottom: '16px' }}>
              Who Should Choose {project.shortTitle}?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', lineHeight: '1.7', marginBottom: '20px' }}>
              {project.targetAudience}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                <CheckCircle2 size={18} color="#10b981" /> Fully aligned with university syllabus &amp; guidelines
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                <CheckCircle2 size={18} color="#10b981" /> Working localhost installation setup on your laptop
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--ink)' }}>
                <CheckCircle2 size={18} color="#10b981" /> 1-on-1 viva voice question-and-answer preparation
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '18px' }}>
              What Makes Our {project.shortTitle} Guidance Different?
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>
                <Code2 size={20} color="var(--blue)" style={{ flexShrink: 0 }} />
                <span><strong>Industry Clean Code:</strong> Commented source code written to production coding standards.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>
                <BookOpen size={20} color="#10b981" style={{ flexShrink: 0 }} />
                <span><strong>University Format Documentation:</strong> Full IEEE / college format report with diagrams.</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5' }}>
                <Video size={20} color="#8b5cf6" style={{ flexShrink: 0 }} />
                <span><strong>Presentation Ready:</strong> Professional PPT slides for Review 1, Review 2, and Final Viva.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Features & Syllabus */}
      <section className="section alt">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Technical Scope</div>
            <h2 className="s-title">Curriculum &amp; Technical Features</h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
              Modern technologies and architectures integrated into your project submission.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <CheckCircle2 size={22} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: 600, lineHeight: '1.4' }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Submission Assets</div>
            <h2 className="s-title">Project Package Deliverables</h2>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '15px' }}>
              Everything required by college departments for top review marks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {project.deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={projectFaqs} title={`${project.shortTitle} FAQs`} subtitle="Student Questions" />

      {/* Other Project Tracks */}
      <section className="section alt" style={{ paddingBottom: '40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="s-label" style={{ justifyContent: 'center' }}>Explore Other Tracks</div>
            <h2 className="s-title" style={{ fontSize: '26px' }}>Other Student Project Specializations</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {studentServices
              .filter((p) => p.slug !== project.slug)
              .slice(0, 4)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={other.path}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '20px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                  className="hover-card"
                >
                  <div style={{ fontSize: '26px', marginBottom: '8px' }}>{other.icon}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>
                    {other.shortTitle}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    View Guidance <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to Get Started with Your ${project.shortTitle}?`}
        subtitle="Contact our Nilakottai mentoring team today to discuss project titles, synopsis approval, and scheduling your first code walkthrough."
      />
    </div>
  );
}
