<template>
  <div class="form">
    <vue-form
      v-model="value"
      :schema="props.schema"
      :form-props="formProps"
      :ui-schema="uiSchema"
      :formFooter="formFooter"
      @submit="submit"
    ></vue-form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueForm from '@lljj/vue3-form-naive';
// import VueForm from '@lljj/vue3-form-element';

const props = defineProps(['modelValue', 'schema']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const formProps = {
  layoutColumn: 2,
};

const uiSchema = {
  'ui:width': {
    width: '50%',
  },
};

const submit = (data: any) => {
  console.log(data);
};

const formFooter = {
  show: false,
};
</script>

<style scoped></style>
