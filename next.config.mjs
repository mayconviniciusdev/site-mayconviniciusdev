// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  async generateStaticParams() {
    return {
      '/': { page: '/' },
      '/jorgefreitasdesign': { page: '/app/(job)/jorgefreitasdesign' },

    };
  },
};

export default nextConfig;