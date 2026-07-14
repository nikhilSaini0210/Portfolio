import { Helmet } from "react-helmet-async";
import { SEO_CONFIG } from "@/data/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { type FC } from "react";

const StructuredData: FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.title,
    email: SITE_CONFIG.email,
    url: SEO_CONFIG.siteUrl,
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bulandshahr",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React.js",
      "React Native",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "WebRTC",
      "Socket.io",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default StructuredData;
