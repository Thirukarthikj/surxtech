import React, { useEffect } from 'react';

const SITE_URL = 'https://www.surxtech.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;
const DEFAULT_TITLE = 'SURXTECH | IT Company & Software Development in Dindigul';
const DEFAULT_DESC =
  'SURXTECH provides website development, mobile apps, AI solutions and custom software for businesses, along with MCA, BCA and engineering student project guidance in Tamil Nadu.';

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema = null,
  breadcrumbs = null,
}) {
  let cleanPath = canonical;
  if (cleanPath && cleanPath !== '/' && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }
  const fullCanonical = cleanPath
    ? cleanPath.startsWith('http')
      ? cleanPath
      : `${SITE_URL}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`
    : `${SITE_URL}/`;

  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set/update meta tag
    const setMeta = (attr, key, val) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    // 2. Primary Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('property', 'og:site_name', 'SURXTECH');
    setMeta('property', 'og:locale', 'en_IN');

    // 4. Twitter Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullOgImage);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonical);

    // 6. JSON-LD Schemas
    const schemasToInject = [];

    // Auto-generate BreadcrumbList schema if breadcrumbs are provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: bc.name,
          item: bc.item.startsWith('http') ? bc.item : `${SITE_URL}${bc.item}`,
        })),
      });
    }

    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    // Clean up previous dynamic schema tags
    document.querySelectorAll('script[data-dynamic-seo="true"]').forEach((el) => el.remove());

    // Inject updated schemas
    schemasToInject.forEach((sch) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-seo', 'true');
      script.textContent = JSON.stringify(sch);
      document.head.appendChild(script);
    });

    return () => {
      // Optional cleanup on unmount
      document.querySelectorAll('script[data-dynamic-seo="true"]').forEach((el) => el.remove());
    };
  }, [title, description, fullCanonical, ogType, fullOgImage, schema, breadcrumbs]);

  return null;
}

