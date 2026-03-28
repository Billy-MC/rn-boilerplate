import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV({
	id: 'app-storage',
	encryptionKey: process.env.MMKV_ENCRYPTION_KEY,
})

export const Storage = {
	getString: (key: string) => storage.getString(key),
	setString: (key: string, value: string) => storage.set(key, value),
	getBoolean: (key: string) => storage.getBoolean(key),
	setBoolean: (key: string, value: boolean) => storage.set(key, value),
	delete: (key: string) => storage.delete(key),
	clearAll: () => storage.clearAll(),
} as const
