export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const STORAGE_KEY = "CaféFlow_cart";

export function getCart(): CartItem[] {
  try {
    const storedCart = localStorage.getItem(STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    return JSON.parse(storedCart) as CartItem[];
  } catch {
    return [];
  }
}

export function addToCart(
  item: Omit<CartItem, "quantity">
): void {
  const cart = getCart();

  const existingItem = cart.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(cart)
  );
}

export function updateCartQuantity(
  itemId: string,
  quantity: number
): void {
  const cart = getCart();

  const updatedCart = cart
    .map((item) =>
      item.id === itemId
        ? { ...item, quantity }
        : item
    )
    .filter((item) => item.quantity > 0);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedCart)
  );
}

export function removeFromCart(itemId: string): void {
  const cart = getCart();

  const updatedCart = cart.filter(
    (item) => item.id !== itemId
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedCart)
  );
}

export function clearCart(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCartCount(): number {
  return getCart().reduce(
    (total, item) => total + item.quantity,
    0
  );
}