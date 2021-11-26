import React, { FC } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'

type Props = {
	text: string
	callback: Function
}

const PrimaryButton: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		button: {
			width: '90%',
			paddingVertical: 15,
			borderRadius: 10,
			backgroundColor: '#416AD6',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 30,
			alignSelf: 'center'
		},
		buttonText: {
			color: '#fff',
			fontSize: 18,
			fontWeight: '600'
		}
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.callback()}>
			<Text style={styles.buttonText}>{props.text}</Text>
		</TouchableOpacity>
	)
}

export default PrimaryButton
