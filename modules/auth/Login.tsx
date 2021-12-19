import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { BoldText, View } from '../../components/Themed'

type Props = {}

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

	const navigation = useNavigation()

	return (
		<View>
			{/* <Form label="Email" />
			<PasswordForm label="Password" /> */}
			<PrimaryButton
				text="Login"
				callback={() => {
					navigation.navigate('Root')
				}}
			/>
			<TouchableOpacity onPress={() => {}}>
				<BoldText style={styles.buttonText}>Forgot Password?</BoldText>
			</TouchableOpacity>
		</View>
	)
}

export default Login
