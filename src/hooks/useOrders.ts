import { useEffect, useState } from "react";
import { OrderListItem } from "../models/order.model";
import { fetchOrders, fetchOrder } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    const selected = orders.find((item) => item.id === orderId);
    if (!selected) return;

    if (selected.detail) {
      setSelectedItemId(orderId);
      return;
    }

    fetchOrder(orderId).then((orderDetail) => {
      setSelectedItemId(orderId);
      setOrders((prevOrders) =>
        prevOrders.map((item) =>
          item.id === orderId
            ? { ...item, detail: Array.isArray(orderDetail) ? orderDetail : [orderDetail] }
            : item
        )
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};
