import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { defaultFaqs } from '../data/solutionsData';

export { defaultFaqs };

export default function FAQSection({
  faqs = defaultFaqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Got Questions?',
  className = '',
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`section alt ${className}`} id="faq">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <HelpCircle size={14} style={{ marginRight: '4px' }} /> {subtitle}
        </div>
        <h2 className="s-title">
          {title.includes(' ') ? (
            <>
              {title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="highlight-text">{title.split(' ').slice(-1)}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: '12px', fontWeight: '300', fontSize: '15px', maxWidth: '600px', margin: '12px auto 0' }}>
          Clear answers to common questions about our business technology solutions and student project guidance.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggle(idx)} type="button" aria-expanded={isOpen}>
                <span>{faq.question}</span>
                <div className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                  <ChevronDown size={18} />
                </div>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
