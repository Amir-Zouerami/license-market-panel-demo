import { useGetOrders } from "@/lib/apiHandlers/Orders/GetAllOrders";
import CommonTable from "@/components/Common/CommonTable";
import { getOrderTableColumns } from "./TableColumns";
import TableSearch from "./TableSearch";
import React, { useState } from "react";

const OrdersTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useGetOrders(page);
  const columns = getOrderTableColumns(TableSearch());

  return (
    <CommonTable
      page={page}
      totalPages={data?.data.meta.lastPage}
      setPage={setPage}
      data={data?.data.data}
      isPending={isPending}
      error={error}
      columns={columns}
    />
  );
};

export default OrdersTable;
