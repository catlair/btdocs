export const schema = {
  type: 'object',
  required: ['cookie'],
  properties: {
    __common__: {
      type: 'boolean',
      description: '是否启用通用配置',
    },
    cookie: { type: 'string' },
    createCookieDay: { type: 'number' },

    message: {
      type: 'object',
      properties: {
        br: { type: 'string' },
        onlyError: { type: 'boolean' },
        email: {
          type: 'object',
          properties: {
            host: { type: 'string' },
            port: { type: 'number' },
            from: { type: 'string' },
            to: { type: 'string' },
            pass: { type: 'string' },
          },
          required: ['pass', 'from'],
        },
        pushplusToken: { type: 'string' },
        api: {
          type: 'object',
          properties: {
            method: { type: 'string' },
            headers: { type: 'object' },
            timeout: { type: 'number' },
            url: { type: 'string' },
            proxy: {
              type: 'object',
              properties: {
                host: { type: 'string' },
                port: { type: 'number' },
                auth: { type: 'string' },
              },
              required: ['host', 'port'],
            },
            data: { type: 'object' },
          },
        },
      },
    },

    function: {
      type: 'object',
      properties: {
        silver2Coin: { type: 'boolean', description: '瓜子兑换硬币' },
        liveSignTask: { type: 'boolean', description: '直播签到' },
        addCoins: { type: 'boolean', description: '投币' },
        shareAndWatch: { type: 'boolean', description: '分享和观看' },
        supGroupSign: { type: 'boolean', description: '应援团签到' },
        useCouponBp: { type: 'boolean', description: '使用 b 币券' },
        charging: { type: 'boolean', description: '充电（废弃）' },
        getVipPrivilege: { type: 'boolean', description: '获取 vip 权益' },
        giveGift: { type: 'boolean', description: '直播赠送礼物' },
        matchGame: { type: 'boolean', description: '赛事竞猜' },
        liveLottery: { type: 'boolean', description: '直播天选时刻' },
        liveRedPack: { type: 'boolean', description: '直播天选红包' },
        batchUnfollow: { type: 'boolean', description: '批量取关' },
        liveIntimacy: { type: 'boolean', description: '粉丝牌等级' },
        mangaTask: { type: 'boolean', description: '漫画任务' },
        bigPoint: { type: 'boolean', description: '大会员积分' },
        judgement: { type: 'boolean', description: '风纪委员' },
        activityLottery: { type: 'boolean', description: '转盘抽奖' },
        dailyBattery: { type: 'boolean', description: '每日电池' },
        liveWeekTask: { type: 'boolean', description: '每日直播任务' },
        blink: { type: 'boolean', description: '直播' },
        watchLink: { type: 'boolean', description: '直播间心跳' },
        liveDm: { type: 'boolean', description: '直播弹幕' },
      },
    },

    log: {
      type: 'object',
      properties: {
        pushLevel: { type: 'string' },
        consoleLevel: { type: 'string' },
        fileLevel: { type: 'string' },
        useEmoji: { type: 'boolean' },
        fileSplit: { type: 'string' },
      },
    },
    limit: {
      type: 'object',
      description: '限制配置',
      properties: {
        level6: {
          type: 'boolean',
          description: '获取经验限制为 6 级',
        },
        coins5: {
          type: 'boolean',
          description: '投币限制为 5 颗',
        },
      },
    },
    apiDelay: {
      type: 'array',
      items: { type: 'number' },
    },
    userAgent: { type: 'string' },
    dailyRunTime: { type: 'string' },
    match: {
      type: 'object',
      description: '赛事竞猜配置',
      properties: {
        coins: {
          type: 'number',
          description: '压硬币数量',
        },
        selection: {
          type: 'number',
          description: '压硬币规则，大于 0 是正压，小于 0 是反压',
        },
        diff: {
          type: 'number',
          description: '比赛赔率差距需要大于多少才压',
        },
      },
    },
    couponBalance: {
      type: 'object',
      description: 'b 币券配置',
      properties: {
        mid: {
          type: 'number',
          description: '充电的 up，默认为自己',
        },
        presetTime: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '预设时间，哪一天？设置为空数组即每一天',
        },
        use: {
          type: 'string',
          description: '使用方式',
          enum: ['充电'],
        },
      },
    },
    gift: {
      type: 'object',
      description: '礼物配置',
      properties: {
        mids: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '自定义投喂礼物用户列表',
        },
        id: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '投喂礼物 id',
        },
        name: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: '投喂礼物 name',
        },
        all: {
          type: 'boolean',
          description: '是否无视其它礼物配置，投喂所有即将过期礼物',
        },
        expire: {
          type: 'boolean',
          description: '是否仅投喂即将过期的礼物',
        },
      },
    },
    coin: {
      type: 'object',
      description: '投币配置',
      properties: {
        customizeUp: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '自定义高优先级用户列表',
        },
        targetLevel: {
          type: 'number',
          description: '目标等级，默认为 6 级',
        },
        stayCoins: {
          type: 'number',
          description: '最低剩余硬币数，默认为 0',
        },
        targetCoins: {
          type: 'number',
          description: '预计投币数，默认为 5',
        },
        upperAccMatch: {
          type: 'boolean',
          description: '稿件必须是 up 的稿件，而非合作视频中的参与者',
        },
        src: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: '获取稿件的来源（排序），留空则来自首页推荐',
        },
      },
    },
    lottery: {
      type: 'object',
      properties: {
        excludeAward: { type: 'array', items: { type: 'number' } },
        includeAward: { type: 'array', items: { type: 'number' } },
        blackUid: { type: 'array', items: { type: 'number' } },
        moveTag: { type: 'string' },
        pageNum: { type: 'number' },
        actFollowMsg: { type: 'string' },
        scanFollow: { type: 'string' },
        skipNeedFollow: { type: 'boolean' },
        mayBeWinMsg: { type: 'boolean' },
      },
    },
    redPack: {
      type: 'object',
      properties: {
        source: { type: 'number' },
        uri: { type: 'string' },
        intervalActive: { type: 'number' },
        restTime: { type: 'array', items: { type: 'number' } },
        riskTime: { type: 'array', items: { type: 'number' } },
        riskSleepTime: { type: 'number' },
        linkRoomNum: { type: 'number' },
        totalNum: { type: 'number' },
        dmNum: { type: 'array', items: { type: 'number' } },
        moveUpInWait: { type: 'boolean' },
        moveTag: { type: 'string' },
        actFollowMsg: { type: 'string' },
        noWinNum: { type: 'number' },
        riskNum: { type: 'number' },
      },
    },
    unFollow: {
      type: 'object',
      properties: {
        delay: { type: 'number' },
        restTime: { type: 'array', items: { type: 'number' } },
        totalNum: { type: 'number' },
        tags: { type: 'array', items: { type: 'string' } },
      },
    },
    intimacy: {
      type: 'object',
      description: '亲密度配置',
      properties: {
        liveSendMessage: {
          type: 'boolean',
          description: '是否发送直播弹幕',
        },
        liveLike: {
          type: 'boolean',
          description: '是否点赞直播间',
        },
        liveHeart: {
          type: 'boolean',
          description: '是否进行直播心跳',
        },
        whiteList: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '白名单列表',
        },
        blackList: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '黑名单列表',
        },
        limitFeed: {
          type: 'number',
          description: '每日亲密度上限',
        },
        skipNum: {
          type: 'number',
          description: '同时有多少个直播间已获取亲密度超过200时，强制跳过弹幕和点赞。小于 0 不跳过',
        },
        isRetryHeart: {
          type: 'boolean',
          description: '完成直播心跳后是否再检查一次，可能因为数据延迟而重复操作，不建议云函数开启',
        },
        dm: {
          type: 'object',
          description: '专属弹幕列表',
        },
      },
    },
    jury: {
      type: 'object',
      description: '风纪委员配置',
      properties: {
        once: {
          type: 'boolean',
          description: '是否只投票一次',
        },
        vote: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '默认投票选项',
        },
        opinion: {
          type: 'boolean',
          description: '是否采用参考投票',
        },
        opinionMin: {
          type: 'number',
          description: '参考投票最少人数',
        },
        notOpinion: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '排除投票选项',
        },
        waitTime: {
          type: 'number',
          description: '没有案件后的等待时间（单位为分钟）',
        },
        insiderWeight: {
          type: 'number',
          description: 'insiders 数组中的值的权重',
        },
        insiders: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '是否观看视频',
        },
        anonymous: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '是否匿名',
        },
        newTrigger: {
          type: 'boolean',
          description: '是否使用新的触发器进行休眠',
        },
        async: {
          type: 'boolean',
          description: '是否异步执行',
        },
      },
    },
    manga: {
      type: 'object',
      description: '漫画配置',
      properties: {
        sign: {
          type: 'boolean',
          description: '是否签到',
        },
        buy: {
          type: 'boolean',
          description: '是否购买漫画',
        },
        read: {
          type: 'boolean',
          description: '是否阅读漫画',
        },
        mc: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '要购买的漫画的 ID',
        },
        name: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: '要购买的漫画的名称',
        },
        love: {
          type: 'boolean',
          description: '是否购买追漫',
        },
      },
    },
    exchangeCoupon: {
      type: 'object',
      properties: {
        num: { type: 'number' },
        delay: { type: 'number' },
        keepAmount: { type: 'number' },
        startHour: { type: 'number' },
      },
    },
    exchangeBigPoint: {
      type: 'object',
      properties: {
        delay: { type: 'number' },
        retry: { type: 'number' },
        startDelay: { type: 'number' },
        name: { type: 'array', items: { type: 'string' } },
        token: { type: 'array', items: { type: 'string' } },
      },
    },
    bigPoint: {
      type: 'object',
      description: '大会员积分配置',
      properties: {
        isRetry: {
          type: ['boolean', 'number'],
          description: '是否重试或重试间隔时间（单位为秒）',
        },
        isWatch: {
          type: 'boolean',
          description: '是否观看视频',
        },
        watchDelay: {
          type: 'number',
          description: '领取任务后的观看延时（单位为秒）',
        },
      },
    },
    activityLottery: {
      type: 'object',
      description: '转盘抽奖配置',
      properties: {
        list: {
          type: 'array',
          items: {
            type: 'object',
          },
          description: '活动列表',
        },
        isRequest: {
          type: 'boolean',
          description: '是否从网络请求活动列表',
        },
        delay: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '抽奖延时（单位为秒）',
        },
        bangumi: {
          type: 'boolean',
          description: '是否追番',
        },
        follow: {
          type: 'boolean',
          description: '是否关注',
        },
        proxyPrefix: {
          type: 'string',
          description: '请求 GitHub 使用的代理前缀',
        },
        customUrl: {
          type: 'string',
          description: '自定义活动列表链接',
        },
      },
    },
    watchLink: {
      type: 'object',
      description: '直播间心跳配置',
      properties: {
        uid: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '用户 uid，非直播间 id',
        },
        roomid: {
          type: 'array',
          items: {
            type: 'number',
          },
          description: '直播间 id',
        },
        heart: {
          type: 'boolean',
          description: '是否进行直播心跳',
        },
        time: {
          type: 'number',
          description: '直播心跳的时间间隔（单位为秒）',
        },
        wss: {
          type: 'boolean',
          description: '是否进行直播 wss 心跳',
        },
        tcp: {
          type: 'boolean',
          description: '是否进行直播 tcp 心跳，与 wss 是一致的',
        },
        parentId: {
          type: 'number',
          description: '父级 id',
        },
        areaId: {
          type: 'number',
          description: '区域 id',
        },
        area: {
          type: 'array',
          items: {
            type: 'array',
            items: {
              type: 'number',
            },
          },
          description: '分区',
        },
      },
    },
    liveDm: {
      type: 'object',
      properties: {
        roomid: { type: 'array', items: { type: 'number' } },
        delay: { type: 'array', items: { type: 'number' } },
        num: { type: 'number' },
        custom: { type: 'array' },
      },
    },
    blink: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        parentId: { type: 'number' },
        areaId: { type: 'number' },
        roomid: { type: 'number' },
        time: { type: 'number' },
      },
    },
    app: {
      type: 'object',
      properties: {
        http: { type: 'object' },
      },
    },
    dailyBattery: {
      type: 'object',
      description: '每日电池配置',
      properties: {
        type: 'array',
      },
    },
  },
};

export const arrSchema = {
  type: 'array',
  items: schema,
};
