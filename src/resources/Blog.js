import config from '../config'

export default {
  blog() {
    return {
      path: '/blog.json',
      resolve: (response, mappers) => {
        let blog = response.results[0]
        return mappers.merge({
          title: config.BLOG_TITLE || blog.title,
          labels: {
            post: blog.post_label,
            author: blog.author_label
          }
        })
      }
    }
  }
}
