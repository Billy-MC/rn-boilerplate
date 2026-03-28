import { useLogin } from '@/features/auth/useLogin'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { makeTestStore } from '../utils/renderWithProviders'

const wrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => (
	<Provider store={makeTestStore()}>{children}</Provider>
)

describe('useLogin', () => {
	it('initialises with empty fields and no error', () => {
		const { result } = renderHook(() => useLogin(), { wrapper })
		expect(result.current.email).toBe('')
		expect(result.current.password).toBe('')
		expect(result.current.error).toBeNull()
		expect(result.current.isLoading).toBe(false)
	})

	it('updates email on setEmail', () => {
		const { result } = renderHook(() => useLogin(), { wrapper })
		act(() => {
			result.current.setEmail('hello@example.com')
		})
		expect(result.current.email).toBe('hello@example.com')
	})

	it('updates password on setPassword', () => {
		const { result } = renderHook(() => useLogin(), { wrapper })
		act(() => {
			result.current.setPassword('hunter2')
		})
		expect(result.current.password).toBe('hunter2')
	})

	it('sets error on failed login', async () => {
		// The API call will fail in test env — we expect an error string
		const { result } = renderHook(() => useLogin(), { wrapper })

		act(() => {
			result.current.setEmail('bad@example.com')
			result.current.setPassword('wrong')
		})

		await act(async () => {
			await result.current.handleLogin()
		})

		await waitFor(() => {
			expect(result.current.error).not.toBeNull()
		})
	})
})
