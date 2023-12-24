import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Bilicomic } from '@catlair/bilicomic-dataflow';

export default async (request: VercelRequest, response: VercelResponse) => {
  const bilicomic = new Bilicomic(request.query.mid, request.query.comic, request.query.ep);
  try {
    await bilicomic.read(Number(request.query.time) * 2 + 2);
    return response.status(200).json({
      msg: 'ok',
    });
  } catch (e) {
    return response.status(200).json({ msg: e.message });
  }
};
