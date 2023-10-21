<template>
  <n-space :vertical="true" :size="160">
    <div class="form">
      <vue-form
        v-model="value"
        :schema="props.schema"
        :form-props="formProps"
        :ui-schema="uiSchema"
        @submit="submit"
      ></vue-form>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { onActivated, onMounted, computed } from 'vue';
// import VueForm from '@lljj/vue3-form-naive';
import VueForm from '@lljj/vue3-form-element';

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

onActivated(() => {
  console.log('about page activated');
});

onMounted(() => {
  console.log('about page mounted');
});

const formProps = {
  layoutColumn: 1,
};

const uiSchema = {
  'ui:width': {
    width: '50%',
  },
};

const submit = (data: any) => {
  console.log(data);
};
</script>

<style scoped></style>
