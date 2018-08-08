'use strict'
module.exports = {
  NODE_ENV: '"production"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET || 'simple-vue-blog'}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY}"`,
  BLOG_TITLE: `"${process.env.BLOG_TITLE || 'Vue Blog Cosmic JS'}"`,
}
