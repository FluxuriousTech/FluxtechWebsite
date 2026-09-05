import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Fluxurious Tech';
const SITE_URL = 'https://www.fluxurioustech.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_DESCRIPTION = 'Custom digital products built with precision. Web development, mobile apps & MVP studio in Mumbai. Launch-ready websites & apps delivered in 4-week sprints.';

/**
 * SEOHead — Reusable component for per-page SEO meta tags.
 *
 * @param {string} title         — Page title (appended with " | Fluxurious Tech" unless it already contains it)
 * @param {string} description   — Meta description (max ~160 chars recommended)
 * @param {string} canonicalPath — Path portion of the canonical URL, e.g. "/services"
 * @param {string} ogImage       — Full URL to the Open Graph image
 * @param {string} ogType        — Open Graph type (default: "website")
 * @param {object|array} structuredData — JSON-LD structured data object(s)
 */
const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  structuredData = null,
}) => {
  const fullTitle = title && !title.includes(SITE_NAME)
    ? `${title} | ${SITE_NAME}`
    : title || SITE_NAME;

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  // Support both a single schema object and an array of schemas
  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
