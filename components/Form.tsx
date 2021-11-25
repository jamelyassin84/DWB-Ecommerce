import React, { FC } from 'react'
import { Text, TextInput, View } from 'react-native'

type Props = {
	label: string
	placeholder?: string
}

const Form: FC<Props> = (props) => {
	return (
		<View>
			<Text>{props.label}</Text>
			<View>
				<TextInput />
			</View>
		</View>
	)
}

export default Form
