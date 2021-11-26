import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SocialButtons from '../../components/SocialButtons'

type Props = {
	isShowing: boolean
}

const Socials: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		hidden: {
			position: 'absolute',
			left: -500
		}
	})

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<Text>Or</Text>
			<SocialButtons
				text="Sign-up with Google"
				image={require('../../assets/app/images/auth/google-icon.png')}
				callback={() => {}}
			/>
			<SocialButtons
				text="Sign-up with Apple"
				image={require('../../assets/app/images/auth/apple-icon.png')}
				callback={() => {}}
			/>
		</View>
	)
}

export default Socials
