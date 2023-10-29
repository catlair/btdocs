<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import * as NaiveUI from 'naive-ui';

import TwComment from './components/TwComment.vue';

const { darkTheme } = NaiveUI;
const { Layout } = DefaultTheme;
const { isDark } = useData();
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-message-provider>
      <n-dialog-provider>
        <Layout>
          <template #doc-after>
            <TwComment />
          </template> </Layout
      ></n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
html.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
</style>
