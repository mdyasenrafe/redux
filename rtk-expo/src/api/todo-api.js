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
  }),
});

export const {
  useGetAllTodosQuery,
  useAddToDoMutation,
  useGetSingleTodoQuery,
} = TodoApi;

// import {
//   PostV1AuthLoginRequestBody,
//   PostV1AuthLoginSuccessfulResponse,
//   PostV1AuthPasswordForgetRequestBody,
//   PostV1AuthPasswordForgetSuccessfulResponse,
//   PostV1AuthPasswordResetRequestBody,
//   PostV1AuthPasswordResetSuccessfulResponse,
//   PostV1AuthRegisterRequestBody,
//   PostV1AuthRegisterSuccessfulResponse,
//   PostV1AuthVerifyOtpRequestBody,
//   PostV1AuthVerifyOtpSuccessfulResponse,
//   PutV1AuthPasswordChangeRequestBody,
//   PutV1AuthPasswordChangeSuccessfulResponse,
// } from '@store/schema';
// import {apiSlice} from '../index';
// import {login} from '@store/features/authSlice';

// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: builder => ({
//     login: builder.mutation<
//       PostV1AuthLoginSuccessfulResponse,
//       PostV1AuthLoginRequestBody
//     >({
//       query: body => ({
//         url: 'auth/login',
//         method: 'POST',
//         body,
//       }),
//       async onQueryStarted(args, {dispatch, queryFulfilled}) {
//         try {
//           const {data: result} = await queryFulfilled;

//           if (result.data.data) {
//             dispatch(
//               login({
//                 user: result.data.data?.user,
//                 accessToken: result.data.data?.accessToken,
//                 refreshToken: result.data.data?.refreshToken,
//                 method: result.data.data?.method,
//               }),
//             );
//           }

//           return result;
//         } catch (error: any) {
//           return error;
//         }
//       },
//       // invalidatesTags: ['blogs', 'contacts', 'messages', 'singleBlog'],
//     }),
//     register: builder.mutation<
//       PostV1AuthRegisterSuccessfulResponse,
//       PostV1AuthRegisterRequestBody
//     >({
//       query: body => ({
//         url: 'auth/register',
//         method: 'POST',
//         body,
//       }),
//     }),
//     passwordChange: builder.mutation<
//       PutV1AuthPasswordChangeSuccessfulResponse,
//       PutV1AuthPasswordChangeRequestBody
//     >({
//       query: body => ({
//         url: 'auth/password/change',
//         method: 'PUT',
//         body,
//       }),
//     }),
//     forgetPassword: builder.mutation<
//       PostV1AuthPasswordForgetSuccessfulResponse,
//       PostV1AuthPasswordForgetRequestBody
//     >({
//       query: body => ({
//         url: 'auth/password/forget',
//         method: 'POST',
//         body,
//       }),
//     }),
//     deleteAccount: builder.mutation({
//       query: body => ({
//         url: 'delete-account',
//         method: 'POST',
//         body,
//       }),
//     }),
//     passwordReset: builder.mutation<
//       PostV1AuthPasswordResetSuccessfulResponse,
//       PostV1AuthPasswordResetRequestBody
//     >({
//       query: body => ({
//         url: 'auth/password/reset',
//         method: 'POST',
//         body,
//       }),
//     }),
//     verifyOtp: builder.mutation<
//       PostV1AuthVerifyOtpSuccessfulResponse,
//       PostV1AuthVerifyOtpRequestBody
//     >({
//       query: body => ({
//         url: 'auth/verify-otp',
//         method: 'POST',
//         body,
//       }),
//     }),
//   }),
//   overrideExisting: true,
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useForgetPasswordMutation,
//   usePasswordChangeMutation,
//   usePasswordResetMutation,
//   useVerifyOtpMutation,
//   useDeleteAccountMutation
// } = authApiSlice;
