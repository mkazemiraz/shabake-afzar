import { IAxiosRTKQueryRequest, Product, User } from "@constants/GlobalTypes";
import { appApi } from "./app";

type ProductResponse = {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
};

const productApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductResponse, IAxiosRTKQueryRequest>({
      query: ({ options }) => {
        return {
          url: "auth/products",
          method: "GET",
          headers: {
            ...options,
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
