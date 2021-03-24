module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'asstes': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
