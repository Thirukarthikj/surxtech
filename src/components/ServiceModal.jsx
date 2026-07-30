import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onContact }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div className="b-icon" style={{ margin: 0 }}>
            {service.icon}
          </div>
          <div>
            <span className="s-label" style={{ margin: 0 }}>
              Service {service.num}
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink)' }}>{service.name}</h3>
          </div>
        </div>

        <p style={{ color: 'var(--muted)', lineHeight: '1.75', marginBottom: '24px', fontSize: '15px' }}>
          {service.details || service.desc}
        </p>

        {service.deliverables && (
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '14px' }}>
              Key Deliverables
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {service.deliverables.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--ink2)' }}>
                  <CheckCircle2 size={16} color="var(--blue)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {service.tags.map((t, i) => (
            <span key={i} className="b-tag">
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
          Book {service.name} Project <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
