'use strict'
module.exports = {
  NODE_ENV: '"production"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET || 'simple-vue-blog'}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY || 'ciKXDCOucTue902gHdfigrI8KN6IjoCeZtVpvhiXhZ7KGcOFiq'}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY || 'YWSOdRn0LChwDXzkGrkoGX8o9TPyukVxLP5QhgKMpW6UHhGTBk'}"`,
  BLOG_TITLE: `"${process.env.BLOG_TITLE || 'Vue Blog Cosmic JS'}"`,
}
