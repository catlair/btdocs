<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import { computed } from 'vue';
import * as NaiveUI from 'naive-ui';

import TwComment from './components/TwComment.vue';

import { setupToggle } from './toggle';

setupToggle();

const { darkTheme, zhCN, dateZhCN } = NaiveUI;
const { Layout } = DefaultTheme;
const { isDark } = useData();

const arrayOrderListBackground = computed(() => (!isDark.value ? '#ecf0f1' : '#2C3A47'));
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <n-dialog-provider>
        <Layout>
          <template #doc-after>
            <TwComment />
          </template>
        </Layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
/* html.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
}
*/

/* https://vue-json-schema-form.lljj.me/ */
.arrayOrderList {
  background: v-bind(arrayOrderListBackground) !important;
}

h3.fieldGroupWrap_title + .fieldGroupWrap_box {
  background: unset !important;
  padding: 12px;
  margin-bottom: 12px;
  border: 0.1rem dashed #b2bec3;
}
</style>
