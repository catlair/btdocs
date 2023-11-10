import { defineComponent } from 'vue';
import * as naiveui from 'naive-ui';
import { mvc } from './utils';
import Add from '@vicons/ionicons5/Add';

const { NDynamicTags, NIcon, NButton } = naiveui;

const moduleValeComponent = mvc(
  defineComponent({
    name: 'DynamicTags',
    setup(_, { attrs }) {
      return () => (
        <NDynamicTags {...attrs}>
          {{
            trigger: ({ activate, disabled }) => (
              <NButton
                size="small"
                type="info"
                dashed
                disabled={disabled}
                onClick={() => activate()}
              >
                {{
                  default: () => '添加',
                  icon: () => (
                    <NIcon>
                      <Add />
                    </NIcon>
                  ),
                }}
              </NButton>
            ),
          }}
        </NDynamicTags>
      );
    },
  }),
);

export default moduleValeComponent;
