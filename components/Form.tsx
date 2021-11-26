import React, { FC } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Text } from './Themed'

type Props = {
	label: string
	placeholder?: string
}

const Form: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		wrapper: {
			paddingVertical: 5
		},
		label: {
			fontSize: 14,
			fontWeight: '600',
			color: '#757575',
			paddingHorizontal: 20
		},
		input: {
			width: '90%',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: '#ddd',
			paddingHorizontal: 10,
			paddingVertical: 15,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center'
		}
	})

	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput style={styles.input} />
		</View>
	)
}

export default Form
