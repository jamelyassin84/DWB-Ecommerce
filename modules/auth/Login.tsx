import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { View } from '../../components/Themed'

type Props = {
	isShowing: boolean
}

const Login: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		hidden: {
			position: 'absolute',
			left: -500
		}
	})

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
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
