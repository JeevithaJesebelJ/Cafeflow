import type { CartItem } from "./cartStorage";
import { supabase } from "../lib/supabase";

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

export async function getOrders(): Promise<Order[]> {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    return [];
  }

  return (data ?? []).map((order) => ({
    id: String(order.id),
    name: order.name,
    phone: order.phone,
    items: order.items as CartItem[],
    total: Number(order.total),
    status: order.status as OrderStatus,
    createdAt: order.created_at,
  }));
}

export async function saveOrder(order: Order): Promise<void> {
  const { error } = await supabase.from("orders").insert({
    name: order.name,
    phone: order.phone,
    items: order.items,
    total: order.total,
    status: order.status,
    created_at: order.createdAt,
  });

  if (error) {
    console.error("Error saving order:", error);
    throw error;
  }
}

export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus
): Promise<void> {
  const { error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", Number(orderId));

  if (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
}
