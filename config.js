module.exports = {
  "styles": {
    "srcPath": "src/styles",
    "srcFiles": "src/styles/**/*",
    "srcMainFiles": ["src/styles/*.scss", "!src/styles/_*.scss"],
    "dest": "dist/css"
  },

  "js": {
    "srcFiles": [
      "src/js/fixable.js",
      "src/js/mobileCollapse.js",
      "src/js/enable-tab.js",
      "src/js/toggle-text.js",
      "src/js/share.js"
    ],
    "vendorFiles": [
      'node_modules/tether/dist/js/tether.js',
      'node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    "dest": "dist/js"
  },

  "styleguide": {
    "srcFiles": "doc_assets/**/*",
    "styles": {
      "srcFiles": "src/styleguide/themes/cortana-theme/sass/cortana.scss",
      "dest": "src/styleguide/themes/cortana-theme/doc_assets/css"
    }
  },

  "mockups": {
    "src": "src/mockups",
    "dest": "dist/mockups"
  },

  "icons": {
    "src": "src/icons/*",
    "dest": "dist/icons"
  },

  "images": {
    "src": "src/images/*",
    "dest": "dist/images"
  },

  "server": {
    "baseDir": "dist"
  }
}
