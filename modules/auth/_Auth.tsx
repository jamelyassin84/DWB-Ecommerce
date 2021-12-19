import React, { FC } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Container from '../../components/Layout'
import Login from './Login'
import LoginAndSignUpTab from './LoginAndSignUpTab'
import SignUp from './SignUp'
import Socials from './Socials'

type Props = {}

const _Auth: FC<Props> = (props) => {
	const [shouldLogin, setShouldLogin] = React.useState<boolean>(false)

	return (
		<Container>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
				<ScrollView>
					<LoginAndSignUpTab
						shouldLogin={shouldLogin}
						wantsToLogin={(value: boolean) => {
							setShouldLogin(value)
						}}
					/>
					{!shouldLogin && <SignUp />}
					{shouldLogin && <Login />}
					{!shouldLogin && <Socials />}
				</ScrollView>
			</KeyboardAvoidingView>
		</Container>
	)
}

export default _Auth
