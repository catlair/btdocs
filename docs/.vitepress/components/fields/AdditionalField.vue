<template>
  <n-form-item label="姓名" path="user.name">
    <NDynamicInput
      :show-sort-button="props.showSortButton"
      :default-value="[]"
      :value="values"
      @update:value="updateValue"
      @create="() => reactive([])"
    >
      <template #default="{ value, index }">
        <n-space>
          <n-input-number
            :value="+value[0] || undefined"
            :show-button="false"
            :update-value-on-input="false"
            @update:value="e => updateInputNumber(e, index, value)"
          />
          <n-input v-model:value="value[1]" type="text" />
          {{ value }}
        </n-space>
      </template>
    </NDynamicInput>
  </n-form-item>
</template>

<script setup lang="ts">
import { reactive, computed, unref } from 'vue';
import * as naiveui from 'naive-ui';
import * as vue3Form from '@lljj/vue3-form-naive';
const { fieldProps, vueUtils } = vue3Form;

const { NDynamicInput, NFormItem } = naiveui;

const props = defineProps({ ...fieldProps, modelValue: Object });

const values = computed(() =>
  Object.entries(vueUtils.getPathVal(props.rootFormData, props.curNodePath)),
);

function updateValue(e) {
  // console.log('fromEntries', fromEntries(e), e);
  vueUtils.setPathVal(props.rootFormData, props.curNodePath, fromEntries(e));
  // console.log('set', vueUtils.getPathVal(props.rootFormData, props.curNodePath));
}

function updateInputNumber(e, index, value) {
  value[0] = String(e);
  values[index] = value;
  vueUtils.setPathVal(props.rootFormData, props.curNodePath, fromEntries(unref(values)));
}

function fromEntries(entries) {
  const obj = {};
  const target = Array.isArray(entries) ? entries : Array.from(entries);
  let count = 0;
  for (const [key, value] of target) {
    obj[key || count] = value || '';
    count++;
  }
  return obj;
}
</script>
