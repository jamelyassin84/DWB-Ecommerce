import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Alert } from 'react-native'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import ErrorText from '../../components/forms/ErrorText'
import Form from '../../components/forms/Form'
import PasswordForm from '../../components/forms/PasswordForm'
import PrimaryButton from '../../components/app/PrimaryButton'
import { View } from '../../components/overrides/Themed'
import { hasData } from '../../constants/Helpers'
import { User } from '../../models/User'
import { LoginType } from './Login'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {
	onFinished: Function
}

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
			mode: 'Default',
			type: 'Seller',
		}

		for (let key in user) {
			if (user[key] === '') {
				Alert.alert(
					'Invalid Operation',
					'One or more fields should not be empty',
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
				)
				setButtonIsDisabled(false)
				return removeErrors()
			}
		}
		processCredentials(user)
	}

	const processCredentials = async (user: User): Promise<void> => {
		await new APIService(API.Register)
			.store(user)
			.then(async (data: LoginType | any) => {
				setButtonIsDisabled(false)
				await storeDataToStorage(data)
				navigation.navigate('VerifyPhoneNumber', {
					seller: data.seller,
					user: data.user,
					token: data.token.plainTextToken,
				})
			})
			.catch((api) => {
				console.log(api)
				if (hasData(api?.response?.data?.errors?.name)) {
					setNameError(true)
				}
				if (hasData(api?.response?.data.errors?.email)) {
					setEmailError(true)
				}
				if (hasData(api?.response?.data?.errors?.password)) {
					setPasswordError(true)
				}
				if (!api?.response) {
					alert('Network Error Try Again')
				}
				setButtonIsDisabled(false)
			})
	}

	const storeDataToStorage = async (data: LoginType): Promise<void> => {
		await AsyncStorage.setItem('user', JSON.stringify(data.user))
		await AsyncStorage.setItem('token', data.token.plainTextToken)
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

			<View style={{ height: 40 }} />
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
