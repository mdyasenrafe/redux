import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://grocery-store-api-y99i.onrender.com/",
  }),
  endpoints: (builder) => ({
    getPrducts: builder.query({
      query: () => "/products",
    }),
  }),
});
export const { useGetPrductsQuery } = productApi;
