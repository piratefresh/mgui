const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn.sanity.io",
      "magnustestcom-dev-ed--c.documentforce.com",
    ],
  },
});
