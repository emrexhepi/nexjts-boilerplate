// next.config.js
const withSass = require('@zeit/next-sass');

module.export = withSass({
    // webpack config
    webpack(config, options) {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        }
      return config
    }
  });