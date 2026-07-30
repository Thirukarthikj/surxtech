import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import TextType from './TextType';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>

      <div className="hero-eyebrow">
        IT Startup · Design · Develop · Deliver
      </div>

      <h1 className="hero-h1">
        <TextType
          text={[
            'CREATIVE\nDESIGN.\nSMART CODE.',
            'WE BUILD DIGITAL\nPRODUCTS THAT\nMATTER.',
            'CRAFTED FOR\nPERFORMANCE &\nSCALE.'
          ]}
          typingSpeed={60}
          deletingSpeed={35}
          pauseDuration={2500}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="hero-typing-cursor"
        />
      </h1>

      <p className="hero-sub">
        We are <strong>SurxTech</strong> — a results-driven IT startup building{' '}
        <strong>web apps, mobile products, and digital brands</strong> that stand out in a crowded world.
      </p>

      <div className="hero-btns">
        <Link to="/contact" className="btn-primary">
          Start a Project <ArrowRight size={16} />
        </Link>
        <Link to="/work" className="btn-outline">
          See Our Work <ArrowDown size={16} />
        </Link>
      </div>

      <div className="hero-badge-strip">
        <div>
          <div className="hb-val">100%</div>
          <div className="hb-label">Client Satisfaction</div>
        </div>
        <div className="hb-div"></div>
        <div>
          <div className="hb-val">24/7</div>
          <div className="hb-label">Support Available</div>
        </div>
        <div className="hb-div"></div>
        <div>
          <div className="hb-val">Fast</div>
          <div className="hb-label">Turnaround</div>
        </div>
      </div>
    </section>
  );
}
