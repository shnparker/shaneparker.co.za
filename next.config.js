const bundleAnalyzer = require("@next/bundle-analyzer");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE_BUNDLE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ["res.cloudinary.com"],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  webpack: (config, { isServer }) => {
    config.node = {
      fs: "empty",
    };

    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }

    return config;
  },
});
