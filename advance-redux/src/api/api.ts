import { TTodo } from "@/redux/features/todo/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        method: "GET",
        url: "/todos",
      }),
    }),
    addTodos: builder.mutation({
      query: (payload: TTodo) => ({
        method: "POST",
        url: "/todos",
        body: payload,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = baseApi;
