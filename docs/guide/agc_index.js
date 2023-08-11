"use strict";

exports.handler = handler;

// 这里填写你的配置，下面是示例，注意不要公开本文件
global.BILITOOLS_CONFIG = {
  function: {
    silver2Coin: false,
    liveSignTask: false,
  },
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63',
  cookie: ""
};

async function handler(event, _context, callback) {
  try {
    const {
      dailyTasks
    } = require("./task/dailyTask");
    const message = await dailyTasks();
    callback === null || callback === void 0 ? void 0 : callback(null, message);
  } catch (error) {
    callback === null || callback === void 0 ? void 0 : callback(error);
  }
}
