import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";
export const appApi = createApi({
  reducerPath: "api/",
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: axiosBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["federations", "users"],
  endpoints: () => ({}),
});
