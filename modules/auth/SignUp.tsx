import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text
} from 'react-native'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import ErrorText from '../../components/ErrorText'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { View } from '../../components/Themed'
import { User } from '../../models/User'

type Props = {
	isShowing: boolean
}

const SignUp: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		hidden: {
			position: 'absolute',
			left: -500
		}
	})

	const navigation = useNavigation()

	const [name, setName] = React.useState<string>('')
	const [email, stEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')
	const [confirmPassword, setConfirmPassword] = React.useState<string>('')

	const [fullNameError, setFullNameError] = React.useState<boolean>(false)
	const [emailError, setEmailError] = React.useState<boolean>(false)
	const [passwordError, setPasswordError] = React.useState<boolean>(false)
	const [doesNotMatchError, setDoesNotMatchError] =
		React.useState<boolean>(false)

	const signUp = (): void => {
		if (password !== confirmPassword) {
			setDoesNotMatchError(true)
			return
		}
		const user: User | any = {
			name: name,
			email: email,
			password: password,
			mode: 'Default'
		}

		for (let key in user) {
			if (user[key] === '') {
				Alert.alert(
					'Invalid Operation',
					'One or more fields should not be empty',
					[
						{
							text: 'Cancel',
							style: 'cancel'
						},
						{ text: 'OK' }
					]
				)
				return removeErrors()
			}
		}
		processCredentials(user)
	}

	const processCredentials = async (user: User) => {
		await new APIService(API.Register)
			.store(user)
			.then(() => {})
			.catch((error) => {
				console.log(error)
			})
	}

	const removeErrors = (): void => {
		setFullNameError(false)
		setEmailError(false)
		setPasswordError(false)
		setDoesNotMatchError(false)
	}

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<Form
				text={(value: string) => {
					setName(value)
				}}
				label="Full Name"
				placeholder="Full Name"
				error={fullNameError}
			/>
			<ErrorText
				true={fullNameError}
				text="Full name must be minimum of 8 characters."
			/>

			<Form
				text={(value: string) => {
					stEmail(value)
				}}
				label="Email"
				placeholder="Email"
				error={emailError}
			/>
			<ErrorText true={emailError} text="Invalid email." />

			<PasswordForm
				text={(value: string) => {
					setPassword(value)
				}}
				label="Password"
				error={passwordError}
			/>
			<ErrorText
				true={passwordError}
				text="Password length must be 10 or higher, contain at least 1
					uppercase and no special character."
			/>

			<PasswordForm
				text={(value: string) => {
					setConfirmPassword(value)
				}}
				label="Confirm Password"
				error={doesNotMatchError}
			/>
			<ErrorText
				true={doesNotMatchError}
				text="Password does not match."
			/>

			<PrimaryButton text="Sign up" callback={() => signUp()} />
		</View>
	)
}

export default SignUp
