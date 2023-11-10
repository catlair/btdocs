import * as vue3Utils from '@lljj/vjsf-utils/vue3Utils';
import { markRaw } from 'vue';

export const mvc = component =>
  markRaw(
    vue3Utils.modelValueComponent(component, {
      model: 'value',
    }),
  );
