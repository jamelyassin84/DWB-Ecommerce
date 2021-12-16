import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
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
	const [doesNotMatch, setDoesNotMatch] = React.useState<boolean>(false)

	const signUp = () => {
		if (password !== confirmPassword) {
			setDoesNotMatch(true)
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
				setDoesNotMatch(false)
				return
			}
		}

		// navigation.navigate('Root')
	}

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<Form
				text={(value: string) => {
					setName(value)
				}}
				label="Full Name"
				placeholder="Full Name"
			/>
			<Form
				text={(value: string) => {
					stEmail(value)
				}}
				label="Email"
				placeholder="Email"
			/>
			<PasswordForm
				text={(value: string) => {
					setPassword(value)
				}}
				label="Password"
			/>
			<PasswordForm
				text={(value: string) => {
					setConfirmPassword(value)
				}}
				label="Confirm Password"
			/>

			{doesNotMatch && (
				<Text
					style={{
						paddingHorizontal: 20,
						color: '#E73553',
						marginTop: -10
					}}>
					Password does not match
				</Text>
			)}

			<PrimaryButton text="Sign up" callback={() => signUp()} />
		</View>
	)
}

export default SignUp
