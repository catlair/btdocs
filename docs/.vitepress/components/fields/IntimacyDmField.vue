<template>
  <n-form-item label="专属弹幕：" ignore-path-change item-style="margin-bottom: 0;">
    <NDynamicInput
      v-model:value="dynamicInputValue"
      v-bind="$attrs"
      @create="onCreate"
      @remove="onRemove"
      #="{ index }"
    >
      <n-input
        pair
        separator="-"
        :placeholder="placeholder"
        clearable
        v-model:value="dynamicInputValue[index].value"
        @change="onInputChange"
      />
    </NDynamicInput>
  </n-form-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as naiveui from 'naive-ui';
import * as vue3Form from '@lljj/vue3-form-naive';
const { fieldProps, vueUtils } = vue3Form;

const { NInput, NDynamicInput } = naiveui;

export default defineComponent({
  components: { NInput, NDynamicInput },
  props: {
    ...(fieldProps as any),
  },
  setup(props) {
    const dynamicInputValue = ref(
      Object.entries(vueUtils.getPathVal(props.rootFormData, props.curNodePath)).map(value => ({
        value,
      })),
    );

    return {
      placeholder: ['id', '自定义弹幕'] as const,
      dynamicInputValue,
      onCreate() {
        return {
          value: [],
        };
      },
      onInputChange() {
        console.info('输入成对值：Change');
        vueUtils.setPathVal(
          props.rootFormData,
          props.curNodePath,
          Object.fromEntries(
            dynamicInputValue.value.map(({ value: [key, value] }) => [key, value]),
          ),
        );
      },
      onRemove(index: number) {
        const key = dynamicInputValue.value[index].value[0];
        const data = vueUtils.getPathVal(props.rootFormData, props.curNodePath);
        Reflect.deleteProperty(data, key);
        vueUtils.setPathVal(props.rootFormData, props.curNodePath, data);
      },
    };
  },
});
</script>
