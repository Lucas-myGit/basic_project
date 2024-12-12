// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    'postcss-themes': {
      // themes 可以为数组，配置多个主题
      themes: { 
        filePath: './src/assets/css/default_theme.css'
      }
    },
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
