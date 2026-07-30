import React from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, UserCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose, onContact }) {
  if (!project) return null;

  const details = project.fullDetails || {};

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {project.image && (
          <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <div className="work-chip" style={{ marginBottom: '12px' }}>
          {project.chip}
        </div>
        <h3 style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', fontWeight: 800, color: 'var(--ink)', marginBottom: '16px' }}>
          {project.title}
        </h3>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '14px 20px', background: 'var(--bg)', borderRadius: '12px', marginBottom: '24px' }}>
          {details.client && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
              <UserCheck size={16} color="var(--blue)" />
              <span>Client: <strong>{details.client}</strong></span>
            </div>
          )}
          {details.timeline && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
              <Calendar size={16} color="var(--blue)" />
              <span>Timeline: <strong>{details.timeline}</strong></span>
            </div>
          )}
        </div>

        <p style={{ color: 'var(--muted)', lineHeight: '1.75', marginBottom: '24px', fontSize: '15px' }}>
          {details.summary || project.desc}
        </p>

        {details.results && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '14px' }}>
              Project Results &amp; Impact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {details.results.map((res, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--ink2)' }}>
                  <CheckCircle2 size={16} color="var(--sky)" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {project.tags.map((t, i) => (
            <span key={i} className="w-tag">
              {t}
            </span>
          ))}
        </div>

        <button
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => {
            onClose();
            onContact();
          }}
        >
          Start a Similar Project <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
