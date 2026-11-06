// SurxTech Knowledge Engine & AI Consultant

export const SURXTECH_KNOWLEDGE = {
  company: 'SurxTech',
  tagline: 'Design. Develop. Deliver.',
  location: 'Nilakottai, Dindigul, Tamil Nadu · Remote Worldwide',
  email: 'surxtech@gmail.com',
  whatsapp: '+91 93425 53805',
  whatsappRaw: '919342553805',
  founders: [
    { name: 'J. Thirukarthik', role: 'Founder & Tech Lead', expertise: 'Web & Mobile Apps, Cloud Architecture, Scalable Backends' },
    { name: 'S. Surya', role: 'Co-Founder', expertise: 'Product Strategy, Business Growth & Operations' },
  ],
  team: [
    { name: 'Varun Raj', role: 'Full Stack Developer', portfolio: 'https://varunraj.web.app/' },
    { name: 'Raja Rajan', role: 'Full Stack Developer', expertise: 'Next.js, Node.js, Cloud APIs, Docker' },
    { name: 'Stephen Raj', role: 'UI/UX Designer', expertise: 'Figma, Product Design, Interactive Prototyping' },
    { name: 'Shivan', role: 'Video Editor & Motion Designer', expertise: 'Premiere Pro, After Effects, Reels & Promos' },
  ],
  collegeOfferings: {
    internships: 'Hands-on practical training on live client projects (React, Next.js, Node.js, Flutter, UI/UX). Includes verifiable completion certificates, mentorship by senior developers, and placement guidance.',
    projects: 'Mini and Major college projects across AI/ML, Full Stack Web, Mobile Apps, Cloud, and IoT. Includes complete source code, architecture diagrams, project documentation (report & PPT), and viva/demo preparation.',
  },
  services: [
    'Web Application Development (React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB)',
    'Mobile App Development (Flutter, React Native for iOS & Android)',
    'UI/UX Design & Design Systems (Figma, wireframes, user testing)',
    'Cloud Architecture & DevOps (AWS, Docker, CI/CD pipelines)',
    'Creative Media & Motion Video Editing (Brand promos, social reels, 3D motion VFX)',
    'College Student Projects & Internships (Mini/Major projects with full documentation)',
  ],
};

export function getAIResponse(userQuery) {
  const q = (userQuery || '').toLowerCase().trim();

  // 1. College Internships
  if (q.includes('intern') || q.includes('internship') || q.includes('training') || q.includes('student intern')) {
    return {
      text: `🎓 **SurxTech College Internships**\n\nWe provide real-world, industry-standard internships for engineering and diploma college students!\n\n• **Domains**: Full Stack Web (React/Next.js/Node), Mobile Apps (Flutter), UI/UX (Figma), and Backend APIs.\n• **Experience**: Work on live practical tasks guided directly by our core developers.\n• **Deliverables**: Verifiable Internship Certificate, Letter of Recommendation, and portfolio-ready project code.\n\nReady to apply or have questions about batch dates?`,
      actionLabel: 'Apply for Internship on WhatsApp',
      whatsappText: 'Hi SurxTech! I am a college student interested in internship opportunities at SurxTech.',
    };
  }

  // 2. College Projects (Mini & Major)
  if (q.includes('project') && (q.includes('college') || q.includes('student') || q.includes('major') || q.includes('mini') || q.includes('final year') || q.includes('academic') || q.includes('viva'))) {
    return {
      text: `📚 **College Projects (Mini & Major)**\n\nWe build custom, high-scoring academic projects for engineering & computer science students:\n\n• **Domains**: Full Stack Web, AI/ML, Flutter Mobile Apps, Cloud Systems & IoT.\n• **Included Package**: Complete clean source code, installation walkthrough, full Project Report / Documentation, PPT, and viva demo preparation.\n• **Tailored Topics**: We can implement your custom college idea or provide fresh innovative project titles.\n\nHave a specific project title or need recommendations?`,
      actionLabel: 'Discuss College Project on WhatsApp',
      whatsappText: 'Hi SurxTech! I need assistance with my college mini/major project. Please guide me.',
    };
  }

  // 3. Pricing / Cost / Budget / Quote
  if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('budget') || q.includes('rate') || q.includes('how much') || q.includes('quote')) {
    return {
      text: `💰 **SurxTech Pricing Philosophy**\n\nWe work with clear, milestone-based pricing tailored to your scope:\n\n• **Web & Landing Pages**: Fast turnaround sprints starting at affordable fixed tiers.\n• **Custom Web & Mobile Apps**: Transparent milestone payments based on features, UI/UX, and cloud architecture.\n• **College Projects & Internships**: Highly subsidized, student-friendly rates with full support.\n\nTell us what you're building, and we'll prepare a custom timeline and estimate!`,
      actionLabel: 'Get Instant Estimate on WhatsApp',
      whatsappText: 'Hi SurxTech! I would like to get a quote and timeline estimate for my project.',
    };
  }

  // 4. Team / Founders / Who made this
  if (q.includes('team') || q.includes('founder') || q.includes('who are you') || q.includes('thirukarthik') || q.includes('surya') || q.includes('developer') || q.includes('designer') || q.includes('varun')) {
    return {
      text: `👨‍💻 **Meet The SurxTech Core Team**\n\n• **J. Thirukarthik** — Founder & Tech Lead (Web, Mobile Apps & Cloud Architecture)\n• **S. Surya** — Co-Founder (Product Strategy & Client Operations)\n• **Varun Raj** — Full Stack Developer (React, Node, DB Architectures)\n• **Raja Rajan** — Full Stack Developer (Next.js, Cloud APIs & Docker)\n• **Stephen Raj** — UI/UX Designer (Product Design & Figma Systems)\n• **Shivan** — Video Editor & Motion Designer (Cinematic VFX & Reels)\n\nWe work closely with clients to turn ideas into launch-ready products!`,
      actionLabel: 'Connect with Founders on WhatsApp',
      whatsappText: 'Hi Thirukarthik & SurxTech team! I would like to connect regarding a project.',
    };
  }

  // 5. Tech Stack recommendations (e.g. mobile app, ecommerce, saas)
  if (q.includes('stack') || q.includes('tech') || q.includes('technology') || q.includes('mobile app') || q.includes('ecommerce') || q.includes('saas') || q.includes('flutter') || q.includes('react')) {
    return {
      text: `⚡ **SurxTech Recommended Tech Stacks**\n\n• **High-Scale Web Apps & SaaS**: Next.js (React) + TypeScript + Node.js + PostgreSQL / MongoDB + Tailwind CSS.\n• **Cross-Platform Mobile Apps**: Flutter or React Native for smooth 60fps iOS and Android from a single codebase.\n• **Cloud & DevOps**: AWS, Docker containers, Redis caching, and automated CI/CD.\n• **UI/UX & Branding**: Figma interactive wireframes and design systems.\n\nWhat kind of application are you planning? We can recommend the exact architecture!`,
      actionLabel: 'Consult Architecture on WhatsApp',
      whatsappText: 'Hi SurxTech! I need technical recommendations for building my application.',
    };
  }

  // 6. UI/UX & Design / Video editing
  if (q.includes('design') || q.includes('ui') || q.includes('ux') || q.includes('figma') || q.includes('video') || q.includes('editing') || q.includes('motion') || q.includes('reel')) {
    return {
      text: `🎨 **Design & Creative Media Services**\n\nLed by Stephen Raj (UI/UX) & Shivan (Video/Motion):\n\n• **Product Design**: User journeys, interactive clickable Figma prototypes, and responsive UI components.\n• **Brand Identity**: Modern logos, color guidelines, and marketing assets.\n• **Video Production**: Dynamic brand promo videos, motion graphics, and high-impact social media reels.\n\nWould you like to review sample design files or promo edits?`,
      actionLabel: 'Chat with Design Team on WhatsApp',
      whatsappText: 'Hi SurxTech! I am interested in UI/UX design and video production services.',
    };
  }

  // 7. Location & Contact
  if (q.includes('location') || q.includes('where') || q.includes('address') || q.includes('office') || q.includes('contact') || q.includes('call') || q.includes('phone') || q.includes('email') || q.includes('dindigul') || q.includes('nilakottai')) {
    return {
      text: `📍 **SurxTech Location & Contact Info**\n\n• **Office**: Nilakottai, Dindigul, Tamil Nadu, India (Remote Worldwide)\n• **Official WhatsApp / Phone**: +91 93425 53805\n• **Official Email**: surxtech@gmail.com\n\nWe serve clients across India, North America, Europe, and worldwide with agile remote communication!`,
      actionLabel: 'Call or WhatsApp +91 93425 53805',
      whatsappText: 'Hi SurxTech! I would like to get in touch with your Nilakottai / Remote team.',
    };
  }

  // 8. General Greeting / Intro
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('namaste') || q.includes('good morning') || q.includes('good evening') || q === '') {
    return {
      text: `👋 **Hello! I am SurxTech AI**, the AI chatbot for communicating with our clients.\n\nWhether you are planning a new software product, seeking architecture advice, or exploring college academic projects, I am here to help you with:\n\n1. **Web & Mobile App Development** (React, Next.js, Node.js, Flutter)\n2. **College Mini & Major Projects with Viva Prep**\n3. **Practical Student Internships with Certificates**\n4. **UI/UX Design, Branding & Cinematic Video Editing**\n\nWhat kind of project or idea would you like to discuss today?`,
      actionLabel: 'Chat with Our Founders on WhatsApp',
      whatsappText: 'Hi SurxTech! I am chatting with SurxTech AI and would like to discuss my project requirements.',
    };
  }

  // Default intelligent fallback
  return {
    text: `💡 **Thank you for reaching out to SurxTech!**\n\nOur engineering team specializes in custom software products, web/mobile applications, UI/UX design, and college student academic projects.\n\nTo give you the most accurate timeline, tech stack advice, and budget estimation, let's connect directly with our tech lead on WhatsApp!`,
    actionLabel: 'Continue on WhatsApp (+91 93425 53805)',
    whatsappText: `Hi SurxTech! I asked your AI assistant: "${userQuery}". Let's discuss this!`,
  };
}

