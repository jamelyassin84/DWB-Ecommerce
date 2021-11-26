import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import Form from '../../components/Form'
import PasswordForm from '../../components/PasswordForm'
import PrimaryButton from '../../components/PrimaryButton'
import { View } from '../../components/Themed'

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

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<Form label="Full Name" placeholder="Full Name" />
			<Form label="Email" placeholder="Email" />
			<PasswordForm label="Password" />
			<PasswordForm label="Confirm Password" />
			<PrimaryButton
				text="Sign up"
				callback={() => {
					navigation.navigate('Root')
				}}
			/>
		</View>
	)
}

export default SignUp
