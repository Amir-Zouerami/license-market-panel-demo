import { Order } from "@/types/Orders";

export const addKeyToOrders = (orders: Order[]) => {
  return orders.map(order => ({ ...order, key: order.id }));
};
