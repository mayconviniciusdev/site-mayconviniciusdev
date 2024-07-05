/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.mayconviniciusdev.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1,

  additionalPaths: async (config) => {
    const paths = [
      { url: '/linktree', changefreq: 'weekly', priority: 0.8 },
      { url: '/jorgefreitasdesign', changefreq: 'daily', priority: 0.5 },
    ];
    return paths;
  },
};
