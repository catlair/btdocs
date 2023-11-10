<template>
  <n-dynamic-tags :value="tags" @update:value="e => $emit('update:modelValue', e.map(Number))">
    <template #input="{ submit, deactivate }">
      <n-input-number
        size="small"
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
import { defineComponent, computed } from 'vue';
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
    const tags = computed({
      get: () => props.modelValue?.map(String),
      set(val) {
        return val;
      },
    });
    return { tags };
  },
});
</script>
