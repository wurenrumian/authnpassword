import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '认证与密码',
  description: 'SSH key、GPG、PAT、token、passkey、密码保管箱——四十个认证名词背后的三种机制和四个轴。',

  // GitHub Pages 项目站点：https://wurenrumian.github.io/authnpassword/
  base: '/authnpassword/',

  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/authnpassword/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3f5efb' }],
  ],

  markdown: {
    lineNumbers: false,
    theme: { light: 'github-light', dark: 'github-dark' },
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '导读', link: '/guide/' },
      { text: '总地图', link: '/guide/00-overview' },
      { text: '速查', link: '/guide/11-cheatsheet' },
      { text: '术语表', link: '/guide/12-glossary' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [{ text: '导读：怎么读这一套', link: '/guide/' }],
      },
      {
        text: '正文',
        items: [
          { text: '00 总地图', link: '/guide/00-overview' },
          { text: '01 两种材料', link: '/guide/01-materials' },
          { text: '02 直接出示', link: '/guide/02-bearer' },
          { text: '03 挑战签名', link: '/guide/03-signature' },
          { text: '04 一次性派生', link: '/guide/04-otp' },
          { text: '05 passkey 与 WebAuthn', link: '/guide/05-passkey' },
          { text: '06 授权与委托', link: '/guide/06-oauth' },
          { text: '07 身份代数', link: '/guide/07-factors' },
          { text: '08 存放与生命周期', link: '/guide/08-storage' },
          { text: '09 服务端那一侧', link: '/guide/09-server' },
          { text: '10 机器身份', link: '/guide/10-machine' },
          { text: '11 选型与速查', link: '/guide/11-cheatsheet' },
          { text: '12 术语表', link: '/guide/12-glossary' },
        ],
      },
    ],

    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'short', timeStyle: 'short' } },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/wurenrumian/authnpassword' }],

    editLink: {
      pattern: 'https://github.com/wurenrumian/authnpassword/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '涉及协议处标注 RFC / 标准编号；写成惯例的是实现习惯，未标注的是作者判断。',
      copyright: '© 2026 wurenrumian',
    },
  },
})
