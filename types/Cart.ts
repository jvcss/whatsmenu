// cart.ts

export type CartItem = {
  id: number;
  name: string;
  price: number;
};

const cart: CartItem[] = [];

export function getCart(): CartItem[] {
  return cart;
}

export function addToCart(item: CartItem): void {
  cart.push(item);
}

export function clearCart(): void {
  cart.length = 0;
}
