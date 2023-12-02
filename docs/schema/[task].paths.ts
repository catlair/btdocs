const paths = [
  {
    params: {
      title: '功能配置',
      task: 'function',
    },
  },
  {
    params: {
      title: '投币',
      task: 'coin',
    },
    content:
      '默认配置逻辑：没有达到 6 级时，每日投币 5 颗，不保留硬币。达到 6 级停止投币。<br/> PS：达到 6 级后想要投币，或者投币数想大于 5 ，请参考解除限制的配置 [解除限制](/config/account.md#解除限制)。',
  },
  {
    params: {
      title: '使用 B 币券',
      task: 'coupon_balance',
    },
    content: '默认配置逻辑：每月 10，20 和最后一天使用 b 币券为自己充电。',
  },
  {
    params: {
      title: '竞猜',
      task: 'match',
    },
    content: 'PS：涉及到硬币安全，建议开启后修改默认配置到适合自己的值。',
  },
  {
    params: {
      title: '天选时刻',
      task: 'lottery',
    },
    content: '',
  },
  {
    params: {
      title: '天选红包',
      task: 'red_pack',
    },
    content:
      '表示次数时，小于等于 0 的数表示不限制次数 <br/>表示休息时间时，小于等于 0 的数表示直接停止',
  },
  {
    params: {
      title: '取关分组',
      task: 'un_follow',
    },
    content: '',
  },
  {
    params: {
      title: '直播间礼物',
      task: 'gift',
    },
    content: 'PS：正常运行的前提是配置了目标用户 `mids`，否则不会运行。',
  },
  {
    params: {
      title: '粉丝亲密度',
      task: 'intimacy',
    },
    content: 'PS：如果想要观看直播间获取亲密度，请手动开启 `liveHeart`。',
  },
  {
    params: {
      title: '漫画任务',
      task: 'manga',
    },
    content:
      '- mc 获取：<https://manga.bilibili.com/detail/mc29195> 这篇漫画的 mcId 就是 `29195`。[获取方式](/config/func#漫画-id)',
  },
  {
    params: {
      title: '兑换漫读券',
      task: 'exchange_coupon',
    },
    content: `注意：请使用自定义任务运行（别问怎么自定义任务，自己看文档）<br/> 建议在 23:59:58 左右开启，这样会在 0 点前获取到积分数据。`,
  },
  {
    params: {
      title: '大积分兑换',
      task: 'exchange_big_point',
    },
    content:
      '注意：请使用自定义任务运行（别问怎么自定义任务，自己看文档）<br/> 建议在 11:59:54 左右开启，这样会在 12 点前获取到积分数据。',
  },
  {
    params: {
      title: '风纪委员',
      task: 'jury',
    },
    content:
      '默认配置逻辑：获取案件后有观点就参考观点（仅能参考发表了评论的人的观点，且排除无法判断选项），没有就投默认（好或者普通）。<br/> PS：任务风纪委员可能会因为审核期间漏掉一天的审核，所以建议运行时间为每天的晚上 10 点左右，当然一天多次更好。',
  },
  {
    params: {
      title: '大积分',
      task: 'big_point',
    },
    content: '默认配置逻辑：领取所有任务，完成能够自动完成的任务，并等待 5s 后重新执行一次。',
  },
  {
    params: {
      title: '转盘抽奖',
      task: 'activity_lottery',
    },
    content: '默认配置逻辑：请求由爬虫提供的活动列表，尝试分享增加次数，然后参与抽奖。',
  },
  {
    params: {
      title: '大会员每日 10 经验',
      task: 'add_exp',
    },
    content:
      '默认配置逻辑：无需配置，主动播放视频（如需）并领取。没有年度大会员也可以在配置中开启非大会员领取。',
  },
  {
    params: {
      title: '每日电池',
      task: 'daily_battery',
    },
    content: '由于任务不唯一，没有开发条件，故停滞。（主要还是没人用',
  },
  {
    params: {
      title: '直播心跳',
      task: 'watch_link',
    },
    content: '',
  },
  {
    params: {
      title: '直播弹幕',
      task: 'live_dm',
    },
    content: '自定义数组中的每项可以是数组，也可以是对象，（注意是也可以，不是都需要），例如',
  },
  {
    params: {
      title: '日志',
      task: 'log',
    },
    content: '',
  },
  {
    params: {
      title: '推送',
      task: 'message',
    },
    content: '',
  },
  {
    params: {
      title: '限制',
      task: 'limit',
    },
    content: '',
  },
  {
    params: {
      title: 'app 配置',
      task: 'app',
    },
    content: '',
  },
];

export default {
  paths() {
    return paths;
  },
};
