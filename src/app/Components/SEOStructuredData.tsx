import React from 'react';

interface SEOStructuredDataProps {
  data: Record<string, any>;
}

export default function SEOStructuredData({ data }: SEOStructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
