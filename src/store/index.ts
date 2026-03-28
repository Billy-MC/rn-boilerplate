import { authApi } from '@/features/auth/auth.api'
import { authReducer } from '@/features/auth/auth.slice'
import { homeApi } from '@/features/home/home.api'
import { homeReducer } from '@/features/home/home.slice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		home: homeReducer,
		[authApi.reducerPath]: authApi.reducer,
		[homeApi.reducerPath]: homeApi.reducer,
		// Add more feature reducers here
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, homeApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
