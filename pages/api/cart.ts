import { NextApiRequest, NextApiResponse } from 'next';
import { CartItem, addToCart, clearCart } from '../../types/Cart';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const CART_FILE_PATH = join(process.cwd(), 'pages','api', 'cart.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') 
  {
    const cartData = readFileSync(CART_FILE_PATH, 'utf8');
    const cart = JSON.parse(cartData) as CartItem[];
    res.status(200).json(cart);

  } 
  else if (req.method === 'POST') 
  {
    const cartItem: CartItem = req.body;
    addToCart(cartItem);

    const cartData = readFileSync(CART_FILE_PATH, 'utf8');
    const cart = JSON.parse(cartData) as CartItem[];
    cart.push(cartItem);
    writeFileSync(CART_FILE_PATH, JSON.stringify(cart));

    res.status(201).json(cartItem);
  } 
  else if (req.method === 'DELETE') 
  {
    const { id } = req.query;

    const cartData = readFileSync(CART_FILE_PATH, 'utf8');
    const cart = JSON.parse(cartData) as CartItem[];
    const filteredCart = cart.filter(item => item.id !== String(id));

    writeFileSync(CART_FILE_PATH, JSON.stringify(filteredCart));
    res.status(204).end();
  } 
  else {
    res.status(404).end();
  }
}
