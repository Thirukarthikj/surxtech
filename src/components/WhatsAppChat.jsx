import React, { useState, useEffect, useRef } from 'react';
import { X, Send, ArrowRight, Bot, MessageCircle, Sparkles } from 'lucide-react';
import { getAIResponse } from '../utils/surxtechAI';
import './WhatsAppChat.css';

export default function WhatsAppChat({
  phoneNumber = '919342553805', // +91 9342553805
  companyName = 'SurxTech',
  defaultGreeting = 'Hi SurxTech! I am interested in discussing a project.',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' or 'whatsapp'
  const [inputText, setInputText] = useState('');
  const [showTooltip, setShowTooltip] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 **Hello! I am SurxTech AI**, the AI chatbot designed to communicate with our clients.\n\nI can help you explore our services, recommend modern tech stacks, discuss project ideas, estimate timelines, or guide you through **College Mini/Major Projects & Internships**!",
      time: 'Just now',
      actionLabel: 'Chat on WhatsApp (+91 93425 53805)',
      whatsappText: 'Hi SurxTech! I am chatting with SurxTech AI and would like to discuss a project.',
    },
  ]);

  const popupRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat when new messages or typing indicator appear
  useEffect(() => {
    if (activeTab === 'ai' && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [aiMessages, isTyping, activeTab]);

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
  };

  const handleAISend = (queryText) => {
    const textToSend = queryText || inputText.trim();
    if (!textToSend) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setAiMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Realistic typing delay for response
    setTimeout(() => {
      const response = getAIResponse(textToSend);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionLabel: response.actionLabel,
        whatsappText: response.whatsappText,
      };
      setAiMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'ai') {
      handleAISend();
    } else {
      openWhatsApp(inputText);
    }
  };

  const toggleChat = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
    setShowTooltip(false);
  };

  const aiPrompts = [
    '🎓 College Projects & Internships',
    '⚡ Recommend Tech Stack',
    '💰 Pricing & Timelines',
    '👨‍💻 SurxTech Core Team',
  ];

  const waPrompts = [
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

  // Helper to render bold markdown and linebreaks simply
  const renderFormattedText = (content) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <span
          key={idx}
          dangerouslySetInnerHTML={{ __html: formatted }}
          style={{ display: 'block', minHeight: line === '' ? '8px' : 'auto' }}
        />
      );
    });
  };

  return (
    <div className="wa-chat-wrapper" ref={popupRef}>
      {/* Floating Tooltip */}
      {showTooltip && !isOpen && (
        <div className="wa-tooltip" onClick={toggleChat}>
          <span>Ask AI or Chat on WhatsApp</span>
          <span style={{ fontSize: '15px' }}>👋</span>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        className="wa-trigger-btn"
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open live chat assistant'}
        title="Ask AI or Chat on WhatsApp"
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
        <div className="wa-popup" role="dialog" aria-label="SurxTech Live Chat">
          {/* Header */}
          <div className="wa-header">
            <div className="wa-header-top">
              <div className="wa-header-info">
                <div className="wa-avatar">
                  {activeTab === 'ai' ? <Sparkles size={20} color="#0284c7" /> : <span>S</span>}
                  <span className="wa-avatar-status" />
                </div>
                <div>
                  <h4 className="wa-title">
                    {activeTab === 'ai' ? 'SurxTech AI' : `${companyName} Support`}
                  </h4>
                  <p className="wa-subtitle">
                    <span
                      style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#25D366',
                      }}
                    />
                    {activeTab === 'ai' ? 'AI Chatbot · Client Communication' : 'Online · +91 93425 53805'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="wa-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={17} />
              </button>
            </div>

            {/* Dual Mode Tabs */}
            <div className="wa-nav-tabs">
              <button
                type="button"
                className={`wa-nav-tab ${activeTab === 'ai' ? 'active' : ''}`}
                onClick={() => setActiveTab('ai')}
              >
                <Bot size={14} /> SurxTech AI
              </button>
              <button
                type="button"
                className={`wa-nav-tab ${activeTab === 'whatsapp' ? 'active' : ''}`}
                onClick={() => setActiveTab('whatsapp')}
              >
                <MessageCircle size={14} /> WhatsApp
              </button>
            </div>
          </div>

          {/* AI MODE BODY */}
          {activeTab === 'ai' && (
            <div className="wa-body">
              {aiMessages.map((msg) => (
                <div key={msg.id} className={`wa-bubble ${msg.sender}`}>
                  <div>{renderFormattedText(msg.text)}</div>

                  {msg.actionLabel && msg.whatsappText && (
                    <button
                      type="button"
                      className="wa-handoff-btn"
                      onClick={() => openWhatsApp(msg.whatsappText)}
                      title="Continue this conversation on WhatsApp"
                    >
                      <MessageCircle size={13} /> {msg.actionLabel}
                    </button>
                  )}

                  <div className="wa-bubble-time">{msg.time}</div>
                </div>
              ))}

              {isTyping && (
                <div className="wa-typing-indicator">
                  <span className="wa-typing-dot" />
                  <span className="wa-typing-dot" />
                  <span className="wa-typing-dot" />
                </div>
              )}

              <div ref={messagesEndRef} />

              <div className="wa-chips-title" style={{ marginTop: '8px' }}>
                Quick Topics:
              </div>
              <div className="wa-chips">
                {aiPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="wa-chip"
                    onClick={() => handleAISend(p)}
                  >
                    <span>{p}</span>
                    <ArrowRight size={13} opacity={0.6} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* WHATSAPP DIRECT MODE BODY */}
          {activeTab === 'whatsapp' && (
            <div className="wa-body">
              <div className="wa-bubble ai">
                <div>Hello! 👋 Ready to speak directly with our team?</div>
                <div style={{ marginTop: '4px' }}>
                  Choose a topic below or type your inquiry to launch a direct WhatsApp chat with{' '}
                  <strong>+91 93425 53805</strong>:
                </div>
                <div className="wa-bubble-time">Just now</div>
              </div>

              <div className="wa-chips-title">Frequent Inquiries:</div>
              <div className="wa-chips">
                {waPrompts.map((q, idx) => (
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
          )}

          {/* Footer Input */}
          <div className="wa-footer">
            <form onSubmit={handleFormSubmit} className="wa-input-row">
              <input
                type="text"
                id="chatMessage"
                name="chatMessage"
                className="wa-input"
                placeholder={activeTab === 'ai' ? 'Ask SurxTech AI about your project...' : 'Type WhatsApp message...'}
                aria-label={activeTab === 'ai' ? 'Ask SurxTech AI about your project' : 'Type WhatsApp message'}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className={`wa-send-btn ${activeTab === 'whatsapp' ? 'wa-send-wa' : ''}`}
                aria-label={activeTab === 'ai' ? 'Send question to AI' : 'Send message to WhatsApp'}
                title={activeTab === 'ai' ? 'Send to AI' : 'Send to WhatsApp'}
              >
                <Send size={15} style={{ marginLeft: '2px' }} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
