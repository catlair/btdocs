<template>
  <n-dynamic-tags :value="tags" @update:value="e => $emit('update:modelValue', e.map(Number))">
    <template #input="{ submit, deactivate }">
      <n-input-number
        size="small"
        ref="inputInstRef"
        :update-value-on-input="false"
        :show-button="false"
        @blur="deactivate"
        @update:value="submit($event)"
      >
      </n-input-number>
    </template>
    <template #trigger="{ activate, disabled }">
      <n-button size="small" type="primary" dashed :disabled="disabled" @click="activate()">
        <template #icon>
          <n-icon>
            <Add />
          </n-icon>
        </template>
        添加
      </n-button>
    </template>
  </n-dynamic-tags>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, nextTick } from 'vue';
import Add from '@vicons/ionicons5/Add';

export default defineComponent({
  components: {
    Add,
  },
  props: {
    modelValue: Array<number>,
  },
  emits: ['update:modelValue'],
  setup(props) {
    const inputInstRef = ref(null);
    watch(inputInstRef, value => {
      if (value) nextTick(() => value.focus());
    });
    const tags = computed(() => props.modelValue?.map(String));
    return {
      tags,
      inputInstRef,
    };
  },
});
</script>
