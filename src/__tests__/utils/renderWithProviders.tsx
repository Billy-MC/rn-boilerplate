import { authApi } from '@/features/auth/auth.api'
import { authReducer } from '@/features/auth/auth.slice'
import { homeApi } from '@/features/home/home.api'
import { homeReducer } from '@/features/home/home.slice'
import { ThemeProvider } from '@/shared/styles'
import { configureStore } from '@reduxjs/toolkit'
import type { RenderOptions } from '@testing-library/react-native'
import { render } from '@testing-library/react-native'
import React from 'react'
import { Provider } from 'react-redux'

// ─── Store factory ────────────────────────────────────────────────────────────

export const makeTestStore = (preloadedState?: Record<string, unknown>) =>
	configureStore({
		reducer: {
			auth: authReducer,
			home: homeReducer,
			[authApi.reducerPath]: authApi.reducer,
			[homeApi.reducerPath]: homeApi.reducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, homeApi.middleware),
		preloadedState,
	})

// ─── Wrapper ─────────────────────────────────────────────────────────────────

interface RenderWithProvidersOptions extends Omit<RenderOptions, 'wrapper'> {
	preloadedState?: Record<string, unknown>
}

export const renderWithProviders = (
	ui: React.ReactElement,
	{ preloadedState, ...renderOptions }: RenderWithProvidersOptions = {},
) => {
	const store = makeTestStore(preloadedState)

	const Wrapper = ({ children }: { children: React.ReactNode }) => (
		<Provider store={store}>
			<ThemeProvider>{children}</ThemeProvider>
		</Provider>
	)

	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	}
}
