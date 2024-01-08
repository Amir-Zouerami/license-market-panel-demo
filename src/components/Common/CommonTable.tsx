import { Table } from "antd";
import GetDataFailed from "./GetDataFailed";
import { addKeyToObjects } from "@/lib/utility/addKeyToObjects";
import { ColumnsType } from "antd/es/table";
import { Dispatch } from "react";

interface CommonTableProps<T extends Record<string, unknown>> {
  page: number;
  totalPages: number | undefined;
  setPage: Dispatch<React.SetStateAction<number>>;
  data?: T[];
  columns: ColumnsType<T>;
  isPending: boolean;
  error: Error | null;
}

const CommonTable = <T extends Record<string, unknown>>({
  page,
  totalPages,
  setPage,
  data,
  columns,
  isPending,
  error,
}: CommonTableProps<T>) => {
  const ROWS_PER_PAGE = 2;

  return (
    <>
      {error && error.message === "NOT AUTHORIZED" ? (
        <GetDataFailed type="unauthorized" />
      ) : error ? (
        <GetDataFailed type="unknown" />
      ) : (
        <Table
          columns={columns}
          dataSource={data ? addKeyToObjects(data) : []}
          loading={isPending}
          pagination={{
            position: ["bottomRight"],
            pageSize: ROWS_PER_PAGE,
            current: page,
            total: totalPages ? totalPages + 1 : 1,
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

export default CommonTable;
