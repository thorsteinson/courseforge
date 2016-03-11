// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
if (PRODUCTION) {
  module.exports = require('./configure-store.prod')
} else {
  module.exports = require('./configure-store.dev')
}
