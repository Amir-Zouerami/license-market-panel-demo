import { PaginatedOrders, responseIsError } from "@/types/Orders";
import { useQuery } from "@tanstack/react-query";
import getToken from "@/lib/JWT/getToken";

export const useGetOrders = (page: number, perPage = 2) => {
  const ORDERS_ENDPOINT =
    import.meta.env.VITE_API_URL + `order/page?page=${page}&perPage=${perPage}`;
  const token = getToken();

  const FETCH_OPTIONS = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  } as RequestInit;

  return useQuery({
    queryKey: ["getAllPaginatedOrders", page, perPage],
    retry: false,
    queryFn: () =>
      fetch(ORDERS_ENDPOINT, FETCH_OPTIONS).then(async res => {
        if (res.status === 401) {
          throw new Error("NOT AUTHORIZED");
        }

        const response: PaginatedOrders = await res.json();
        if (responseIsError(response)) {
          throw new Error("something went wrong...");
        } else {
          return response;
        }
      }),
  });
};
