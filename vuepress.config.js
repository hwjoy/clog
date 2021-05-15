module.exports = {
  // 站点配置
  base: './',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '你好， Clog ！',
      description: '这是一个 Clog 站点',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Hello, Clog!',
      description: 'This is a Clog website',
    },
  },

  // 主题配置
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/8112136',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
  },

  // Dev config
  port: 8100,
}
