import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
	text: string
	image: string | any
	callback: Function
}

const SocialButtons: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		button: {
			flexDirection: 'row'
		},
		imageContainer: {},
		image: {
			height: 30,
			width: 30
		},
		text: {}
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.callback()}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={props.image} />
				<Text style={styles.text}>{props.text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default SocialButtons
