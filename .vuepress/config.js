const container = require('markdown-it-container')
function createContainer (klass, defaultTitle) {
  return [container, klass, {
    render (tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().slice(klass.length).trim()
      if (token.nesting === 1) {
        return `<div class="${klass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`
      } else {
        return `</div>\n`
      }
    }
  }]
}

module.exports = {
  title: 'すごいドキュメント',
  description: 'aaa',
  themeConfig: {
    nav: [
      {
        text: 'Home', link: '/',
      },
      {
        text: 'Guide', link: '/guide',
        items: [
          { text: 'toc', link: '/guide/toc' },
          { text: 'emoji', link: '/guide/emoji' },
          { text: 'component', link: '/guide/component' },
          { text: 'customblock', link: '/guide/customblock' },
          { text: 'linehighlight', link: '/guide/linehighlight' },
        ]
      }
    ],
   sidebar: {
     '/guide/': [{
       title: 'ガイド',
//        collapsable: false,
       children: [
         'linehighlight',
         'emoji',
         'toc',
         'customblock',
         'component',
       ]
     }]
   }
  },
  markdown: {
    config: md => {
      md
        .use(...createContainer('sugoi', 'SUGOI'))
    }
  }
}
