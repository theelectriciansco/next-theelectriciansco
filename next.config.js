/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/reviews/",
        destination: "/about/reviews/",
        permanent: true,
      },
      {
        source: "/meet-the-team/",
        destination: "/about/meet-the-team/",
        permanent: true,
      },
      {
        source: "/service-areas/",
        destination: "/about/service-areas/",
        permanent: true,
      },
      {
        source: "/residential-services/",
        destination: "/services/residential/",
        permanent: true,
      },
      {
        source: "/commercial-services/",
        destination: "/services/commercial/",
        permanent: true,
      },
      {
        source: "/emergency-services/",
        destination: "/services/emergency/",
        permanent: true,
      },
      {
        source: "/offers/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home2/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/homepage-v2/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/news-tips/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
