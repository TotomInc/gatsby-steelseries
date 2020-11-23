import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ pageTitle, pageDescription, pageUrl, shareTitle, shareDescription, shareImage }) => (
  <Helmet title={pageTitle}>
    <meta name="description" content={pageDescription} />
    <meta name="image" content={shareImage} />

    <meta property="og:url" content={pageUrl} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={shareTitle} />
    <meta property="og:description" content={shareDescription} />
    <meta property="og:image" content={shareImage || 'https://steelseries.totominc.io/default-share-image.png'} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="SteelSeries" />
    <meta name="twitter:title" content={shareTitle} />
    <meta name="twitter:description" content={shareDescription} />
    <meta name="twitter:image" content={shareImage} />

    <meta name="google-site-verification" content="N6sosyHR9ntKRDOF-bzLRS1Yy_Df98lyZEngPwvaqfI" />
  </Helmet>
);

export { SEO };
