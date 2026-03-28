import { Text } from '@/shared/components'
import { useLocalSearchParams } from 'expo-router'
import { View } from 'react-native'

// Replace with: import { ProfileScreen } from '@features/profile/ProfileScreen'
export default function ProfileScreen() {
	const { userId } = useLocalSearchParams<{ userId: string }>()

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text $variant="h3">Profile</Text>
			<Text $variant="bodySmall">{userId}</Text>
		</View>
	)
}
