import { Dropdown, MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const ProductAction = () => {
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

export default ProductAction;
