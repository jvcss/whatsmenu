// api/cardapio.ts

import { NextApiRequest, NextApiResponse } from 'next';
import cart from './cart.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cart);
}