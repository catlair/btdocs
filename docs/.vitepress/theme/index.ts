import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';

import BilibiliVideo from '@components/BilibiliVideo.vue';
import MyLink from '@components/MyLink.vue';
import ConfigPath from '@components/ConfigPath.vue';
// import TestedVersion from '@components/TestedVersion.vue';

import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    registerComponents(app);
  },
  Layout,
};

function registerComponents(app: EnhanceAppContext['app']) {
  app.component('BilibiliVideo', BilibiliVideo);
  app.component('MyLink', MyLink);
  app.component('ConfigPath', ConfigPath);
  // app.component('TestedVersion', TestedVersion);
}
