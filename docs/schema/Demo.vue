<template>
  <n-space vertical>
    <n-slider key="1" v-model:value="value1" :max="50" />
    <n-slider key="2" v-model:value="value2" />
    <n-slider key="13" v-model:value="value3" />
    <n-slider key="11" v-model:value="value4" />
    <n-input-number v-model:value="value1" size="small" />
    <n-input-number v-model:value="value2" size="small" />
    <n-input-number v-model:value="value3" size="small" />
    <n-input-number v-model:value="value4" size="small" />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      value1: ref(50),
      value2: ref(50),
      value3: ref(0),
      value4: ref(0),
    };
  },
});
</script>
