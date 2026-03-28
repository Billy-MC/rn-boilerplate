import type { RootState } from '@/store/index'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { LoginCredentials, LoginResponse } from './auth.types'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginCredentials>({
			query: (credentials) => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),

		logout: builder.mutation<void, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
		}),

		me: builder.query<LoginResponse['user'], void>({
			query: () => '/auth/me',
		}),
	}),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery } = authApi
