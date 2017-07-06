module.exports = {
  plugins: {
    'stylelint': {configFile: '.stylelintrc.json'},
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {preset: 'default', autoprefixer: false},
    'postcss-reporter': {clearMessages: true}
  }
}
