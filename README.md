# Vue.js Blog Template Powered by Cosmic JS

A simple Vue.js template for creating a fast, beautiful blog on Netlify powerd by the [Cosmic JS Headless CMS](https://cosmicjs.com) for content editing.

This template provides blog, blog posts, authors and elegant modern design ready to deploy on [Netlify](http://netlify.com/) in one click!

![Vue.js Blog Template Powered by Cosmic JS](https://cosmic-s3.imgix.net/c3e70670-9bdf-11e8-8928-b51c5e4c8149-vue-blog.png?w=2000 "Vue.js Blog Template Powered by Cosmic JS")

### [View live demo](https://cosmicjs.com/apps/simple-vue-blog)

## Getting Started

Below are steps to deploy your application to Netlify and integrate with Cosmic JS for content editing.

### 1. Deploy to Netlify

Click the button below to deploy this application to Netlify. By default, it will be connected to a Bucket with demo content.

[![Deploy to Netlify](src/assets/deploy-button.svg "Deploy this application to Netlify")](https://app.netlify.com/start/deploy?repository=https://github.com/cosmicjs/vue-blog-netlify-template)

### 2. Create Cosmic JS Bucket

[Install the Simple Vue Blog](https://cosmicjs.com/apps/simple-vue-blog) by clicking `Install Free` on the app page.

![Install App](src/assets/install_app.png)

### 3. Generate Credentials

Click on `Settings` and then `Basic Settings` in your Bucket dashboard. There you can generate `API Read Access Key` & `API Write Access Key` and save them. This step is optional but recommended for security purposes.

![Generate Credentials](src/assets/credentials.png)

### 4. Add Environment Variable - Netlify

Now go to Netlify Site Settings and then go to the `Build and Deploy` page. Scroll down and you will see `Build environment variables` section where you will enter Cosmic JS Bucket credentials.

```javascript
{
    COSMIC_BUCKET: "", /* Default: 'simple-vue-blog' */
    COSMIC_READ_KEY: "", /* Default: ' */
    COSMIC_WRITE_KEY: "", /* Default: '' */
    BLOG_TITLE: "", /* Default: 'Vue Blog Cosmic JS' */
}
```

![Add Environment Variables](src/assets/env.png)

### 5. Redeploy

At last, go to Netlify `Deploys` page and Trigger Deploy. Congratulation, your application is deployed and connected to Cosmic JS Bucket.

![Add Environment Variables](src/assets/redeploy.png)
