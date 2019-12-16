devServer: {
  contentBase: path.join(__dirname, 'dist'),
  port: 3000,
  proxy: {
    '/api': {
      target: 'https://api.search.nicovideo.jp/api/v2/video/contents/search',
      pathRewrite: {'^/api': ''}
    }
  }
}
