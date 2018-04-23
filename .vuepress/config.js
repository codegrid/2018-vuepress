module.exports = {
  title: 'すごいドキュメント',
  themeConfig: {
    nav: [
      {
        text: 'Home', link: '/',
      },
      {
        text: 'Guide', link: '/guide/'
      },
      {
        text: 'Links', link: '/links/'
      }
    ],
    sidebar: {
      '/links/': [{
        title: 'リンクス',
        collapsable: false,
        children: [
          'sugoipage'
        ]
      }]
    }
  },
}
