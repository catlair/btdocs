import { UserConfig, defineConfig, DefaultTheme } from 'vitepress';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BiliOutils',
  description: 'BiliOutils 使用文档',
  lang: 'zh-CN',
  base: process.env.GITHUB_PAGES ? '/BiliOutils/' : '/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,
    lastUpdated: {
      text: '上次更新',
    },

    nav: nav(),

    sidebar: sidebar(),

    socialLinks: [{ icon: 'github', link: 'https://github.com/catlair/BiliOutils' }],

    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/catlair/BiliOutils/edit/dev/docs/:path',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '4HX8QKEWIN',
        apiKey: '753d7939116dbb6824909b0b0345864b',
        indexName: 'btvercel',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    },
  },
  vite: vite(),
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    { text: '配置', link: '/config/' },
    {
      text: '仓库',
      items: [
        {
          text: 'Github',
          link: 'https://github.com/catlair/BiliOutils',
          target: '_blank',
        },
        {
          text: 'Gitee（国内）',
          link: 'https://gitee.com/catlair/BiliOutils',
          target: '_blank',
        },
        {
          text: 'Dockerhub',
          link: 'https://hub.docker.com/repository/docker/catlair/bilitools',
          target: '_blank',
        },
        {
          text: 'npm package',
          link: 'https://www.npmjs.com/package/bilioutils',
          target: '_blank',
        },
      ],
    },
    {
      text: '工具',
      items: [
        {
          text: 'JSON5 校验',
          link: 'https://verytoolz.com/json5-validator.html',
          target: '_blank',
        },
        {
          text: 'Cookie 校验和编码',
          link: '/config/encode_cookie/',
          target: '_blank',
        },
        {
          text: 'Gzip 压缩',
          link: 'https://www.baidufe.com/fehelper/en-decode/',
          target: '_blank',
        },
        {
          text: 'CORN 在线工具',
          link: 'http://cron.ciding.cc/',
          target: '_blank',
        },
        {
          text: '获取安卓 APK 登录',
          link: 'https://github.com/catlair/blogin/',
          target: '_blank',
        },
        {
          text: '简易 CORN 定时任务工具',
          link: 'https://github.com/catlair/cron/',
          target: '_blank',
        },
      ],
    },
    {
      text: '关于和反馈',
      items: [
        {
          text: 'Github',
          link: 'https://github.com/catlair/BiliOutils/issues',
          target: '_blank',
        },
        {
          text: 'Gitee（国内）',
          link: 'https://gitee.com/catlair/BiliOutils/issues',
          target: '_blank',
        },
        {
          text: 'QQ 群等其他方式',
          link: '/about/',
        },
      ],
    },
    {
      text: '官网指路',
      items: [
        {
          text: '阿里云函数 FC',
          link: 'https://www.aliyun.com/product/fc/',
          target: '_blank',
        },
        {
          text: '腾讯云函数 SCF',
          link: 'https://cloud.tencent.com/product/scf',
          target: '_blank',
        },
        {
          text: '百度云函数 CFC',
          link: 'https://cloud.baidu.com/product/cfc.html',
          target: '_blank',
        },
        {
          text: '华为 AppGallery Connect',
          link: 'https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/',
          target: '_blank',
        },
        {
          text: '华为 FunctionGraph',
          link: 'https://www.huaweicloud.com/product/functiongraph.html',
          target: '_blank',
        },
        {
          text: 'Github Actions',
          link: 'https://docs.github.com/cn/actions',
          target: '_blank',
        },
      ],
    },
  ];
}

function sidebar(): DefaultTheme.Sidebar {
  return {
    '/guide/': [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '常见问题', link: '/guide/faq' },
          { text: '本地运行', link: '/guide/local' },
          { text: '服务器运行', link: '/guide/server' },
          { text: '青龙面板', link: '/guide/qinglong' },
          { text: 'Docker', link: '/guide/docker' },
          { text: '腾讯云函数', link: '/guide/tencent_scf' },
          { text: '阿里云函数计算', link: '/guide/ali_fc' },
          { text: '百度云函数', link: '/guide/baidu_cfc' },
          { text: '华为云函数', link: '/guide/huawei_agc' },
          { text: '华为云函数图形化', link: '/guide/huawei_fg' },
          { text: 'Github Action', link: '/guide/github_action' },
          { text: 'Action 部署腾讯云函数', link: '/guide/action_scf' },
          { text: '视频教程', link: '/guide/video' },
          { text: '更新日志', link: '/guide/update' },
        ],
      },
    ],
    '/config/': [
      { text: '配置', link: '/config/' },
      { text: '获取配置', link: '/config/get_value' },
      { text: '账号配置', link: '/config/account' },
      { text: '功能配置', link: '/config/func' },
      { text: '消息配置', link: '/config/message' },
      { text: '日志配置', link: '/config/logger' },
      { text: 'Github Secrets', link: '/config/github_secrets' },
      { text: '环境变量', link: '/config/env' },
      { text: '版本更新', link: '/config/version' },
    ],
  };
}

function vite(): UserConfig['vite'] {
  return {
    resolve: {
      alias: [
        {
          find: '@components',
          replacement: fileURLToPath(new URL('./components', import.meta.url)),
        },
        {
          find: '@img',
          replacement: fileURLToPath(new URL('/images', import.meta.url)),
        },
      ],
    },
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  };
}
