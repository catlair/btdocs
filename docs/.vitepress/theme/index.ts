import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';

import BilibiliVideo from '@components/BilibiliVideo.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    registerComponents(app);
  },
};

function registerComponents(app: EnhanceAppContext['app']) {
  app.component('BilibiliVideo', BilibiliVideo);
}
