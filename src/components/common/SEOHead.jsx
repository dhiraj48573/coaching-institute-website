import { useEffect } from 'react';
import { instituteConfig } from '../../config/institute.config';

/**
 * Dynamic SEO component that updates title, meta tags, and structured data
 */
export const SEOHead = ({ title, description, path = '' }) => {
  const fullTitle = title 
    ? `${title} | ${instituteConfig.identity.name}`
    : instituteConfig.seo.siteTitle;

  const metaDesc = description || instituteConfig.seo.defaultDescription;
  const canonicalUrl = `${instituteConfig.seo.canonicalUrl}${path}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDesc);

    // 3. EducationalOrganization Schema.org JSON-LD
    const schemaId = 'educational-organization-schema';
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": instituteConfig.identity.name,
      "alternateName": instituteConfig.identity.shortName,
      "url": instituteConfig.seo.canonicalUrl,
      "logo": instituteConfig.identity.logoImage || `${instituteConfig.seo.canonicalUrl}/favicon.svg`,
      "description": instituteConfig.seo.defaultDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${instituteConfig.contact.address.line1}, ${instituteConfig.contact.address.line2}`,
        "addressLocality": instituteConfig.contact.address.city,
        "addressRegion": instituteConfig.contact.address.state,
        "postalCode": instituteConfig.contact.address.pincode,
        "addressCountry": instituteConfig.contact.address.country,
      },
      "telephone": instituteConfig.contact.phone,
      "email": instituteConfig.contact.email,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Coaching Programs",
        "itemListElement": instituteConfig.courses.map((course, idx) => ({
          "@type": "Course",
          "position": idx + 1,
          "name": course.name,
          "description": course.shortDescription,
          "provider": {
            "@type": "EducationalOrganization",
            "name": instituteConfig.identity.name
          }
        }))
      }
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [fullTitle, metaDesc, canonicalUrl]);

  return null;
};

export default SEOHead;
