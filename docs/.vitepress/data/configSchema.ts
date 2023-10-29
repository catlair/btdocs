export const jurySchema = {
  type: 'object',
  properties: {
    repeat: {
      type: 'integer',
      title: '重复运行次数',
      default: 999,
      description: '重复运行次数，小于0为无限制',
    },
    vote: {
      type: 'array',
      title: '默认投票',
      items: {
        type: 'integer',
        enum: [0, 1, 2, 3],
        'ui:showTitle': false,
        'ui:widget': 'RadioWidget',
        enumNames: ['好', '一般', '差', '无法判断'],
      },
      default: [0, 0, 1],
      description: '默认投票 0-3 好-无法判断（随机选择，多个可增加概率）',
    },
    opinion: {
      type: 'boolean',
      title: '参考投票',
      default: true,
      description: '是否采用参考投票',
    },
    opinionMin: {
      type: 'integer',
      title: '参考投票最少人数',
      default: 3,
      description: '有效的参考投票最少人数，少于则使用默认投票',
    },
    notOpinion: {
      type: 'array',
      title: '排除投票',
      default: [3],
      items: {
        type: 'integer',
        'ui:showTitle': false,
        enum: [0, 1, 2, 3],
        enumNames: ['好', '一般', '差', '无法判断'],
        'ui:widget': 'RadioWidget',
      },
      description: '排除投票 0-3 好-无法判断，用于配合参考投票，不影响【默认投票】配置',
    },
    waitTime: {
      type: 'integer',
      title: '等待时间',
      default: 20,
      description: '没有案件后的等待时间（分）',
    },
    insiderWeight: {
      type: 'number',
      title: 'insiders 参考值',
      default: 0.8,
      description: '参考别人观点时，如果他观看了视频则为 1，否则为此值',
    },
    insiders: {
      type: 'array',
      title: '重复运行次数',
      default: [0, 1],
      items: {
        type: 'integer',
        'ui:showTitle': false,
        enum: [0, 1],
        enumNames: ['不观看', '观看'],
        'ui:widget': 'RadioWidget',
      },
      description: '是否观看视频 0 不观看，1 观看（随机选择，多个可增加概率）',
    },
    anonymous: {
      type: 'array',
      title: '重复运行次数',
      default: [0, 1],
      items: {
        type: 'integer',
        enum: [0, 1],
        'ui:showTitle': false,
        enumNames: ['不匿名', '匿名'],
        'ui:widget': 'RadioWidget',
      },
      description: '是否匿名 0 不匿名，1 匿名（随机选择，多个可增加概率）',
    },
    newTrigger: {
      type: 'boolean',
      title: '新的触发器进行休眠',
      default: true,
      description: '云函数下使用新的触发器进行休眠',
    },
    async: {
      type: 'boolean',
      title: '异步',
      default: false,
      description: '异步，非云函数下使用。不支持推送结果',
    },
  },
};

export const matchSchema = {
  type: 'object',
  properties: {
    coins: {
      type: 'integer',
      title: '压硬币数量',
      default: 2,
      description: '压硬币数量',
      maximum: 10,
      minimum: 1,
    },
    selection: {
      type: 'integer',
      title: '压硬币规则',
      default: 1,
      description: '压硬币规则 大于0 是正压，小于反压',
    },
    diff: {
      type: 'number',
      title: '比赛赔率差',
      default: 7,
      description: '比赛赔率差距需要大于多少才压',
    },
  },
};

export const giftSchema = {
  type: 'object',
  properties: {
    mids: {
      type: 'array',
      title: '投喂列表',
      default: [],
      items: {
        type: 'integer',
      },
      description: '自定义投喂礼物用户列表',
    },
    id: {
      type: 'array',
      title: '投喂礼物 id',
      items: {
        type: 'integer',
      },
      default: [1, 30607, 30426, 31531, 31674],
      description: '投喂礼物 id',
    },
    name: {
      type: 'array',
      title: '投喂礼物 name',
      items: {
        type: 'string',
      },
      default: [],
      description: '投喂礼物 name',
    },
    all: {
      type: 'boolean',
      title: '无视配置',
      default: false,
      description: '无视其它礼物配置，投喂所有即将过期礼物',
    },
    expire: {
      type: 'boolean',
      title: '过期的礼物',
      default: true,
      description: '仅投喂即将过期的礼物',
    },
  },
};

export const couponBalanceSchema = {
  type: 'object',
  properties: {
    mid: {
      type: 'integer',
      title: '充电的 up',
      default: 0,
      description: '充电的 up 默认自己',
    },
    presetTime: {
      type: 'array',
      title: '执行时间',
      default: [10, 20],
      items: {
        type: 'integer',
      },
      description: '预设时间，哪一天？设置为空数组即每一天',
    },
    use: {
      type: 'string',
      title: '使用方式',
      default: '充电',
      description: '使用方式',
      enum: ['充电', '电池'],
    },
  },
};

export const coinSchema = {
  type: 'object',
  properties: {
    customizeUp: {
      type: 'array',
      title: '投币列表',
      default: [],
      items: {
        type: 'integer',
      },
      description: '自定义高优先级用户列表',
    },
    targetLevel: {
      type: 'integer',
      title: '目标等级',
      default: 6,
      maximum: 6,
      minimum: 0,
      description: '目标等级 默认6级',
    },
    stayCoins: {
      type: 'integer',
      title: '剩余硬币数',
      default: 0,
      minimum: 0,
      description: '最低剩余硬币数,默认0',
    },
    targetCoins: {
      type: 'integer',
      title: '预计投币数',
      default: 5,
      minimum: 1,
      description: '预计投币数,默认5',
    },
    src: {
      type: 'array',
      title: '获取稿件的来源',
      items: {
        type: 'string',
      },
      default: ['自定义UP', '特别关注', '关注', '首页推荐', '分区排行'],
      description: '获取稿件的来源（排序），留空则来自 首页推荐',
    },
    upperAccMatch: {
      type: 'boolean',
      title: '精准投币',
      default: false,
      description: '稿件必须是 up 的稿件，而非合作视频中的参与者',
    },
  },
};

export const mangaSchema = {
  type: 'object',
  properties: {
    buyNum: {
      title: '购买漫画的数量',
      default: 1,
      type: 'integer',
      description: '购买漫画的数量，小于 1 为自动。仅在 buyMangaOnlyBeforeExpire 为 false 时有效',
    },
    sign: {
      type: 'boolean',
      title: '签到',
      default: true,
    },
    buy: {
      type: 'boolean',
      title: '购买漫画',
      default: false,
    },
    read: {
      type: 'boolean',
      default: true,
      title: '每日阅读',
    },
    mc: {
      type: 'array',
      title: '购买漫画 id（优先级高）',
      default: [],
      items: {
        type: 'integer',
      },
    },
    name: {
      type: 'array',
      title: '购买漫画名称（优先级中）',
      default: [],
      items: {
        type: 'string',
      },
    },
    love: {
      type: 'boolean',
      title: '购买追漫（优先级低）',
      default: true,
    },
  },
};

export const intimacySchema = {
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

export const unFollowSchema = {
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
      items: {
        type: 'integer',
      },
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

export const dailyBatterySchema = {
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

export const bigPointSchema = {
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

export const exchangeBigPointSchema = {
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

export const exchangeCouponSchema = {
  type: 'object',
  properties: {
    num: {
      title: '兑换漫读券数量',
      default: 1,
      type: 'integer',
      description: '兑换漫读券数量，小于 1 为自动',
    },
    delay: {
      title: '间隔时间',
      default: 2000,
      type: 'integer',
      description: '单位 ms，随机误差 -50 ~ 150',
    },
    keepAmount: {
      title: '保留积分数',
      default: 0,
      type: 'integer',
    },
    startHour: {
      type: 'array',
      title: '兑换开始时间',
      items: {
        type: 'integer',
      },
    },
    multiNum: {
      title: '分多次兑换',
      type: 'integer',
    },
  },
};

export const redPackSchema = {
  type: 'object',
  properties: {
    source: {
      title: '直播间来源方式',
      type: 'integer',
    },
    uri: {
      type: 'string',
    },
    intervalActive: {
      title: '每轮抢红包的间隔时间',
      type: 'integer',
    },
    restTime: {
      type: 'array',
      title: '中场休息时间',
      items: {
        type: 'integer',
      },
    },
    riskTime: {
      type: 'array',
      title: '疑似触发风控时休眠时间',
      items: {
        type: 'integer',
      },
    },
    riskSleepTime: {
      type: 'integer',
    },
    linkRoomNum: {
      title: '同时参与的直播间数量',
      type: 'integer',
    },
    totalNum: {
      title: '总参与次数',
      type: 'integer',
    },
    dmNum: {
      type: 'array',
      title: '参与直播时发送的弹幕数量',
      items: {
        type: 'integer',
      },
    },
    moveUpInWait: {
      title: '是否在等待时处理关注用户',
      type: 'boolean',
    },
    moveTag: {
      type: 'string',
    },
    actFollowMsg: {
      type: 'string',
      enum: ['read', 'del', 'delete', 'none'],
    },
    noWinNum: {
      title: '连续超过多少次没有中',
      type: 'integer',
    },
    riskNum: {
      title: '连续疑似触发风控多少次',
      type: 'integer',
    },
  },
};

export const lotterySchema = {
  type: 'object',
  properties: {
    excludeAward: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    includeAward: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    blackUid: {
      type: 'array',
      items: {
        type: 'integer',
      },
    },
    moveTag: {
      type: 'string',
    },
    pageNum: {
      title: '天选获取的直播页数',
      type: 'integer',
    },
    actFollowMsg: {
      type: 'string',
      enum: ['read', 'del', 'delete', 'none'],
    },
    scanFollow: {
      type: 'string',
      enum: ['only'],
    },
    skipNeedFollow: {
      type: 'boolean',
    },
    mayBeWinMsg: {
      type: 'boolean',
    },
  },
};

export const activityLotterySchema = {
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

export const watchLinkSchema = {
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

export const liveDmSchema = {
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

export const blinkSchema = {
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

export const appSchema = {
  type: 'object',
  properties: {
    http: {
      type: 'object',
      properties: {
        build: {
          type: 'integer',
        },
      },
    },
  },
};

export const functionSchema = {
  type: 'object',
  properties: {
    silver2Coin: {
      type: 'boolean',
      title: '瓜子兑换硬币',
      default: true,
    },
    liveSignTask: {
      type: 'boolean',
      title: '直播签到',
      default: true,
    },
    addCoins: {
      type: 'boolean',
      title: '投币',
      default: true,
    },
    shareAndWatch: {
      type: 'boolean',
      title: '分享和观看',
      default: true,
    },
    supGroupSign: {
      type: 'boolean',
      title: '应援团签到',
      default: false,
    },
    useCouponBp: {
      type: 'boolean',
      title: '使用 b 币券',
      default: false,
    },
    charging: {
      type: 'boolean',
      title: '充电（废弃）',
      default: false,
    },
    getVipPrivilege: {
      type: 'boolean',
      title: '获取 vip 权益',
      default: false,
    },
    giveGift: {
      type: 'boolean',
      title: '直播赠送礼物',
      default: false,
    },
    matchGame: {
      type: 'boolean',
      title: '赛事竞猜',
      default: false,
    },
    liveLottery: {
      type: 'boolean',
      title: '直播天选时刻',
      default: false,
    },
    liveRedPack: {
      type: 'boolean',
      title: '直播天选红包',
      default: false,
    },
    batchUnfollow: {
      type: 'boolean',
      title: '批量取关',
      default: false,
    },
    liveIntimacy: {
      type: 'boolean',
      title: '粉丝牌等级',
      default: false,
    },
    mangaTask: {
      type: 'boolean',
      title: '漫画任务',
      default: false,
    },
    bigPoint: {
      type: 'boolean',
      title: '大会员积分',
      default: false,
    },
    judgement: {
      type: 'boolean',
      title: '风纪委员',
      default: false,
    },
    activityLottery: {
      type: 'boolean',
      title: '转盘抽奖',
      default: false,
    },
    dailyBattery: {
      type: 'boolean',
      title: '每日电池',
      default: false,
    },
    liveWeekTask: {
      type: 'boolean',
      title: '每日直播任务',
      default: false,
    },
    blink: {
      type: 'boolean',
      title: '直播',
      default: false,
    },
    watchLink: {
      type: 'boolean',
      title: '直播间心跳',
      default: false,
    },
    liveDm: {
      type: 'boolean',
      title: '直播弹幕',
      default: false,
    },
    addExp: {
      type: 'boolean',
      title: '大会员领取经验',
      default: true,
    },
  },
};

export const limitSchema = {
  type: 'object',
  properties: {
    level6: {
      type: 'boolean',
      title: '获取经验限制为 6 级',
      default: true,
    },
    coins5: {
      type: 'boolean',
      title: '投币限制为 5 颗',
      default: true,
    },
    buyMangaOnlyBeforeExpire: {
      type: 'boolean',
      title: '仅在漫画即将过期前购买漫画',
      default: true,
    },
  },
};

export const messageSchema = {
  type: 'object',
  properties: {
    br: {
      type: 'string',
      title: 'markdown 格式需要 \\n\\n',
      default: '\n',
    },
    onlyError: {
      type: 'boolean',
      title: '仅错误时发送',
      default: false,
    },
    email: {
      type: 'object',
      title: 'email',
      properties: {
        host: {
          type: 'string',
          title: 'host',
          default: 'smtp.163.com',
        },
        port: {
          type: 'integer',
          title: 'port',
          default: 465,
        },
      },
    },
    pushplusToken: {
      type: 'string',
      title: 'pushplusToken',
      default: '',
    },
    api: {
      type: 'object',
      title: 'api',
      properties: {
        method: {
          type: 'string',
          title: 'method',
          default: 'POST',
        },
        headers: {
          type: 'object',
          title: 'headers',
          properties: {
            'Content-Type': {
              type: 'string',
              title: 'Content-Type',
              default: 'application/json',
            },
          },
        },
        timeout: {
          type: 'integer',
          title: 'timeout',
          default: 5000,
        },
        url: {
          type: 'string',
          title: 'url',
          default: '',
        },
        proxy: {
          type: 'object',
          title: 'proxy',
          properties: {
            host: {
              type: 'string',
              title: 'host',
              default: '',
            },
            port: {
              type: 'integer',
              title: 'port',
              default: 443,
            },
            auth: {
              type: 'string',
              title: 'auth',
              default: '',
            },
          },
        },
        data: {
          type: 'object',
          title: 'data',
          default: {},
        },
      },
    },
  },
};

export const logSchema = {
  type: 'object',
  properties: {
    pushLevel: {
      type: 'string',
      enum: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
    },
    consoleLevel: {
      type: 'string',
      enum: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
    },
    fileLevel: {
      type: 'string',
      enum: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
    },
    useEmoji: {
      type: 'boolean',
    },
    fileSplit: {
      type: 'string',
      enum: ['day', 'month'],
    },
  },
};

export const baseSchema = {};

export default {
  jurySchema,
  matchSchema,
  giftSchema,
  couponBalanceSchema,
  coinSchema,
  mangaSchema,
  intimacySchema,
  unFollowSchema,
  dailyBatterySchema,
  bigPointSchema,
  exchangeBigPointSchema,
  exchangeCouponSchema,
  redPackSchema,
  lotterySchema,
  activityLotterySchema,
  watchLinkSchema,
  blinkSchema,
  liveDmSchema,
  appSchema,
  functionSchema,
  limitSchema,
  messageSchema,
  logSchema,
  baseSchema,
};
