import { useGetOrders } from "@/lib/apiHandlers/Orders/GetAllOrders";
import CommonTable from "@/components/Common/Table/CommonTable";
import TableSearch from "@/components/Common/Table/TableSearch";
import { getOrderTableColumns } from "./TableColumns";
import React, { useState } from "react";
import { Order } from "@/types/Orders";

const OrdersTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useGetOrders(page);
  const columns = getOrderTableColumns(TableSearch<Order>());

  return (
    <CommonTable
      page={page}
      totalItems={data?.data.meta.total}
      setPage={setPage}
      data={data?.data.data}
      isPending={isPending}
      error={error}
      columns={columns}
    />
  );
};

export default OrdersTable;
