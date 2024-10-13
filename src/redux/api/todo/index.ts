import { api as index } from "..";

const ENDPOINT = process.env.NEXT_PUBLIC_ENPOINT;

export const api = index.injectEndpoints({
  endpoints: (builder) => ({
    postTodo: builder.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
      query: (data) => ({
        url: `${ENDPOINT}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    getTodo: builder.query<TODO.getTodosResponse, TODO.getTodosRequest>({
      query: (data) => ({
        url: `${ENDPOINT}`,
        method: "GET",
        body: data,
      }),
      providesTags: ["todo"],
    }),
    deleteTodo: builder.mutation<
      TODO.deleteTodoResponse,
      TODO.deleteTodoRequest
    >({
      query: (_id) => ({
        url: `${ENDPOINT}/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
    editTodo: builder.mutation<TODO.editTodoResponse, TODO.editTodoRequest>({
      query: ({ data, _id }) => ({
        url: `${ENDPOINT}/${_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  usePostTodoMutation,
  useGetTodoQuery,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
