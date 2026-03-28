import type { Post } from '@/features/home/home.types'
import { Card, Text } from '@/shared/components'
import { row, rowBetween } from '@/shared/styles/mixins'
import React from 'react'
import styled from 'styled-components/native'

interface PostCardProps {
	post: Post
	onPress: (id: string) => void
}

const Header = styled.View`
	${rowBetween}
	margin-bottom: ${({ theme }) => theme.spacing[2]}px;
`

const DateText = styled(Text)`
	font-size: ${({ theme }) => theme.typography.fontSize.xs}px;
	color: ${({ theme }) => theme.colors.textTertiary};
`

const Touchable = styled.TouchableOpacity`
	${row}
`

export const PostCard = ({ post, onPress }: PostCardProps) => {
	const formattedDate = new Date(post.createdAt).toLocaleDateString()

	return (
		<Touchable activeOpacity={0.8} onPress={() => onPress(post.id)}>
			<Card elevated>
				<Header>
					<Text $variant="label">{post.title}</Text>
					<DateText>{formattedDate}</DateText>
				</Header>
				<Text $variant="bodySmall" $color={undefined} numberOfLines={2}>
					{post.body}
				</Text>
			</Card>
		</Touchable>
	)
}
