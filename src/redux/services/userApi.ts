import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../baseQuery'
import { TUser } from '@/interfaces/user.type'

export const userApi = createApi({
    reducerPath: 'userApi',
    refetchOnFocus: true,
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<TUser[], null>({
            query: () => ({ url: 'users', method: 'get' }),
        }),
        // getUserById: builder.query<User, { id: string }>({
        //   query: ({ id }) => `users/${id}`,
        // }),
    }),
})

export const { useGetUsersQuery } = userApi
