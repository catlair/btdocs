import { markRaw } from 'vue';

import DynamicInput from './DynamicInput';
import DynamicInputNumberVue from './DynamicInputNumber.vue';

const DynamicInputNumber = markRaw(DynamicInputNumberVue);

export { DynamicInput, DynamicInputNumber };
