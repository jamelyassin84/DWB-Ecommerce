import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Alert } from 'react-native'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import ErrorText from '../../components/ErrorText'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { hasData } from '../../constants/Helpers'
import { User } from '../../models/User'

type Props = {
	isShowing: boolean
}

const SignUp: FC<Props> = (props) => {
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
		removeErrors()
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
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }]
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
				if (hasData(error.response.data.errors.name)) {
					setFullNameError(true)
				}
				if (hasData(error.response.data.errors.email)) {
					setEmailError(true)
				}
				if (hasData(error.response.data.errors.password)) {
					setPasswordError(true)
				}
			})
	}

	const removeErrors = (): void => {
		setFullNameError(false)
		setEmailError(false)
		setPasswordError(false)
		setDoesNotMatchError(false)
	}

	return (
		<>
			{props.isShowing && (
				<>
					<Form
						text={(value: string) => {
							setName(value)
						}}
						label="Surname"
						placeholder="Surname"
						error={fullNameError}
					/>
					<ErrorText
						true={fullNameError}
						text="The surname must be at least 8 characters."
					/>

					<Form
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
				</>
			)}
		</>
	)
}

export default SignUp
