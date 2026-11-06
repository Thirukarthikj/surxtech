import React from 'react';
import './ProfileCard.css';

export default function ProfileCard({
  icon = '⚡',
  cardBg = 'linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%)',
  bgImage = '',
  name = 'Team Member',
  title = 'Specialist',
  skillSummary = 'Creative & Technical Engineering',
  contactText = 'View Profile',
  linkedin = 'https://linkedin.com',
  github = 'https://github.com',
  instagram = 'https://instagram.com',
  email = 'surxtech@gmail.com',
  onContactClick,
}) {
  const handleSocialClick = (e, url) => {
    e.stopPropagation();
    if (!url) return;
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="parent" onClick={onContactClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onContactClick && onContactClick(); } }}>
      <div className="card" style={{ '--card-bg': cardBg, background: cardBg }}>
        {/* Position-related subtle background illustration */}
        {bgImage && (
          <div
            className="card-bg-layer"
            style={{ backgroundImage: `url(${bgImage})` }}
            aria-hidden="true"
          />
        )}

        <div className="logo" aria-hidden="true">
          <span className="circle circle1" />
          <span className="circle circle2" />
          <span className="circle circle3" />
          <span className="circle circle4" />
          <span className="circle circle5">
            {typeof icon === 'string' && icon.length <= 4 ? (
              <span style={{ fontSize: '24px', lineHeight: 1 }}>{icon}</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                  transform="translate(-45.91 0)"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                  transform="translate(0 -51.963)"
                />
              </svg>
            )}
          </span>
        </div>

        <div className="glass" aria-hidden="true" />

        <div className="content">
          <span className="title">{name}</span>
          <span className="role">{title}</span>
          <span className="text">{skillSummary}</span>
        </div>

        <div className="bottom">
          <div className="social-buttons-container">
            {/* Social Button 1: LinkedIn */}
            <button
              type="button"
              className="social-button social-button1"
              title="LinkedIn"
              aria-label={`${name}'s LinkedIn`}
              onClick={(e) => handleSocialClick(e, linkedin || 'https://linkedin.com')}
            >
              <svg viewBox="0 0 24 24" className="svg" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0-.01-3.24 1.62 1.62 0 0 0 .01 3.24M7.86 18.5V10.13H5.07V18.5h2.79z" />
              </svg>
            </button>

            {/* Social Button 2: GitHub or Portfolio */}
            <button
              type="button"
              className="social-button social-button2"
              title={github ? "GitHub" : "Portfolio"}
              aria-label={`${name}'s ${github ? "GitHub" : "Portfolio"}`}
              onClick={(e) => handleSocialClick(e, github || 'https://github.com')}
            >
              <svg viewBox="0 0 24 24" className="svg" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </button>

            {/* Social Button 3: Instagram */}
            <button
              type="button"
              className="social-button social-button3"
              title="Instagram"
              aria-label={`${name}'s Instagram`}
              onClick={(e) => handleSocialClick(e, instagram || 'https://instagram.com')}
            >
              <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
              </svg>
            </button>
          </div>

          <div
            className="view-more"
            onClick={(e) => {
              e.stopPropagation();
              onContactClick && onContactClick();
            }}
          >
            <button type="button" className="view-more-button">
              {contactText}
            </button>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
