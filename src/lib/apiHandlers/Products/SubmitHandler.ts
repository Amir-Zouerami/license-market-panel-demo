import getToken from "@/lib/JWT/getToken";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationInstance } from "antd/es/notification/interface";

const submitNewProduct = (data: any) => {
  const PRODUCT_ENDPOINT = import.meta.env.VITE_API_URL + "product";
  const authToken = getToken();

  const body = {
    name: data.productName,
    // for now only super admin can create products whose id is 1
    userId: 1,
    durationTime: 0,
  };

  return fetch(PRODUCT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(body),
  }).then(res => {
    if (res.status !== 201) {
      throw new Error("something went wrong");
    }

    return res;
  });
};

const useCreateProduct = (api: NotificationInstance) => {
  const QC = useQueryClient();

  return useMutation({
    mutationFn: submitNewProduct,
    onSuccess: () => {
      QC.invalidateQueries({
        queryKey: ["getAllPaginatedProducts"],
        exact: false,
      });

      return api["success"]({
        message: "انجام شد!",
        description: "محصول جدید ثبت شده است.",
      });
    },
    onError: () => {
      return api["error"]({
        message: "خطا!",
        description:
          "خطایی رخ داده است. لطفا از یکتا بودن نام محصول اطمینان حاصل کنید.",
      });
    },
  });
};

export default useCreateProduct;
