import { defineComponent } from 'vue';
import * as naiveui from 'naive-ui';
import { mvc } from './utils';

const { NDynamicInput } = naiveui;

const moduleValeComponent = mvc(
  defineComponent({
    name: 'DynamicInput',
    setup(_, { attrs }) {
      return () => <NDynamicInput {...attrs}></NDynamicInput>;
    },
  }),
);

export default moduleValeComponent;
