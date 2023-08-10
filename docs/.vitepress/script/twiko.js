export default `
function waitForVar(key) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (window[key]) {
        clearInterval(interval);
        resolve();
      }
    }, 300);
  });
}
waitForVar('twikoo').then(() => {
  twikoo.init({
    envId: 'https://bt-twikoo.2024666.xyz', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
    el: '#tcomment', // 容器元素
    // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
    lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
  });
});

`
