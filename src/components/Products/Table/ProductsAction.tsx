import { CaretDownOutlined } from "@ant-design/icons";
import { GenerateActions } from "./GenerateActions";
import { Dropdown, notification } from "antd";
import { Product } from "@/types/Products";

interface ProductActionProps {
  currentRow: Product;
}

const ProductAction = ({ currentRow }: ProductActionProps) => {
  const [api, contextHolder] = notification.useNotification({ rtl: true });
  const items = GenerateActions(currentRow, api);

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <a style={{ cursor: "pointer" }}>
          {contextHolder}
          انتخاب
          <CaretDownOutlined style={{ verticalAlign: "middle" }} />
        </a>
      </Dropdown>
    </>
  );
};

export default ProductAction;
