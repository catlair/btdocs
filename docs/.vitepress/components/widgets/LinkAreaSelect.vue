<template>
  <n-select
    v-model:value="values"
    clearable
    multiple
    filterable
    placeholder="选择分区"
    :options="options"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { options } from './linkAreaSelect';

export default defineComponent({
  props: {
    modelValue: Array<number[]>,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const values = computed({
      get() {
        return props.modelValue?.map(([_, value]) => String(value));
      },
      set(values) {
        values &&
          emit(
            'update:modelValue',
            values.map(value => {
              const option = options.find(option => String(option.value) === String(value));
              if (!option) return;
              return [option.parentId, option.value].map(Number);
            }),
          );
      },
    });
    return {
      options,
      values,
    };
  },
});
</script>
