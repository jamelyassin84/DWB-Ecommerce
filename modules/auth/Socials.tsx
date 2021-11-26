import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import SocialButtons from '../../components/SocialButtons'
import { Text } from '../../components/Themed'

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

	return (
		<View style={!props.isShowing ? styles.hidden : {}}>
			<View style={{ height: 5 }} />
			<Text style={styles.text}>Or</Text>
			<SocialButtons
				text="Sign up with Google"
				image={require('../../assets/app/images/auth/google-icon.png')}
				callback={() => {}}
			/>
			<View style={{ height: 15 }} />
			<SocialButtons
				text="Sign up with Apple"
				image={require('../../assets/app/images/auth/apple-icon.png')}
				callback={() => {}}
			/>
		</View>
	)
}

export default Socials
