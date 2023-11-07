import { markRaw } from 'vue';

import IntimacyDmFieldVue from './IntimacyDmField.vue';
import MessageApiDataFieldVue from './MessageApiDataField.vue';

const IntimacyDmField = markRaw(IntimacyDmFieldVue);
const MessageApiDataField = markRaw(MessageApiDataFieldVue);

export { IntimacyDmField, MessageApiDataField };
