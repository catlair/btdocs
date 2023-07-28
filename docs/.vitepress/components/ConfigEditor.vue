<template>
  <div style="padding-left: 10px; padding-bottom: 10px">
    <el-button @click="verifyJSON5">校验</el-button>
  </div>
  <codemirror
    v-model="code"
    placeholder="输入你的配置"
    :style="{ height: '80vh' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<script setup lang="ts">
import { linter } from '@codemirror/lint';
import { json5, json5ParseLinter, json5Language } from 'codemirror-json5';
import { jsonCompletion } from 'codemirror-json-schema';
// @ts-ignore
import { json5SchemaLinter, json5SchemaHover } from 'codemirror-json-schema/json5';
import { basicSetup } from 'codemirror';
import { hoverTooltip, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';

import { ref, shallowRef } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';

import JSON5 from 'json5';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import { isBiliCookie } from './utils/cookie';
import { checkboxPlugin } from './ConfigEditor';
import { schema, arrSchema } from './schema';

const code = ref(``);

const extensions = [
  checkboxPlugin,
  basicSetup,
  keymap.of([...defaultKeymap, indentWithTab]),
  json5(),
  linter(json5ParseLinter(), {
    // the default linting delay is 750ms
    delay: 300,
  }),
  linter(json5SchemaLinter(schema)),
  linter(json5SchemaLinter(arrSchema)),
  hoverTooltip(json5SchemaHover(schema)),
  hoverTooltip(json5SchemaHover(arrSchema)),
  json5Language.data.of({
    // @ts-ignore
    autocomplete: jsonCompletion(schema),
  }),
  json5Language.data.of({
    // @ts-ignore
    autocomplete: jsonCompletion(arrSchema),
  }),
  oneDark,
];

// Codemirror EditorView instance ref
const view = shallowRef();
const handleReady = payload => {
  view.value = payload.view;
};

// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
  const state = view.value.state;
  const ranges = state.selection.ranges;
  const selected = ranges.reduce((r, range) => r + range.to - range.from, 0);
  const cursor = ranges[0].anchor;
  const length = state.doc.length;
  const lines = state.doc.lines;
  // more state info ...
  // return ...
};

const log = console.log;

function verifyJSON5() {
  const state = view.value.state;
  const json = state.doc.toString();
  try {
    const config = JSON5.parse(json);
    console.log('JSON5 is valid');

    if (Array.isArray(config)) {
      // 便利数组，检查每个的 cookie 是否正确，如果不正确则提示不正确的
      const invalidCookie = config.filter(el => !isBiliCookie(el.cookie));
      // 第 xx 个 cookie 格式不正确
      if (invalidCookie.length) {
        for (const el of invalidCookie) {
          if (el.__common__) {
            continue;
          }
          ElMessage.info(
            `第 ${
              config.indexOf(el) + 1
            } 个 cookie 格式不正确，需要包含 bili_jct， SESSDATA， DedeUserID，且长度大于90`,
          );
        }
      }
    } else {
      const verifyCookie = isBiliCookie(config.cookie);
      if (!verifyCookie) {
        ElMessage.error(
          'Cookie 格式不正确或为空，需要包含 bili_jct， SESSDATA， DedeUserID，且长度大于90',
        );
        return;
      }
    }
    ElMessage.success('JSON5 通过验证');
  } catch (e) {
    console.log('JSON5 is invalid', e);
    const message = e.message;
    // 通过 message 输出错误在第几行，第几列
    const [line, column] = message
      .split(' ')
      .slice(-1)[0]
      .split(':')
      .map(el => Number(el));
    ElMessage.error(`JSON5 未通过验证。错误在第 ${line} 行，第 ${column} 列`);
  }
}
</script>

<style lang="scss">
.codemirror {
  .cm-editor {
    height: 80vh;
  }
}
</style>
