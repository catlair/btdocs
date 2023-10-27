<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';

import TwComment from './components/TwComment.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <TwComment />
    </template>
  </Layout>
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
