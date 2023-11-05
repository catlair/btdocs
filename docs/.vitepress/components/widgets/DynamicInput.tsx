import { defineComponent, markRaw } from 'vue';
import { modelValueComponent } from '@lljj/vjsf-utils/vue3Utils';
import * as naiveui from 'naive-ui';

const { NDynamicInput } = naiveui;

const moduleValeComponent = markRaw(
  modelValueComponent(
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
