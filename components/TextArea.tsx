import React, { FC } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {
	label: string
	placeholder?: string
}

const TextArea: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const styles = StyleSheet.create({
		wrapper: {
			paddingVertical: 5
		},
		label: {
			fontSize: 14,
			color: '#757575',
			paddingHorizontal: 20
		},
		input: {
			width: '90%',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: 'rgba(150,150,150,.4)',
			paddingHorizontal: 20,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center',
			fontFamily: 'Montserrat',
			color: Colors[colorScheme].text,
			minHeight: 150
		}
	})

	const [isFocused, setIsFocused] = React.useState(false)

	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput
				{...props}
				style={[
					styles.input,
					isFocused && {
						borderWidth: 2,
						borderColor: Colors[colorScheme].tint
					}
				]}
				multiline={true}
				focusable={true}
				clearButtonMode="always"
				placeholderTextColor={Colors[colorScheme].tabIconDefault}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				selectionColor={Colors[colorScheme].tint}
			/>
		</View>
	)
}

export default TextArea
