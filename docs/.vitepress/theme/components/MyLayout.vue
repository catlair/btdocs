<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { useRoute, useRouter } from 'vitepress';
import TwComment from './TwComment.vue';

const { Layout } = DefaultTheme;

// 通过 TwComment 绑定路由，实现路由切换时，评论组件的刷新
const route = useRoute();
const router = useRouter();

// 路由切换时，调用评论组件的初始化
router.onAfterRouteChanged = () => {
  // @ts-ignore
  if (window.twikooInit) return;

  // @ts-ignore
  window.twikoo.init({
    envId: 'https://bt-twikoo.2024666.xyz', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
    el: '#tcomment', // 容器元素
    // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
    lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
  });
};
</script>

<template>
  <Layout>
    <template #doc-after>
      <TwComment :key="route.path" />
    </template>
  </Layout>
</template>
