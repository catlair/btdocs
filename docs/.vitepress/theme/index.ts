import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';
import naive from 'naive-ui';
import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import BilibiliVideo from '@components/BilibiliVideo.vue';
import MyLink from '@components/MyLink.vue';
import ConfigPath from '@components/ConfigPath.vue';
// import TestedVersion from '@components/TestedVersion.vue';

import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    registerComponents(app);
    app.use(naive);
    // const pinia = createPinia();
    // pinia.use(piniaPluginPersistedstate);
    // app.use(pinia);
  },
  Layout,
};

function registerComponents(app: EnhanceAppContext['app']) {
  app.component('BilibiliVideo', BilibiliVideo);
  app.component('MyLink', MyLink);
  app.component('ConfigPath', ConfigPath);
  // app.component('TestedVersion', TestedVersion);
}
