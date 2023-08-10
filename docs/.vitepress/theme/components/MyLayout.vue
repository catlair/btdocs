<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';
import TwComment from './TwComment.vue';

const { Layout } = DefaultTheme;

// 通过 TwComment 绑定路由，实现路由切换时，评论组件的刷新
const route = useRoute();
</script>

<template>
  <Layout>
    <template #doc-after>
      <TwComment :key="route.path" />
    </template>
  </Layout>
</template>
