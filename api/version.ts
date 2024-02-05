import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (_request: VercelRequest, response: VercelResponse) => {
  // 从 npm 获取最新版本号、
  const npmVersion = await fetch('https://registry.npmjs.org/bilioutils/latest')
    .then(res => res.json())
    // @ts-ignore
    .then(res => res.version);
  return response.status(200).json({
    tag_name: npmVersion || process.env.VERVEL_TAG_NAME,
    notice: {
      common: [
        '本项目开源且免费，文档地址 https://bo.js.cool 使用请自觉 star，请不要无故 fork 本项目。文档 UI 已经更换，如果文档没有更新，请使用 ctrl + shift + r 强制刷新。',
      ],
      scf: [],
      fc: [],
      agc: [],
      cfc: [],
      fg: [],
    },
  });
};
