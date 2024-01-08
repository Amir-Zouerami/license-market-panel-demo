import { NotificationInstance } from "antd/es/notification/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getToken from "@/lib/JWT/getToken";

const deleteOneProduct = (id: number) => {
  const PRODUCT_ENDPOINT = import.meta.env.VITE_API_URL + "product/";
  const authToken = getToken();

  return fetch(PRODUCT_ENDPOINT + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  }).then(res => {
    if (res.status !== 200) {
      throw new Error("something went wrong");
    }

    return res;
  });
};

const useDeleteProduct = (api: NotificationInstance) => {
  const QC = useQueryClient();
  return useMutation({
    mutationFn: deleteOneProduct,
    onSuccess: () => {
      QC.invalidateQueries({
        queryKey: ["getAllPaginatedProducts"],
        exact: false,
      });

      return api["success"]({
        message: "انجام شد!",
        description: "محصول مورد نظر حذف شده است.",
      });
    },
    onError: () => {
      return api["error"]({
        message: "خطا!",
        description: "متاسفانه درخواست شما با خطا مواجه شده است.",
      });
    },
  });
};

export default useDeleteProduct;
