import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';
import * as naive from 'naive-ui';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import BilibiliVideo from '@components/BilibiliVideo.vue';
import MyLink from '@components/MyLink.vue';
import ConfigPath from '@components/ConfigPath.vue';
import JSONSchema from '@components/JSONSchema.vue';
// import TestedVersion from '@components/TestedVersion.vue';

import Layout from './Layout.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }: EnhanceAppContext) {
    const pinia = createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
    registerComponents(app);
    app.use(naive);

    if (!import.meta.env.SSR) {
      router.onBeforeRouteChange = to => {
        if (to === '/') document.documentElement.classList.add('gray');
        else document.documentElement.classList.remove('gray');
      };
    }
  },
  Layout,
};

function registerComponents(app: EnhanceAppContext['app']) {
  app.component('BilibiliVideo', BilibiliVideo);
  app.component('MyLink', MyLink);
  app.component('ConfigPath', ConfigPath);
  app.component('JSONSchema', JSONSchema);
  // app.component('TestedVersion', TestedVersion);
}
