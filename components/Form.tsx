import React, { FC } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

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
		inputContainer: {
			width: '90%',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: '#ddd',
			paddingHorizontal: 10,
			paddingVertical: 15,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center'
		},
		input: {
			width: '100%'
		}
	})

	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}>{props.label}</Text>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} />
			</View>
		</View>
	)
}

export default Form
