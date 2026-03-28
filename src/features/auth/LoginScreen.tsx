import { Button, Input, Text } from '@/shared/components'
import { router } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import {
	Container,
	ErrorBox,
	ErrorText,
	Footer,
	FooterLink,
	FooterText,
	Form,
	Header,
	KeyboardAvoiding,
	SafeArea,
	ScrollContent,
} from './LoginScreen.styles'
import { useLogin } from './useLogin'

export const LoginScreen = () => {
	const { email, password, isLoading, error, setEmail, setPassword, handleLogin } = useLogin()

	return (
		<SafeArea>
			<KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<ScrollContent>
					<Container>
						<Header>
							<Text $variant="h2">Welcome back</Text>
							<Text $variant="body" $color={undefined} style={{ marginTop: 8, opacity: 0.6 }}>
								Sign in to continue
							</Text>
						</Header>

						<Form>
							{error ? (
								<ErrorBox>
									<ErrorText>{error}</ErrorText>
								</ErrorBox>
							) : null}

							<Input
								label="Email"
								value={email}
								onChangeText={setEmail}
								placeholder="you@example.com"
								keyboardType="email-address"
								autoCapitalize="none"
								autoCorrect={false}
								autoComplete="email"
								textContentType="emailAddress"
								error={error ?? undefined}
							/>

							<Input
								label="Password"
								value={password}
								onChangeText={setPassword}
								placeholder="••••••••"
								secureTextEntry
								autoComplete="current-password"
								textContentType="password"
							/>

							<Button label="Sign in" onPress={handleLogin} loading={isLoading} fullWidth style={{ marginTop: 8 }} />
						</Form>

						<Footer>
							<FooterText>
								Don&apos;t have an account?{' '}
								<FooterLink onPress={() => router.push('/(auth)/register')}>Sign up</FooterLink>
							</FooterText>
						</Footer>
					</Container>
				</ScrollContent>
			</KeyboardAvoiding>
		</SafeArea>
	)
}
