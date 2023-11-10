<template>
  <div>
    <!-- <p>
      最好也是最简单的支持就是为
      <a
        href="https://github.com/catlair/BiliOutils"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/catlair/BiliOutils<ExternalLinkIcon
      /></a>
      点个 star，关注才能不迷路。非常感谢！
    </p> -->

    <p>当然你也可以请作者喝杯奶茶。</p>

    <!-- <p> -->
    <!-- 也没人备注昵称啊，那就不弄了。<del>备注昵称，将出现在感谢列表中。</del> -->
    <!-- </p> -->

    <div>
      <n-space vertical>
        <n-space>
          <n-button
            v-for="button in buttons"
            :key="button.text"
            :type="button.type"
            @click="changeZZUrl(button)"
            >{{ button.text }}</n-button
          ></n-space
        >
        <n-image
          :width="zzClass && 400"
          :src="zzUrl"
          alt="zz_three"
          :class="zzClass"
          :previewed-img-props="{ style: { border: '8px solid white' } }"
        />
      </n-space>
    </div>

    <!-- <p>感谢：</p> -->
    <!-- <ul>
      <li>
        <span>匿名用户的冰可乐。</span>
      </li>
      <li>
        <span>Rie 的冰可乐。</span>
      </li>
      <li>
        <span>匿名用户的微信赞助。</span>
      </li>
    </ul> -->
    <!-- <n-divider border-style="dashed" /> -->
    <!-- <span>The language of eternal question.</span> -->
  </div>
</template>

<script setup lang="ts">
import zz_three from '/images/zz_three.png';
import zz_alipay from '/images/zz_alipay.png';
import zz_weixin from '/images/zz_weixin.png';
import zz_qq from '/images/zz_qq.png';
import zz_alipay_red from '/images/alipay_red.jpg';
import { ref } from 'vue';
// import { storeToRefs } from 'pinia';
// import { useReleasesStore } from '@stores/releases';

// const { tagName, isRefreshed } = storeToRefs(useReleasesStore());

const zzUrls = {
  all: zz_three,
  alipay: zz_alipay,
  weixin: zz_weixin,
  qq: zz_qq,
  alipay_red: zz_alipay_red,
};
const zzUrl = ref(zz_alipay_red);
const zzClass = ref('zz');

const buttons = [
  { type: 'tertiary', text: '全部', url: 'all' },
  { type: 'tertiary', text: '支付宝', url: 'alipay' },
  { type: 'tertiary', text: '微信', url: 'weixin' },
  { type: 'tertiary', text: 'QQ', url: 'qq' },
  { type: 'tertiary', text: '支付宝红包', url: 'alipay_red' },
] as const;

function changeZZUrl(button) {
  zzUrl.value = zzUrls[button.url];
  if (button.url === 'all') {
    zzClass.value = '';
  } else {
    zzClass.value = 'zz';
  }
}
</script>

<style>
img.zz {
  display: block;
  width: 400px;
}
</style>
