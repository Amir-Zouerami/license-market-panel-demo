import getToken from "@/lib/JWT/getToken";

export const submitNewProduct = (data: any) => {
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
