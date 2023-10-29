<template>
  <n-space vertical>
    <n-data-table :key="row => row.key" :columns="columns" :data="data" />
    <n-button type="tertiary" @click="buttonClick"> 添加新账号 </n-button>
  </n-space>
</template>

<script lang="ts" setup>
import * as naive from 'naive-ui';
import { h, defineComponent, ref, nextTick, computed } from 'vue';
import { storeToRefs } from 'pinia';
import useConfigStore from '@store/config';
const configStore = useConfigStore();
const { users } = storeToRefs(configStore);
const { NInput, NButton, useMessage, useDialog } = naive;

const message = useMessage();
const dialog = useDialog();

const data = computed(() =>
  users.value.map((user, index) => ({
    key: index,
    ...user,
  })),
);

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    }
    function handleChange() {
      props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    return () =>
      h(
        'div',
        {
          style: 'min-height: 22px',
          onClick: handleOnClick,
        },
        isEdit.value
          ? h(NInput, {
              ref: inputRef,
              value: inputValue.value,
              onUpdateValue: v => {
                inputValue.value = v;
              },
              onChange: handleChange,
              onBlur: handleChange,
            })
          : props.value,
      );
  },
});

const buttonClick = () => {
  const name = new Date().getTime().toString();
  const r = configStore.addUser({
    name,
    remark: '点击修改',
  });
  if (r) {
    message.success(
      `成功添加帐号${name}，你说没有？我也不确定，人生哪有绝对。偷偷告诉你点击数据就可以随心所欲地编辑了`,
    );
  }
};

const getDataIndex = key => {
  return data.value.findIndex(item => item.key === key);
};

const columns = [
  {
    title: '名称',
    key: 'name',
    width: 150,
    render(row) {
      const index = getDataIndex(row.key);
      return h(ShowOrEdit, {
        value: row.name,
        onUpdateValue(name: string) {
          configStore.patchUser(index, {
            name,
          });
        },
      });
    },
  },
  {
    title: '备注',
    key: 'remark',
    render(row) {
      const index = getDataIndex(row.key);
      return h(ShowOrEdit, {
        value: row.remark,
        onUpdateValue(remark: string) {
          configStore.patchUser(index, {
            remark,
          });
        },
      });
    },
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => {
            console.log('del', row);
            dialog.warning({
              title: '警告',
              content: '你确定？',
              positiveText: '确定',
              negativeText: '不确定',
              closable: false,
              onPositiveClick: () => {
                configStore.delUser(row.key);
                message.success('确定？那好吧，开弓没有回头箭');
              },
              onNegativeClick: () => {
                message.error('苦海无涯，回头是岸。不错，孺子可教也');
              },
            });
          },
        },
        { default: () => '删除' },
      );
    },
  },
];
</script>
