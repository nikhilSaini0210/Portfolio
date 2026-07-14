import { SEO_CONFIG } from "@/data/seo";
import { type FC } from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

const Seo: FC<SeoProps> = ({ title, description, path }) => {
  const fullTitle = title ? `${title} | ${SEO_CONFIG.author}` : SEO_CONFIG.title;
  const metaDescription = description || SEO_CONFIG.description;
  const url = `${SEO_CONFIG.siteUrl}${path}`;
  const ogImageUrl = `${SEO_CONFIG.siteUrl}${SEO_CONFIG.ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SEO_CONFIG.author} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />

      <meta name="author" content={SEO_CONFIG.author} />
      <meta name="keywords" content={SEO_CONFIG.keywords.join(", ")} />
      <meta name="robots" content={SEO_CONFIG.robots.join(", ")} />
    </Helmet>
  );
};

export default Seo;
