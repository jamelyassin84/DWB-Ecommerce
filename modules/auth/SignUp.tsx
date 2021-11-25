import React, { FC } from 'react'
import { Text } from 'react-native'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { View } from '../../components/Themed'

type Props = {
	isShowing: boolean
}

const SignUp: FC<Props> = (props) => {
	return (
		<View>
			<Form label="Full Name" />
			<Form label="Email" />
			<PasswordForm label="Password" />
			<PasswordForm label="Confirm Password" />
			<PrimaryButton text="Sign up" callback={() => {}} />
		</View>
	)
}

export default SignUp
