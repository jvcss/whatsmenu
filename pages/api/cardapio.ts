// api/cardapio.ts

import { NextApiRequest, NextApiResponse } from 'next';
import cardapio from './cardapio.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cardapio);
}