import { markRaw } from 'vue';

import DynamicTags from './DynamicTags';
import DynamicInput from './DynamicInput';
import DynamicSelect from './DynamicSelect';
import DynamicInputNumberVue from './DynamicInputNumber.vue';
import LinkAreaSelectVue from './LinkAreaSelect.vue';
import DynamicNumberTagsVue from './DynamicNumberTags.vue';

// const { NDynamicTags } = naiveui;

const DynamicInputNumber = markRaw(DynamicInputNumberVue);
const DynamicNumberTags = markRaw(DynamicNumberTagsVue);
const LinkAreaSelect = markRaw(LinkAreaSelectVue);

// export const DynamicTags = mvc(NDynamicTags);

export {
  DynamicInput,
  DynamicInputNumber,
  DynamicNumberTags,
  DynamicTags,
  DynamicSelect,
  LinkAreaSelect,
};
