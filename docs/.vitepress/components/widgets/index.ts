import { markRaw } from 'vue';

import DynamicTags from './DynamicTags';
import DynamicInput from './DynamicInput';
import DynamicInputNumberVue from './DynamicInputNumber.vue';
import DynamicNumberTagsVue from './DynamicNumberTags.vue';

// const { NDynamicTags } = naiveui;

const DynamicInputNumber = markRaw(DynamicInputNumberVue);
const DynamicNumberTags = markRaw(DynamicNumberTagsVue);

// export const DynamicTags = mvc(NDynamicTags);

export { DynamicInput, DynamicInputNumber, DynamicNumberTags, DynamicTags };
