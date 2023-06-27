import { IAxiosRTKQueryRequest, User } from "@constants/GlobalTypes";
import { appApi } from "./app";

const productApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query<void, IAxiosRTKQueryRequest>({
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
