import { IAxiosRTKQueryRequest, Product } from "@constants/GlobalTypes";
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
    getPagingProduct: builder.mutation<ProductResponse, IAxiosRTKQueryRequest>({
      query: ({ queryParams, options }) => {
        return {
          url: "auth/products",
          method: "GET",
          headers: {
            ...options,
            "Content-Type": "application/json",
          },
          params: { ...queryParams },
        };
      },
    }),
  }),
});

export const { useGetAllProductQuery, useGetPagingProductMutation } =
  productApi;
