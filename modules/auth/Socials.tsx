import React, { FC } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import SocialButtons from '../../components/SocialButtons'
import { Text } from '../../components/Themed'
import * as GoogleSignIn from 'expo-google-sign-in'
import * as AppleAuthentication from 'expo-apple-authentication'
import { GoogleClientID, GoogleConfig } from '../../constants/AppConstants'
import * as Google from 'expo-google-app-auth'

type Props = {
	isShowing: boolean
}

const Socials: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		hidden: {
			position: 'absolute',
			left: -500
		},
		text: {
			fontSize: 18,
			textAlign: 'center',
			marginVertical: 18
		}
	})

	async function signInWithGoogle() {
		return await Google.logInAsync(GoogleConfig)
	}

	async function signInWithApple() {
		return await AppleAuthentication.signInAsync({
			requestedScopes: [
				AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
				AppleAuthentication.AppleAuthenticationScope.EMAIL
			]
		})
	}

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<View style={{ height: 5 }} />
			<Text style={styles.text}>Or</Text>
			<SocialButtons
				text="Sign up with Google"
				image={require('../../assets/app/images/auth/google-icon.png')}
				callback={async () => {
					signInWithGoogle()
				}}
			/>
			<View style={{ height: 15 }} />

			{Platform.OS === 'ios' && (
				<SocialButtons
					text="Sign up with Apple"
					image={require('../../assets/app/images/auth/apple-icon.png')}
					callback={async () => {
						signInWithApple()
					}}
				/>
			)}
		</View>
	)
}

export default Socials
