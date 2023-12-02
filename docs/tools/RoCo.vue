<template>
  <main>
    <n-layout>
      <n-layout-content class="header-img">
        <n-space vertical>
          <div style="padding-left: 10px; padding-top: 4px">
            <h1 style="font-size: 42px; line-height: 42px; height: 42px">硕果格兰</h1>
          </div>
          <div style="width: 60%">
            <n-space vertical style="gap: 0">
              <div>
                <n-space style="gap: 0 24px">
                  <div>
                    <span>编号：</span>
                    <span>3171</span>
                  </div>
                  <div>
                    <span>属性：</span>
                    <span>草</span>
                  </div>
                </n-space>
              </div>
              <div>
                <n-space style="gap: 0 24px">
                  <div>
                    <span>编号：</span>
                    <span>3171</span>
                  </div>
                  <div><span>属性：</span> <span>草</span></div>
                </n-space>
              </div>
              <div>
                <n-space style="gap: 0 24px">
                  <div>
                    <span>编号：</span>
                    <span>3171</span>
                  </div>
                  <div>
                    <span>经验类型：</span>
                    <span>164</span>
                  </div>
                </n-space>
              </div>
              <div>
                <n-space>
                  <n-space style="flex-wrap: nowrap; gap: 0">
                    <div style="display: inline-flex; width: 48px">喜好：</div>
                    <div style="display: inline-flex">见证四季的轮转</div>
                  </n-space>
                </n-space>
              </div>
              <div>
                <n-space style="flex-wrap: nowrap; gap: 0">
                  <div style="display: inline-flex; width: 48px">简介：</div>
                  <div style="display: inline-flex">
                    希望来年春天依然能绽放花蕊，希望生命的种子乘着风精灵飞向远方。
                  </div>
                </n-space>
              </div>
              <div>
                <n-space style="flex-wrap: nowrap; gap: 0">
                  <div style="display: inline-flex; width: 48px">获得：</div>
                  <div style="display: inline-flex">参与“硕果繁生”活动获得</div>
                </n-space>
              </div>
            </n-space>
          </div>
          <div>
            <n-grid x-gap="12" :cols="7" style="width: 60%">
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>精力</span>
                  <span>190</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>物攻</span>
                  <span>55</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>物防</span>
                  <span>130</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>魔攻</span>
                  <span>170</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>魔防</span>
                  <span>133</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>速度</span>
                  <span>125</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>总和</span>
                  <span>125</span>
                </n-space>
              </n-gi>
            </n-grid>
          </div>
        </n-space>
      </n-layout-content>
      <div style="padding-left: 10px; color: #a9b8bb">图鉴格式自动生成，内容来自网络</div>
      <n-layout-content class="body-img">
        <div style="font-size: 13px">
          <n-grid :cols="10" v-for="i of 5" :x-gap="4" class="content">
            <n-grid-item span="1">
              <span>烩根炖鸡</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>初始</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>草席魔法</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>威力90</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>pp10</span>
            </n-grid-item>
            <n-grid-item span="5">
              <span>强化自身100级魔攻。</span>
            </n-grid-item>
          </n-grid>
          <n-grid :cols="10" v-for="i of 3" :x-gap="4" class="content">
            <n-grid-item span="1">
              <span>烩根炖鸡</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>初始</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>草席魔法</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>威力90</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>pp10</span>
            </n-grid-item>
            <n-grid-item span="5">
              <span
                >造成4段伤害，根据回合尾数奇偶性回复自身上回合技能PP或其他技能PP。自身精力≤50%则清空全体技能PP枯竭队友精力以使双方精力回复失效并降低自身受到的威力伤害，若失效时自身精力＞对手则将精力扣除至对手一致以获得护盾。</span
              >
            </n-grid-item>
          </n-grid>

          <div>
            <n-space vertical>
              <div>
                <img
                  src="https://res.17roco.qq.com/res/talent/63_small.png?fileVersion=202011231232"
                  alt=""
                  width="60"
                  style="margin-left: 20px"
                />
              </div>
              <div style="color: #846027">
                <span>凌虚含烟血脉：</span
                ><span
                  >被动抵御非神水系技能爆发伤害，被抵御的部分会转化为怒气，怒气上限大幅提升。受到高额伤害后进入乘胜状态。主动使用变化技能时令场下宠物获得回复，溢出的回复量转变为波及伤害。霞姿月韵回合内主动使用威力技能后根据自身已损精力追加固伤。降低使用变化技能时的战意消退速度，攻击时根据自身怒气无视对手过高强化等级。</span
                >
              </div>
              <div>
                <span>配招：</span> <span>我来请客+一起许愿+愿力加倍+Dc06圣裁/迷之微笑</span>
              </div>
              <div><span>性格：</span> <span>保守</span></div>
            </n-space>
          </div>
        </div>
      </n-layout-content>
    </n-layout>
  </main>
</template>

<script setup>
import * as UI from 'naive-ui';
</script>

<style scoped>
main {
  width: 600px;
  margin: auto;
  margin-top: 30px;
}

.n-layout-content {
  border: 1px solid green;
  color: #fd7700;
  border-radius: 2%;
  padding: 4px;
  margin: 4px;
}

.content > div:not(:last-child) {
  text-align: center;
}
.content {
  margin-bottom: 10px;
}

.header-img {
  background: no-repeat 100% 75%/50%
    url('https://232e4b9c-bcd6-4055-a342-247f57c33539.cdn.bspapp.com/VKCEYUGU-232e4b9c-bcd6-4055-a342-247f57c33539/a2420756-a7c6-4798-a9ad-2bf051c30ad5.png');
}

.body-img {
  position: relative;
  overflow: hidden;
}
.body-img::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: no-repeat 25% -25%/100% url('https://232e4b9c-bcd6-4055-a342-247f57c33539.cdn.bspapp.com/VKCEYUGU-232e4b9c-bcd6-4055-a342-247f57c33539/a2420756-a7c6-4798-a9ad-2bf051c30ad5.png');
  transform: perspective(1000px) rotateY(180deg);
  opacity: 0.2;
}
</style>
