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
