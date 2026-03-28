import type { RootState } from '@/store/index'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post } from './home.types'

export const homeApi = createApi({
	reducerPath: 'homeApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token
			if (token) headers.set('Authorization', `Bearer ${token}`)
			return headers
		},
	}),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => '/posts',
			providesTags: ['Post'],
		}),
		getPost: builder.query<Post, string>({
			query: (id) => `/posts/${id}`,
			providesTags: (_result, _error, id) => [{ type: 'Post', id }],
		}),
	}),
})

export const { useGetPostsQuery, useGetPostQuery } = homeApi
