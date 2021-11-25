import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { View } from '../../components/Themed'

type Props = {
	isShowing: boolean
}

const Login: FC<Props> = (props) => {
	return (
		<View>
			<Form label="Email" />
			<PasswordForm label="Password" />
			<PrimaryButton text="Login" callback={() => {}} />
			<TouchableOpacity onPress={() => {}}>
				<Text>Forgot Password</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Login
