/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.mayconviniciusdev.com',
  generateRobotsTxt: true,

  additionalPaths: [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/linktree/page', changefreq: 'weekly', priority: 0.8 },
    { url: '/works/jorgefreitasdesign/page', changefreq: 'daily', priority: 0.5 },
  ],
}