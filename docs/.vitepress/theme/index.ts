import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';
import {
  create,
  NButton,
  NInput,
  NForm,
  NFormItem,
  NInputNumber,
  NRadio,
  NRadioGroup,
  NSwitch,
  NSelect,
} from 'naive-ui';

import BilibiliVideo from '@components/BilibiliVideo.vue';
import MyLink from '@components/MyLink.vue';
import ConfigPath from '@components/ConfigPath.vue';
// import TestedVersion from '@components/TestedVersion.vue';

import Layout from './Layout.vue';

const naive = create({
  components: [
    NButton,
    NInput,
    NForm,
    NFormItem,
    NInputNumber,
    NRadio,
    NRadioGroup,
    NSwitch,
    NSelect,
  ],
});

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    registerComponents(app);
    app.use(naive);
  },
  Layout,
};

function registerComponents(app: EnhanceAppContext['app']) {
  app.component('BilibiliVideo', BilibiliVideo);
  app.component('MyLink', MyLink);
  app.component('ConfigPath', ConfigPath);
  // app.component('TestedVersion', TestedVersion);
}
