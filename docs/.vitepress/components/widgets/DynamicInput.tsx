import { defineComponent, markRaw } from 'vue';
import vue3Utils from '@lljj/vjsf-utils/vue3Utils';
import * as naiveui from 'naive-ui';

const { NDynamicInput } = naiveui;

const moduleValeComponent = markRaw(
  vue3Utils.modelValueComponent(
    defineComponent({
      name: 'DynamicInput',
      setup(_, { attrs }) {
        return () => <NDynamicInput {...attrs}></NDynamicInput>;
      },
    }),
    {
      model: 'value',
    },
  ),
);

export default moduleValeComponent;
