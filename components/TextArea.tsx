import React, { FC } from 'react'
import { Text, TextInput, View } from 'react-native'

type Props = {
	label: string
	placeholder?: string
}

const TextArea: FC<Props> = (props) => {
	return (
		<View>
			<Text>{props.label}</Text>
			<View>
				<TextInput />
			</View>
		</View>
	)
}

export default TextArea
