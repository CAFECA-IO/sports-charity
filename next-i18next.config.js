const path = require('path')
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  localePath: path.resolve('./public/locales'),
}