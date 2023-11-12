import { defineComponent } from 'vue';
import * as naiveui from 'naive-ui';
import { mvc } from './utils';
const { NSelect } = naiveui;

const moduleValeComponent = mvc(
  defineComponent({
    name: 'DynamicInput',
    setup(_, { attrs }) {
      const options = attrs.enum.map(e => ({
        label: String(e),
        value: e,
      }));
      return () => <NSelect {...attrs} clearable options={options} />;
    },
  }),
);

export default moduleValeComponent;
