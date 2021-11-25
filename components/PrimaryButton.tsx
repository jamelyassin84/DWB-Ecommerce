import React, { FC } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

type Props = {
	text: string
	callback: Function
}

const PrimaryButton: FC<Props> = (props) => {
	return (
		<TouchableOpacity onPress={() => props.callback()}>
			<Text>{props.text}</Text>
		</TouchableOpacity>
	)
}

export default PrimaryButton
