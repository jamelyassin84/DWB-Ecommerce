import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import ErrorText from '../../components/ErrorText'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { BoldText, View } from '../../components/Themed'
import { hasData } from '../../constants/Helpers'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../../models/User'

type Props = {}

const Login: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		hidden: {
			position: 'absolute',
			left: -500,
		},
		buttonText: {
			fontSize: 16,
			textAlign: 'center',
			marginTop: 20,
			color: '#416AD6',
			fontWeight: '600',
		},
	})

	const navigation = useNavigation()

	// Data
	const [email, stEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	// Errors
	const [loginError, setLoginError] = React.useState<boolean>(false)

	//Focus Inputs
	const [passwordFocus, setPasswordFocus] = React.useState<boolean>(false)

	// Functions
	const login = async (): Promise<void> => {
		removeErrors()
		setButtonIsDisabled(true)
		await new APIService(API.Login)
			.store({
				email: email,
				password: password,
				mode: 'Default',
			})
			.then(async (data: LoginType | any) => {
				setButtonIsDisabled(false)
				navigation.navigate('Root')

				await AsyncStorage.setItem('user', JSON.stringify(data.user))
				await AsyncStorage.setItem('token', data.token)
			})
			.catch((api) => {
				if (hasData(api?.response?.data?.errors)) {
					setLoginError(true)
				}
				if (!api?.response) {
					alert('Network Error Try Again')
				}
				setButtonIsDisabled(false)
			})
	}

	const removeErrors = (): void => {
		setLoginError(false)
	}

	const removeFocus = () => {
		setPasswordFocus(false)
		setSubmitButtonFocus(false)
	}

	//Buttons
	const [submitButtonFocus, setSubmitButtonFocus] =
		React.useState<boolean>(false)
	const [buttonIsDisabled, setButtonIsDisabled] =
		React.useState<boolean>(false)

	return (
		<View>
			<Form
				onSubmitEditing={() => {
					removeFocus()
					setPasswordFocus(true)
				}}
				text={(value: string) => {
					stEmail(value)
				}}
				label="Email"
				placeholder="johndoe@mail.com"
				error={loginError}
			/>

			<PasswordForm
				focus={passwordFocus}
				onSubmitEditing={() => {
					removeFocus()
					setSubmitButtonFocus(true)
					login()
				}}
				text={(value: string) => {
					setPassword(value)
				}}
				label="Password"
				error={loginError}
			/>
			<ErrorText
				true={loginError}
				text="Username or password is incorrect"
			/>

			<PrimaryButton
				isDisabled={buttonIsDisabled}
				focus={submitButtonFocus}
				text="Login"
				callback={() => login()}
			/>

			<TouchableOpacity onPress={() => {}}>
				<BoldText style={styles.buttonText}>Forgot Password?</BoldText>
			</TouchableOpacity>
		</View>
	)
}

export default Login

type LoginType = {
	user: User
	token: string
	message: string
}
