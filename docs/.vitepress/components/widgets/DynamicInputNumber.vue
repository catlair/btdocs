<template>
  <NDynamicInput
    :show-sort-button="showSortButton"
    :default-value="[]"
    :value="modelValue"
    @update:value="e => $emit('update:modelValue', e)"
    @create="() => 0"
  >
    <template #default="{ value, index }">
      <n-input-number
        :value="value"
        :show-button="showButton"
        @update:value="e => e && (modelValue[index] = e)"
      />
    </template>
  </NDynamicInput>
</template>

<script setup lang="ts">
import * as naiveui from 'naive-ui';

withDefaults(
  defineProps<{
    modelValue: number[];
    showButton?: boolean;
    showSortButton?: boolean;
  }>(),
  {
    showSortButton: false,
  },
);
defineEmits(['update:modelValue']);

const { NDynamicInput, NInputNumber } = naiveui;
</script>
