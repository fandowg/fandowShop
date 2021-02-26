module.exports = {
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fandowShop/'
    : '/'
  // css: {
  //   extract: false
  // }
}
