import { useGetProducts } from "@/lib/apiHandlers/Products/GetAllProducts";
import CommonTable from "@/components/Common/Table/CommonTable";
import TableSearch from "@/components/Common/Table/TableSearch";
import { getOrderTableColumns } from "./TableColumns";
import React, { useState } from "react";
import { Product } from "@/types/Products";

const ProductsTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useGetProducts(page);
  const columns = getOrderTableColumns(TableSearch<Product>());

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

export default ProductsTable;
