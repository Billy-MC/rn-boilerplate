import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
`

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
`

export const ScrollContent = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.spacing[6]}px;
  padding-vertical: ${({ theme }) => theme.spacing[8]}px;
  justify-content: center;
`

export const Header = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing[10]}px;
`

export const Form = styled.View`
  gap: ${({ theme }) => theme.spacing[4]}px;
`

export const ErrorBox = styled.View`
  padding: ${({ theme }) => theme.spacing[3]}px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.error};
`

export const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.errorText};
`

export const Footer = styled.View`
  margin-top: ${({ theme }) => theme.spacing[6]}px;
  align-items: center;
`

export const FooterText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const FooterLink = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.brand};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`
