import { selectIsAuthenticated } from '@/features/auth/auth.slice'
import { useAppSelector } from '@/shared/hooks'
import { Redirect } from 'expo-router'

// Redirect to the appropriate group based on auth state
export default function Index() {
	const isAuthenticated = useAppSelector(selectIsAuthenticated)

	return isAuthenticated ? <Redirect href="/(app)" /> : <Redirect href="/(auth)/login" />
}
