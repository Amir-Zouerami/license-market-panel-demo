import type { ColumnType, ColumnsType } from "antd/es/table";
import { Order } from "@/types/Orders";
import OrderAction from "./OrderAction";

type searchPropsGeneratorType = (dataIndex: keyof Order) => ColumnType<Order>;

export const getOrderTableColumns = (
  searchPropsGenerator: searchPropsGeneratorType
) => {
  const columns: ColumnsType<Order> = [
    {
      title: "شناسه",
      dataIndex: "id",
      key: "id",
      ...searchPropsGenerator("id"),
    },
    {
      title: "شماره سفارش",
      dataIndex: "orderNumber",
      key: "orderNumber",
      ...searchPropsGenerator("orderNumber"),
    },
    {
      title: "مسئول",
      dataIndex: "assignee",
      key: "assignee",
      ...searchPropsGenerator("assignee"),
    },
    {
      title: "زمان تحویل",
      dataIndex: "dueTime",
      key: "dueTime",
      ...searchPropsGenerator("dueTime"),
      sorter: (a, b) => Date.parse(a.dueTime) - Date.parse(b.dueTime),
      sortDirections: ["descend", "ascend"],
      render: time => <span>{new Date(time).toLocaleDateString("fa")}</span>,
    },
    {
      title: "عملیات",
      key: "operations",
      fixed: "right",
      width: 100,
      render: () => <OrderAction />,
    },
  ];

  return columns;
};
