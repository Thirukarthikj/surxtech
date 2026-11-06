// Verified Structured Data (JSON-LD) for SURXTECH

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SURXTECH',
  legalName: 'SURXTECH Software Solutions',
  url: 'https://www.surxtech.com',
  logo: 'https://www.surxtech.com/logo.png',
  description:
    'SURXTECH is an IT startup and software development company based in Nilakottai, Dindigul, Tamil Nadu, providing web development, mobile apps, AI solutions, and college student project guidance.',
  email: 'surxtech@gmail.com',
  telephone: '+919342553805',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Road',
    addressLocality: 'Nilakottai',
    addressRegion: 'Tamil Nadu',
    postalCode: '624208',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://instagram.com/surxtech',
    'https://linkedin.com/company/surxtech',
    'https://github.com/Thirukarthikj',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SURXTECH',
  url: 'https://www.surxtech.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.surxtech.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SURXTECH - IT Company & Software Development',
  image: 'https://www.surxtech.com/logo.png',
  url: 'https://www.surxtech.com',
  telephone: '+919342553805',
  email: 'surxtech@gmail.com',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nilakottai Town',
    addressLocality: 'Nilakottai',
    addressRegion: 'Tamil Nadu',
    postalCode: '624208',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.1601,
    longitude: 77.8631,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Nilakottai' },
    { '@type': 'AdministrativeArea', name: 'Dindigul' },
    { '@type': 'AdministrativeArea', name: 'Batlagundu' },
    { '@type': 'AdministrativeArea', name: 'Madurai' },
    { '@type': 'AdministrativeArea', name: 'Theni' },
    { '@type': 'AdministrativeArea', name: 'Coimbatore' },
    { '@type': 'AdministrativeArea', name: 'Tiruchirappalli' },
    { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
  ],
};

export const createServiceSchema = ({ name, description, url, serviceType }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType: serviceType || name,
  provider: {
    '@type': 'LocalBusiness',
    name: 'SURXTECH',
    url: 'https://www.surxtech.com',
    telephone: '+919342553805',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nilakottai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  },
  areaServed: {
    '@type': 'State',
    name: 'Tamil Nadu',
  },
  url: url.startsWith('http') ? url : `https://www.surxtech.com${url}`,
});

export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
});

export const createArticleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = 'J. Thirukarthik',
  image = 'https://www.surxtech.com/logo.png',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image,
  url: url.startsWith('http') ? url : `https://www.surxtech.com${url}`,
  datePublished: datePublished || '2026-01-15T09:00:00+05:30',
  dateModified: dateModified || '2026-11-06T12:00:00+05:30',
  author: {
    '@type': 'Person',
    name: authorName,
    jobTitle: 'Founder & Tech Lead',
    worksFor: {
      '@type': 'Organization',
      name: 'SURXTECH',
    },
  },
  publisher: {
    '@type': 'Organization',
    name: 'SURXTECH',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.surxtech.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url.startsWith('http') ? url : `https://www.surxtech.com${url}`,
  },
});

