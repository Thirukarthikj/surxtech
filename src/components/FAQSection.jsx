import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How fast can SurxTech start working on my project?',
    answer: 'We can typically kick off within 24 to 48 hours after our initial discovery call and scope agreement. We assign dedicated resources right away to keep momentum strong.',
  },
  {
    question: 'What is the typical turnaround time for a web or mobile application?',
    answer: 'Standard landing pages or brand packages take 1 to 2 weeks. Full custom web SaaS platforms or mobile applications take between 3 to 6 weeks depending on feature complexity.',
  },
  {
    question: 'Will I own 100% of the code, design, and intellectual property?',
    answer: 'Absolutely. Upon project completion and final payment, 100% ownership of all source code, Figma design files, assets, and intellectual property transfers directly to you.',
  },
  {
    question: 'Do you offer ongoing post-launch maintenance and support?',
    answer: 'Yes! We provide 24/7 post-launch technical support, bug fixing, server management, and continuous feature updates to ensure your product operates smoothly as it grows.',
  },
  {
    question: 'How do you handle revisions during the design & build phase?',
    answer: 'We operate in agile sprints with scheduled milestone demos. You get structured revision rounds at each phase (wireframing, visual design, and staging build) so you are always in control.',
  },
  {
    question: 'What payment options and milestones do you offer?',
    answer: 'We split project investments into flexible milestone payments (typically 50% deposit to start and 50% upon final launch approval, or 3-part milestones for larger builds).',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section alt" id="faq">
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="s-label" style={{ justifyContent: 'center' }}>
          <HelpCircle size={14} style={{ marginRight: '4px' }} /> Got Questions?
        </div>
        <h2 className="s-title">
          Frequently Asked <span className="ghost">Questions</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: '12px', fontWeight: '300', fontSize: '15px' }}>
          Everything you need to know about working with SurxTech.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggle(idx)} type="button">
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
