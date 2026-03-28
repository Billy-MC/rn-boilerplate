export interface Post {
	id: string
	title: string
	body: string
	authorId: string
	createdAt: string
}

export interface HomeState {
	selectedPostId: string | null
}
