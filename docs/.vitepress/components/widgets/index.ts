import { markRaw } from 'vue';

import DynamicInput from './DynamicInput';
import DynamicInputNumberVue from './DynamicInputNumber.vue';
import * as naiveui from 'naive-ui';
import * as vue3Utils from '@lljj/vjsf-utils/vue3Utils';

const { NDynamicTags } = naiveui;

const mvc = component => markRaw(vue3Utils.vue3Utils(component));

const DynamicInputNumber = markRaw(DynamicInputNumberVue);

const NaiveUI = {
  NDynamicTags: mvc(NDynamicTags)
};

export { DynamicInput, DynamicInputNumber,...NaiveUI };
