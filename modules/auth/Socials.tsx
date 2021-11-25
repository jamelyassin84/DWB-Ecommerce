import React, { FC } from 'react'
import { Text, View } from 'react-native'
import SocialButtons from '../../components/SocialButtons'

type Props = {
	isShowing: boolean
}

const Socials: FC<Props> = (props) => {
	return (
		<View>
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
