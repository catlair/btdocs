<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vitepress';

const twikooJs = ref<HTMLScriptElement | null>(null);
const router = useRouter();

function initTwikoo() {
  try {
    (window as any).twikoo.init({
      envId: 'https://bt-twikoo.2024666.xyz',
    });
  } catch (e) {
    console.error(e);
  }
}

function initJs() {
  if (twikooJs.value) {
    twikooJs.value.onload = initTwikoo;
    router.onAfterRouteChanged = onRoute;
  }
}

function onRoute(to: string) {
  if (to) setTimeout(initTwikoo, 1000);
}

onMounted(() => {
  initTwikoo();
  initJs();
});
</script>

<template>
  <div id="twikoo"></div>
  <component
    :is="'script'"
    src="https://cdn.staticfile.org/twikoo/1.6.17/twikoo.all.min.js"
    ref="twikooJs"
  ></component>
</template>
