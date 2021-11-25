import React, { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type Props = {
	text: string
	image: string | any
	callback: Function
}

const SocialButtons: FC<Props> = (props) => {
	return (
		<TouchableOpacity onPress={() => props.callback()}>
			<View>
				<Image source={props.image} />
				<Text>{props.text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SocialButtons
