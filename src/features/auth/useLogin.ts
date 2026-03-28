import { useAppDispatch } from '@/shared/hooks'
import { router } from 'expo-router'
import { useCallback, useState } from 'react'
import { useLoginMutation } from './auth.api'
import { setCredentials } from './auth.slice'
import type { LoginCredentials } from './auth.types'

interface UseLoginReturn {
	email: string
	password: string
	isLoading: boolean
	error: string | null
	setEmail: (email: string) => void
	setPassword: (password: string) => void
	handleLogin: () => Promise<void>
}

export const useLogin = (): UseLoginReturn => {
	const dispatch = useAppDispatch()
	const [loginMutation, { isLoading }] = useLoginMutation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)

	const handleLogin = useCallback(async () => {
		const credentials: LoginCredentials = { email: email.trim(), password }

		try {
			setError(null)
			const result = await loginMutation(credentials).unwrap()
			dispatch(setCredentials({ user: result.user, token: result.token }))
			// Expo Router handles redirect — (app)/_layout.tsx guards the route
			router.replace('/(app)')
		} catch (err) {
			const message =
				err instanceof Error
					? err.message
					: typeof err === 'object' && err !== null && 'data' in err
						? String((err as { data: unknown }).data)
						: 'Something went wrong. Please try again.'
			setError(message)
		}
	}, [dispatch, email, loginMutation, password])

	return {
		email,
		password,
		isLoading,
		error,
		setEmail,
		setPassword,
		handleLogin,
	}
}
