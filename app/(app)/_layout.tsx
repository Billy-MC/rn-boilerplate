import { selectIsAuthenticated } from '@/features/auth/auth.slice'
import { useAppSelector } from '@/shared/hooks'
import { Redirect, Stack } from 'expo-router'

export default function AppLayout() {
	const isAuthenticated = useAppSelector(selectIsAuthenticated)

	// Guard: redirect to login if token is cleared (e.g. after logout)
	if (!isAuthenticated) {
		return <Redirect href="/(auth)/login" />
	}

	return (
		<Stack
			screenOptions={{
				headerBackTitleVisible: false,
				headerTintColor: '#1A6FE8',
			}}
		/>
	)
}
