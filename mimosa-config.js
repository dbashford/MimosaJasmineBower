exports.config = {
  "modules": [
    "copy",
    "bower"
  ],
  watch: {
    sourceDir: 'src',
    compiledDir: 'www',
    javascriptDir: 'app'
  },
  vendor: {
    javascripts: 'app/vendor',
    stylesheets: 'css/vendor'
  },
  bower: {
    copy: {
      mainOverrides: {
        "jasmine": [
          "lib/jasmine-core/jasmine.css",
          "lib/jasmine-core/jasmine.js"
        ]
      }
    }
  }
}