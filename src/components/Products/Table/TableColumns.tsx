import type { ColumnType, ColumnsType } from "antd/es/table";
import ProductAction from "./ProductsAction";
import { Product } from "@/types/Products";

type searchPropsGeneratorType = (
  dataIndex: keyof Product
) => ColumnType<Product>;

export const getProductTableColumns = (
  searchPropsGenerator: searchPropsGeneratorType
) => {
  const columns: ColumnsType<Product> = [
    {
      title: "شناسه",
      dataIndex: "id",
      key: "id",
      ...searchPropsGenerator("id"),
    },
    {
      title: "نام محصول",
      dataIndex: "name",
      key: "name",
      ...searchPropsGenerator("name"),
    },
    {
      title: "مسئول",
      dataIndex: "userId",
      key: "userId",
      ...searchPropsGenerator("userId"),
    },
    {
      title: "عملیات",
      key: "operations",
      fixed: "right",
      width: 100,
      render: row => <ProductAction currentRow={row} />,
    },
  ];

  return columns;
};
