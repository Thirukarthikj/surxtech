import React, { useState, useEffect, useRef } from 'react';
import { X, Send, ArrowRight, MessageCircle } from 'lucide-react';
import './WhatsAppChat.css';

export default function WhatsAppChat({
  phoneNumber = '919342553805', // +91 9342553805
  companyName = 'SurxTech',
  defaultGreeting = 'Hi SurxTech! I am interested in discussing a project.',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);
  const popupRef = useRef(null);

  // Auto-hide tooltip after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Close popup when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const openWhatsApp = (customText) => {
    const textToSend = customText || inputText.trim() || defaultGreeting;
    const encoded = encodeURIComponent(textToSend);
    const targetUrl = phoneNumber
      ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setInputText('');
    setIsOpen(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    openWhatsApp(inputText);
  };

  const quickPrompts = [
    {
      title: '🚀 Start a New Project',
      text: 'Hi SurxTech! I have an idea for a web or mobile application and would like to discuss it.',
    },
    {
      title: '🎓 College Project / Internship',
      text: 'Hi SurxTech! I am a student interested in college projects & internship opportunities.',
    },
    {
      title: '🎨 UI/UX & Motion Design',
      text: 'Hi SurxTech! I would like to explore UI/UX design, branding, and video editing services.',
    },
  ];

  const toggleChat = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    setShowTooltip(false);
  };

  return (
    <div className="wa-chat-wrapper" ref={popupRef}>
      {/* Floating Tooltip */}
      {showTooltip && !isOpen && (
        <div className="wa-tooltip" onClick={toggleChat}>
          <span>Chat with us</span>
          <span style={{ fontSize: '15px' }}>👋</span>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        className="wa-trigger-btn"
        onClick={toggleChat}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp live chat"}
        title="Chat with us on WhatsApp"
      >
        <span className="wa-online-dot" />
        {isOpen ? (
          <X size={26} strokeWidth={2.4} />
        ) : (
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
          </svg>
        )}
      </button>

      {/* Interactive Chat Popup */}
      {isOpen && (
        <div className="wa-popup" role="dialog" aria-label="WhatsApp Chat Window">
          {/* Header */}
          <div className="wa-header">
            <div className="wa-header-info">
              <div className="wa-avatar">
                <span>S</span>
                <span className="wa-avatar-status" />
              </div>
              <div>
                <h4 className="wa-title">{companyName} Support</h4>
                <p className="wa-subtitle">
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#25D366' }} />
                  Online · Typically replies fast
                </p>
              </div>
            </div>
            <button
              type="button"
              className="wa-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="wa-body">
            <div className="wa-bubble">
              <div>Hello there! 👋 Welcome to SurxTech.</div>
              <div style={{ marginTop: '4px' }}>
                How can our engineering and design team help you today? Choose a topic below or write to us directly:
              </div>
              <div className="wa-bubble-time">Just now</div>
            </div>

            <div className="wa-chips-title">Frequent Topics:</div>
            <div className="wa-chips">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="wa-chip"
                  onClick={() => openWhatsApp(q.text)}
                >
                  <span>{q.title}</span>
                  <ArrowRight size={13} opacity={0.6} />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="wa-footer">
            <form onSubmit={handleSend} className="wa-input-row">
              <input
                type="text"
                className="wa-input"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="wa-send-btn"
                aria-label="Send message on WhatsApp"
                title="Send message on WhatsApp"
              >
                <Send size={16} style={{ marginLeft: '2px' }} />
              </button>
            </form>
            <a
              href={phoneNumber ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Hi%20SurxTech` : "https://wa.me/?text=Hi%20SurxTech"}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-direct-link"
            >
              ⚡ Direct Chat: +91 93425 53805
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
