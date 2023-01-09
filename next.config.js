const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  const isDevServer = phase == PHASE_DEVELOPMENT_SERVER;
  const prefixes = isDevServer ? ["dev", "prod"] : ["prod"];
  const types = ["ts", "tsx", "js", "jsx"];

  // first map and then flat, returns a 1D array
  const pageExtensions = types.flatMap((extension) => {
    // returns an array
    return prefixes.map((pre) => `${pre}.${extension}`);
  });


  /** @type {import('next').NextConfig} */
  const nextConfig = {
    // ...defaultConfig,
    reactStrictMode: true,
    pageExtensions
  };

  return nextConfig;
};
