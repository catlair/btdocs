<template>
  <main>
    <n-layout>
      <n-layout-content class="header-img">
        <n-space vertical>
          <div style="padding-left: 10px; padding-top: 4px">
            <h1
              style="
                font-size: 42px;
                line-height: 42px;
                height: 42px;
                font-family: 'AlimamaDongFangDaKai';
              "
            >
              {{ pet.name }}
            </h1>
          </div>
          <div style="width: 60%">
            <n-grid x-gap="12" :cols="2" :item-responsive="true" :responsive="'self'">
              <n-gi
                v-for="(p, i) of desc"
                :key="p.text"
                :span="i > 5 ? 2 : 1"
                :style="`margin-left: ${i % 2 === 1 && i <= 5 && '-52%'}`"
              >
                <span>{{ p.text }}：</span>
                <span>{{ p.value }}{{ i === 2 ? 'm' : i === 3 ? 'kg' : '' }}</span>
              </n-gi>
            </n-grid>
          </div>
          <div>
            <n-grid x-gap="12" :cols="7" style="width: 60%; text-align: center; margin-left: -4px">
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>精力</span>
                  <span>{{ pet.energy }}</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>物攻</span>
                  <span>{{ pet.AD }}</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>物防</span>
                  <span>{{ pet.physical_defense }}</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>魔攻</span>
                  <span>{{ pet.AP }}</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>魔防</span>
                  <span>{{ pet.magic_defense }}</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>速度</span>
                  <span>{{ pet.speed }}</span>
                </n-space>
              </n-gi>
              <n-gi>
                <n-space vertical style="gap: 0">
                  <span>总和</span>
                  <span>{{ pet.total }}</span>
                </n-space>
              </n-gi>
            </n-grid>
          </div>
        </n-space>
      </n-layout-content>
      <div style="padding-left: 10px; color: #a9b8bb">图鉴格式自动生成，内容来自网络</div>
      <n-layout-content class="body-img">
        <div style="font-size: 15px">
          <n-grid :cols="10" v-for="skill of skills" :x-gap="4" class="content">
            <n-grid-item span="1">
              <span>{{ skill.name }}</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>初始</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>{{ skill.race }}{{ skill.type_ }}</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>{{ skill.power === '--' ? '--' : `威力${skill.power}` }}</span>
            </n-grid-item>
            <n-grid-item span="1">
              <span>pp{{ skill.pp }}</span>
            </n-grid-item>
            <n-grid-item span="5">
              <span>{{ skill.introduction }}</span>
            </n-grid-item>
          </n-grid>

          <div v-if="0">
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
              <div v-if="pet.recommend_recruit && pet.recommend_recruit !== '暂无'">
                <span>配招：</span> <span>{{ pet.recommend_recruit }}</span>
              </div>
              <div v-if="pet.recommend_character && pet.recommend_character !== '暂无'">
                <span>性格：</span> <span>{{ pet.recommend_character }}</span>
              </div>
            </n-space>
          </div>
        </div>
      </n-layout-content>
    </n-layout>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const pet = ref<any>({});
const skills = ref<any>([]);
const bgImg = ref('');
const desc = ref<any>([]);

onMounted(async () => {
  const data = await fetch(`http://localhost:3000${window.location.search}`).then(res =>
    res.json(),
  );
  pet.value = data;
  skills.value = data.skills.map(el => el.info);
  bgImg.value = `url('${pet.value.img_url}')`;
  desc.value = [
    {
      text: '编号',
      value: pet.value.skill_pet_id,
    },
    {
      text: '属性',
      value: pet.value.race_id
        .map(el => races.find(race => race.race_id === el).name)
        .join('、')
        .replaceAll('系', ''),
    },
    {
      text: '身高',
      value: pet.value.height,
    },
    {
      text: '体重',
      value: pet.value.weight,
    },
    {
      text: '颜色',
      value: pet.value.color,
    },
    {
      text: '经验类型',
      value: pet.value.exp_type,
    },
    {
      text: '喜好',
      value: pet.value.hobby,
    },
    {
      text: '简介',
      value: pet.value.introduction,
    },
    {
      text: '获得',
      value: pet.value.catch_way,
    },
  ];
});

const races = [
  {
    name: '属性',
    race_id: '0',
    order_id: 0,
  },
  {
    name: '草系',
    race_id: '774',
    order_id: 1,
  },
  {
    name: '火系',
    race_id: '775',
    order_id: 2,
  },
  {
    name: '水系',
    race_id: '776',
    order_id: 3,
  },
  {
    name: '光系',
    race_id: '14433',
    order_id: 4,
  },
  {
    name: '土系',
    race_id: '777',
    order_id: 5,
  },
  {
    name: '石系',
    race_id: '779',
    order_id: 6,
  },
  {
    name: '冰系',
    race_id: '781',
    order_id: 7,
  },
  {
    name: '龙系',
    race_id: '784',
    order_id: 8,
  },
  {
    name: '电系',
    race_id: '780',
    order_id: 9,
  },
  {
    name: '毒系',
    race_id: '778',
    order_id: 10,
  },
  {
    name: '虫系',
    race_id: '783',
    order_id: 11,
  },
  {
    name: '武系',
    race_id: '962',
    order_id: 12,
  },
  {
    name: '翼系',
    race_id: '1348',
    order_id: 13,
  },
  {
    name: '萌系',
    race_id: '1005',
    order_id: 14,
  },
  {
    name: '幽灵系',
    race_id: '913',
    order_id: 15,
  },
  {
    name: '恶魔系',
    race_id: '973',
    order_id: 16,
  },
  {
    name: '机械系',
    race_id: '1038',
    order_id: 17,
  },
  {
    name: '普通系',
    race_id: '782',
    order_id: 18,
  },
  {
    name: '神火系',
    race_id: '16000',
    order_id: 19,
  },
  {
    name: '神草系',
    race_id: '16002',
    order_id: 20,
  },
  {
    name: '神水系',
    race_id: '16001',
    order_id: 21,
  },
];
const groups = [
  {
    name: '组别',
    group_id: 0,
  },
  {
    name: '植物组',
    group_id: 201801,
  },
  {
    name: '动物组',
    group_id: 201802,
  },
  {
    name: '不死组',
    group_id: 201803,
  },
  {
    name: '天空组',
    group_id: 201804,
  },
  {
    name: '力量组',
    group_id: 201805,
  },
  {
    name: '乖乖组',
    group_id: 201806,
  },
  {
    name: '精灵组',
    group_id: 201807,
  },
  {
    name: '大地组',
    group_id: 201808,
  },
  {
    name: '守护组',
    group_id: 201809,
  },
  {
    name: '未知',
    group_id: 201810,
  },
];

const color = [
  '#33bd80',
  'fd7700',
  '#7f88b6',
  '#bda865',
  '#3b4bb2',
  '#7aaa6c',
  '#675343',
  '#f3a326',
  '#7d78dc',
][Math.floor(Math.random() * 9)];
</script>

<style scoped>
/* 加载字体 */
@font-face {
  font-family: 'AlimamaDaoLiTi';
  src: url(./font/AlimamaDaoLiTi.woff2);
}

@font-face {
  font-family: 'AlimamaDongFangDaKai';
  src: url(./font/AlimamaDongFangDaKai-Regular.woff2);
}

main {
  width: 660px;
  margin: auto;
  margin-top: 30px;
}

.n-layout-content {
  border: 2px solid green;
  color: v-bind(color);
  font-family: 'AlimamaDaoLiTi';
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
  background-repeat: no-repeat;
  background-position: 100% 75%;
  background-size: 50%;
  background-image: v-bind(bgImg);
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
  background-repeat: no-repeat;
  background-position: center;
  background-image: v-bind(bgImg);
  transform: perspective(1000px) rotateY(180deg);
  opacity: 0.2;
}
</style>
