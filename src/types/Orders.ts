interface OrdersMetadata {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: number;
  next: number;
}

export type Order = {
  id: number;
  orderNumber: string;
  orderTime: string;
  dueTime: string;
  deleted: null;
  assignee: number;
  productId: number;
  userId: number;
};

interface PaginatedOrdersSuccess {
  timestamp: string;
  status: string;
  data: {
    data: Order[];
    meta: OrdersMetadata;
  };
  statusCode: number;
}

interface PaginatedOrdersFail {
  errors: {
    message: string;
    error: string;
    statusCode: number;
  };
  timestamp: number;
}

export type PaginatedOrders = PaginatedOrdersSuccess | PaginatedOrdersFail;

export const responseIsError = (
  response: PaginatedOrders
): response is PaginatedOrdersFail => {
  if ("errors" in response) return true;
  return false;
};
