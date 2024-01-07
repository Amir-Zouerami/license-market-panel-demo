import { useGetOrders } from "@/lib/apiHandlers/Orders/GetAllOrders";
import { addKeyToOrders } from "@/lib/utility/addKeyToOrders";
import { getOrderTableColumns } from "./TableColumns";
import GetOrdersFailed from "./GetOrdersFailed";
import TableSearch from "./TableSearch";
import React, { useState } from "react";
import { Table } from "antd";

const OrdersTable: React.FC = () => {
  const ROWS_PER_PAGE = 2;
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useGetOrders(page, ROWS_PER_PAGE);
  const columns = getOrderTableColumns(TableSearch());

  return (
    <>
      {error && error.message === "NOT AUTHORIZED" ? (
        <GetOrdersFailed type="unauthorized" />
      ) : error ? (
        <GetOrdersFailed type="unknown" />
      ) : (
        <Table
          columns={columns}
          dataSource={data ? addKeyToOrders(data.data.data) : []}
          loading={isPending}
          pagination={{
            position: ["bottomRight"],
            pageSize: ROWS_PER_PAGE,
            current: page,
            total: data ? data.data.meta.lastPage + 1 : 1,
            onChange: page => {
              setPage(page);
            },
          }}
          scroll={{ x: 800 }}
        />
      )}
    </>
  );
};

export default OrdersTable;
