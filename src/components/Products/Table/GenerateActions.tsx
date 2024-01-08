import useDeleteProduct from "@/lib/apiHandlers/Products/useDeleteProduct";
import { NotificationInstance } from "antd/es/notification/interface";
import ConfirmOperation from "@/components/Common/ConfirmOperation";
import { getRoleName } from "@/lib/localStorage/localStorage";
import { Product } from "@/types/Products";
import { MenuProps } from "antd";

export const GenerateActions = (
  product: Product,
  api: NotificationInstance
) => {
  const { mutate } = useDeleteProduct(api);
  const role = getRoleName();

  const actions: MenuProps["items"] = [
    { key: 1, label: <a>ویرایش</a> },
    { key: 2, type: "divider" },
    {
      key: 3,
      danger: true,
      label: (
        <ConfirmOperation
          key={3}
          title="حذف محصول"
          description="آیا از این عملیات مطمئن هستید؟"
          onConfirm={() => {
            mutate(product.id);
          }}
        >
          <a>حذف</a>
        </ConfirmOperation>
      ),
    },
  ];

  if (role === "user" || role === "admin") {
    return actions.map(action => ({
      ...action,
      disabled: true,
    })) as MenuProps["items"];
  }

  return actions;
};
