import React, { FC } from 'react'
import {
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { Text } from './Themed'
type Props = {
	text: string
	image: string | any
	callback: Function
}

const SocialButtons: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		button: {
			width: '90%',
			borderRadius: 10,
			flexDirection: 'row',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: '#ddd',
			paddingHorizontal: 20,
			paddingVertical: 12,
			alignSelf: 'center'
		},
		imageContainer: {},
		image: { width: 25, height: 25, resizeMode: 'contain' },
		text: { fontSize: 20, flex: 1, textAlign: 'center', fontWeight: '500' }
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.callback()}>
			<Image style={styles.image} source={props.image} />
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	)
}

export default SocialButtons
