import { PostCard } from '@/features/home/components/PostCard'
import { useGetPostsQuery } from '@/features/home/home.api'
import type { Post } from '@/features/home/home.types'
import { Text } from '@/shared/components'
import { fill } from '@/shared/styles/mixins'
import { router } from 'expo-router'
import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import styled from 'styled-components/native'

// ─── Styled ───────────────────────────────────────────────────────────────────

const SafeArea = styled.SafeAreaView`
	${fill}
	background-color: ${({ theme }) => theme.colors.bgTertiary};
`

const CenteredView = styled.View`
	${fill}
	align-items: center;
	justify-content: center;
`

// ─── Component ───────────────────────────────────────────────────────────────

export const HomeScreen = () => {
	const { data: posts, isLoading, isError, refetch } = useGetPostsQuery()

	const handlePostPress = useCallback((userId: string) => {
		router.push({ pathname: '/(app)/profile/[userId]', params: { userId } })
	}, [])

	const renderPost = useCallback(
		({ item }: { item: Post }) => <PostCard post={item} onPress={handlePostPress} />,
		[handlePostPress],
	)

	if (isLoading) {
		return (
			<CenteredView>
				<ActivityIndicator size="large" />
			</CenteredView>
		)
	}

	if (isError) {
		return (
			<CenteredView>
				<Text $variant="body" $align="center">
					Something went wrong.
				</Text>
				<Text $variant="bodySmall" $align="center" onPress={refetch} style={{ marginTop: 8 }}>
					Tap to retry
				</Text>
			</CenteredView>
		)
	}

	return (
		<SafeArea>
			<FlatList
				data={posts}
				keyExtractor={(item) => item.id}
				renderItem={renderPost}
				contentContainerStyle={{ padding: 16, gap: 12 }}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={
					<CenteredView>
						<Text $variant="body" $color={undefined}>
							No posts yet
						</Text>
					</CenteredView>
				}
			/>
		</SafeArea>
	)
}
