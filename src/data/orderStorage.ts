
import type { CartItem } from "./cartStorage";

export type OrderStatus =
  | "Received"
  | "Preparing"
  | "Ready"
  | "Completed";

export type Order = {
  id: string;
  name: string;
  phone: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
};

const STORAGE_KEY = "CaféFlow_orders";

export function getOrders(): Order[] {
  try {
    const storedOrders = localStorage.getItem(STORAGE_KEY);

    if (!storedOrders) {
      return [];
    }

    return JSON.parse(storedOrders) as Order[];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order): void {
  const existingOrders = getOrders();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...existingOrders, order])
  );
}

export function updateOrderStatus(
  orderId: string,
  status: OrderStatus
): void {
  const orders = getOrders();

  const updatedOrders = orders.map((order) =>
    order.id === orderId
      ? { ...order, status }
      : order
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedOrders)
  );
}

