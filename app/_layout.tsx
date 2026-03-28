import { ThemeProvider } from '@/shared/styles'
import { store } from '@/store/index'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

// Keep splash visible while we load resources
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	useEffect(() => {
		SplashScreen.hideAsync()
	}, [])

	return (
		<Provider store={store}>
			<ThemeProvider>
				<Stack screenOptions={{ headerShown: false }} />
			</ThemeProvider>
		</Provider>
	)
}
