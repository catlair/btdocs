export const intimacy = {
  type: 'object',
  properties: {
    liveSendMessage: {
      type: 'boolean',
      default: true,
      title: '直播弹幕',
    },
    liveLike: {
      type: 'boolean',
      default: true,
      title: '点赞直播间',
    },
    liveHeart: {
      type: 'boolean',
      default: false,
      title: '直播心跳',
    },
    whiteList: {
      type: 'array',
      title: '白名单',
      items: {
        type: 'integer',
      },
      default: [],
      description: '白名单',
    },
    blackList: {
      type: 'array',
      title: '黑名单',
      items: {
        type: 'integer',
      },
      description: '黑名单',
      default: [],
    },
    limitFeed: {
      type: 'integer',
      default: 1500,
      title: '每日亲密度上限 （系统 1500）',
      description: '每日亲密度上限 （系统 1500）',
    },
    skipNum: {
      type: 'integer',
      default: 10,
      title: '跳过直播间',
      description: '同时有多少个直播间已获取亲密度超过 200 时，强制跳过弹幕和点赞。小于 0 不跳过',
    },
    isRetryHeart: {
      type: 'boolean',
      default: false,
      title: '是否重试',
      description: '完成直播心跳后是否再检查一次，可能因为数据延迟而重复操作，不建议云函数开启',
    },
    // 专属弹幕
    dm: {
      type: 'object',
      properties: {},
    },
  },
};

export const unFollow = {
  type: 'object',
  properties: {
    delay: {
      type: 'integer',
      title: '时间间隔',
      default: 3,
      minimum: 0,
      description: '单个取消的时间间隔（秒）',
    },
    restTime: {
      type: 'array',
      title: '中场休息，',
      default: [20, -1],
      description:
        '中场休息，[取消数量, 休息时间（分）] 取消数量和休息时间都应该为正数（非0），否则无效',
    },
    totalNum: {
      type: 'integer',
      title: '总数',
      default: -1,
      minimum: -1,
      description: '总数 -1 无限制',
    },
    tags: {
      type: 'array',
      title: '取消关注的 tag',
      items: {
        type: 'string',
      },
      description: '取消关注的 tag',
      default: ['天选时刻', 'rp关注'],
    },
  },
};

export const dailyBattery = {
  type: 'object',
  properties: {
    tasks: {
      type: 'array',
      title: '任务列表',
      default: ['5弹幕', '20弹幕', '20弹幕30秒观看'],
      items: {
        type: 'string',
        enum: ['5弹幕', '20弹幕', '20弹幕30秒观看'],
      },
    },
    delay: {
      type: 'array',
      title: '每次任务间隔时间',
      default: [8, 12],
      items: {
        type: 'number',
        minimum: 0,
      },
    },
    delayByRoomid: {
      type: 'array',
      title: '重复获取到同一roomid时的等待时间',
      default: [10, 20],
      items: {
        type: 'number',
        minimum: 0,
      },
    },
  },
};

export const bigPoint = {
  type: 'object',
  properties: {
    isRetry: {
      type: 'integer',
      title: '重试等待时间（秒）',
      default: 20,
    },
    isWatch: {
      type: 'boolean',
      title: '是否观看视频',
      default: true,
    },
    watchDelay: {
      type: 'integer',
      title: '领取任务后的观看延时',
      default: 40,
    },
  },
};

export const exchangeBigPoint = {
  type: 'object',
  properties: {
    delay: {
      type: 'integer',
      title: '多次尝试间隔时间',
      default: 200,
    },
    retry: {
      type: 'integer',
      title: '重试次数',
      default: 3,
    },
    startDelay: {
      type: 'integer',
      title: '启动延时',
      default: 30,
    },
    name: {
      type: 'array',
      title: '兑换商品名称',
      default: [],
      items: {
        type: 'string',
      },
    },
    token: {
      type: 'array',
      title: '兑换商品 token',
      default: [],
      items: {
        type: 'string',
      },
    },
  },
};

export const exchangeCoupon = {};

export const redPack = {};

export const lottery = {};

export const activityLottery = {
  type: 'object',
  properties: {
    list: {
      type: 'array',
      title: '活动列表',
      default: [],
      items: {
        type: 'object',
      },
    },
    isRequest: {
      type: 'boolean',
      title: '是否从网络请求活动列表',
      default: true,
    },
    delay: {
      type: 'array',
      title: '抽奖延时',
      default: [1.8, 3.2],
      items: {
        type: 'number',
        minimum: 0,
      },
    },
    bangumi: {
      type: 'boolean',
      title: '追番？',
      default: false,
    },
    follow: {
      type: 'boolean',
      title: '关注？',
      default: false,
    },
    proxyPrefix: {
      type: 'string',
      title: '请求 GitHub 使用的代理前缀',
      default: 'https://ghproxy.com/',
    },
    customUrl: {
      type: 'string',
      title: '自定义活动列表链接',
      default: '',
    },
  },
};

export const watchLink = {
  type: 'object',
  properties: {
    uid: {
      type: 'array',
      title: '用户 uid，非直播间 id',
      default: [],
      items: {
        type: 'number',
      },
    },
    roomid: {
      type: 'array',
      title: '直播间 id',
      default: [],
      items: {
        type: 'number',
      },
    },
    heart: {
      type: 'boolean',
      title: '直播心跳',
      default: true,
    },
    time: {
      type: 'integer',
      title: '直播心跳时间',
      default: 30,
    },
    wss: {
      type: 'boolean',
      title: '直播 wss 心跳',
      default: false,
    },
    tcp: {
      type: 'boolean',
      title: '直播 tcp 心跳',
      default: false,
    },
    area: {
      type: 'array',
      title: '分区',
      default: [
        [3, 321],
        [3, 549],
      ],
      items: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
  },
};

export const liveDm = {
  type: 'object',
  properties: {
    roomid: {
      type: 'array',
      title: '直播间 id',
      default: [],
      items: {
        type: 'number',
      },
    },
    delay: {
      type: 'array',
      title: '延时 s',
      default: [8, 13],
      items: {
        type: 'number',
        minimum: 0,
      },
    },
    num: {
      type: 'integer',
      title: '次数',
      default: 0,
    },
    custom: {
      type: 'array',
      title: '自定义',
      default: [],
      items: {
        type: 'object',
      },
    },
  },
};

export const blink = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: '直播间标题',
      default: '',
    },
    parentId: {
      type: 'integer',
      title: 'parentId',
      default: 0,
    },
    areaId: {
      type: 'integer',
      title: 'areaId',
      default: 0,
    },
    roomid: {
      type: 'integer',
      title: '自己的直播间 id',
      default: 0,
    },
    time: {
      type: 'integer',
      title: '直播时间',
      default: 33,
    },
  },
};

export const app = {};

export const function$ = {};

export const limit = {};

export const message = {};

export const log = {};

export const base = {};
