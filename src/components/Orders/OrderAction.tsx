// import { Order } from "@/types/Orders";
// import { ColumnGroupType, ColumnType } from "antd/es/table";
import { Dropdown, MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

// type ActionObject = ColumnType<Order> | ColumnGroupType<Order>;

// const actionColumn: ActionObject = {
//   title: "عملیات",
//   dataIndex: "",
//   key: "operations",
//   render: a => <a onClick={() => console.log(a)}>TEST</a>,
// };

// interface OrderActionProps {
//   roleName: string;
// }

const OrderAction = () => {
  const actions: MenuProps["items"] = [
    { key: 1, label: "ویرایش" },
    { key: 2, type: "divider" },
    { key: 3, danger: true, label: "حذف" },
  ];

  return (
    <Dropdown menu={{ items: actions }} placement="bottomLeft">
      <a style={{ cursor: "pointer" }}>
        انتخاب
        <CaretDownOutlined style={{ verticalAlign: "middle" }} />
      </a>
    </Dropdown>
  );
};

export default OrderAction;
