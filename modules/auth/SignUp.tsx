import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Alert } from 'react-native'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import ErrorText from '../../components/ErrorText'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { View } from '../../components/Themed'
import { hasData } from '../../constants/Helpers'
import { User } from '../../models/User'

type Props = {}

const SignUp: FC<Props> = (props) => {
	// Hooks
	const navigation = useNavigation()

	// Data
	const [name, setName] = React.useState<string>('')
	const [email, stEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')
	const [confirmPassword, setConfirmPassword] = React.useState<string>('')

	// Errors
	const [nameError, setNameError] = React.useState<boolean>(false)
	const [emailError, setEmailError] = React.useState<boolean>(false)
	const [passwordError, setPasswordError] = React.useState<boolean>(false)
	const [doesNotMatchError, setDoesNotMatchError] =
		React.useState<boolean>(false)

	// Functions
	const signUp = (): void => {
		removeErrors()
		setButtonIsDisabled(true)
		if (password !== confirmPassword) {
			setButtonIsDisabled(false)
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
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }]
				)
				setButtonIsDisabled(false)
				return removeErrors()
			}
		}
		processCredentials(user)
	}

	const processCredentials = async (user: User) => {
		await new APIService(API.Register)
			.store(user)
			.then(() => {
				setButtonIsDisabled(false)
			})
			.catch((api) => {
				alert(api.response.data.errors.name)
				setButtonIsDisabled(false)
				if (hasData(api.response.data.errors.name)) {
					setNameError(true)
				}
				if (hasData(api.response.data.errors.email)) {
					setEmailError(true)
				}
				if (hasData(api.response.data.errors.password)) {
					setPasswordError(true)
				}
			})
	}

	const removeErrors = (): void => {
		setNameError(false)
		setEmailError(false)
		setPasswordError(false)
		setDoesNotMatchError(false)
	}

	const removeFocus = () => {
		setEmailFocus(false)
		setPasswordFocus(false)
		setConfirmPasswordFocus(false)
		setSubmitButtonFocus(false)
	}

	//Focus Inputs
	const [emailFocus, setEmailFocus] = React.useState<boolean>(false)
	const [passwordFocus, setPasswordFocus] = React.useState<boolean>(false)
	const [confirmPasswordFocus, setConfirmPasswordFocus] =
		React.useState<boolean>(false)

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
					setEmailFocus(true)
				}}
				text={(value: string) => {
					setName(value)
				}}
				label="Store Name"
				placeholder="John Doe Shoe Shop"
				error={nameError}
			/>
			<ErrorText
				true={nameError}
				text="The surname must be at least 8 characters."
			/>

			<Form
				focus={emailFocus}
				onSubmitEditing={() => {
					removeFocus()
					setPasswordFocus(true)
				}}
				text={(value: string) => {
					stEmail(value)
				}}
				label="Email"
				placeholder="Email"
				error={emailError}
			/>
			<ErrorText
				true={emailError}
				text="The email must be a valid email address."
			/>

			<PasswordForm
				focus={passwordFocus}
				onSubmitEditing={() => {
					removeFocus()
					setConfirmPasswordFocus(true)
				}}
				text={(value: string) => {
					setPassword(value)
				}}
				label="Password"
				error={passwordError}
			/>
			<ErrorText
				true={passwordError}
				text="Password must have minimum of 8 characters, contain at least 1
					uppercase, lowercase and special character."
			/>

			<PasswordForm
				focus={confirmPasswordFocus}
				onSubmitEditing={() => {
					removeFocus()
					setSubmitButtonFocus(true)
				}}
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

			<PrimaryButton
				isDisabled={buttonIsDisabled}
				focus={submitButtonFocus}
				text="Sign up"
				callback={() => signUp()}
			/>
		</View>
	)
}

export default SignUp
