import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
export const user = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: (data) => ({
                url: `api/user`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['user'],
        }),
        DeleteInfo: builder.mutation({
            query: (Id) => ({
                url: 'api/user/delete',
                method: 'DELETE',
                body: Id
            }),
            invalidatesTags: ['user'],
        }),
        getInfo: builder.query({
            query: () => `api/user/userget`,
            providesTags: ['user'],
        }),

    })
})
export const { useAuthMutation, useGetInfoQuery, useDeleteInfoMutation } = user;