import React from 'react';

const items = [
  'Web Development',
  'App Development',
  'Graphic Design',
  'Video Editing',
  'UI / UX Design',
  'Branding & Identity',
  'Content Creation',
  'Poster Design',
];

export default function MarqueeBanner() {
  const fullItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {fullItems.map((item, idx) => (
          <span key={idx} className="m-item">
            {item}
            <span className="dot"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
