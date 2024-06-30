import { TTodo } from "@/redux/features/todo/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        method: "GET",
        url: "/todos",
      }),
      providesTags: ["todo"],
    }),
    addTodos: builder.mutation({
      query: (payload: TTodo) => ({
        method: "POST",
        url: "/todos",
        body: payload,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id: string) => ({
        method: "DELETE",
        url: `/todos/${id}`,
      }),
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (payload: Partial<TTodo>) => ({
        method: "PUT",
        url: `/todos/${payload.id}`,
        body: payload,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
