import React, { FC } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Container from '../../components/app/Layout'
import Login from './Login'
import LoginAndSignUpTab from './LoginAndSignUpTab'
import SignUp from './SignUp'
import Socials from './Socials'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const _Auth: FC<Props> = (props) => {
	const [shouldLogin, setShouldLogin] = React.useState<boolean>(false)

	React.useEffect(() => {
		checkIfUserIsNew()
	}, [])

	const checkIfUserIsNew = async () => {
		const newUser = await AsyncStorage.getItem('has-under-gone-stepper')
		if (newUser === undefined || newUser === null)
			return setShouldLogin(true)
	}

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
					{!shouldLogin && (
						<SignUp onFinished={() => setShouldLogin(true)} />
					)}
					{shouldLogin && <Login />}
					{!shouldLogin && <Socials />}
				</ScrollView>
			</KeyboardAvoidingView>
		</Container>
	)
}

export default _Auth
