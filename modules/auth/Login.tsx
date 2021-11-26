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
		},
		buttonText: {
			fontSize: 16,
			textAlign: 'center',
			marginTop: 20,
			color: '#416AD6',
			fontWeight: '600'
		}
	})

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<Form label="Email" />
			<PasswordForm label="Password" />
			<PrimaryButton text="Login" callback={() => {}} />
			<TouchableOpacity onPress={() => {}}>
				<Text style={styles.buttonText}>Forgot Password?</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Login
