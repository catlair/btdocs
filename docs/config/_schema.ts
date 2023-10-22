export const jury = {
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

export const match = {
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

export const gift = {
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

export const couponBalance = {
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

export const coin = {
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

export const manga = {
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
