import { api } from "./api";

export const TodoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        return "todos";
      },
      providesTags: ["Todo"],
    }),
    addToDo: builder.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todo"],
    }),
    getSingleTodo: builder.query({
      query: (id) => `todos/${id}`,
      providesTags: (result, error, id) => [{ type: "Todo", id }],
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        method: "PUT",
        url: `todos/${body?.id}`,
        body,
      }),
      invalidatesTags: (result, error, id) => [
        {
          type: "Todo",
          id,
        },
        "Todo",
      ],
      // async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data: updateTodo } = await queryFulfilled;
      //     console.log("data => onQueryStarted", updateTodo);
      //     dispatch(
      //       api.util.updateQueryData("getSingleTodo", id, (draft) => {
      //         Object.assign(draft, updateTodo);
      //       })
      //     );
      //   } catch {}
      // },
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddToDoMutation,
  useGetSingleTodoQuery,
  useUpdateTodoMutation,
} = TodoApi;
