import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
export const user = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: (data) => ({
                url: `api/user`,
                method: 'POST',
                body: data,
            }),
        })
    })
})
export const {useAuthMutation} = user;