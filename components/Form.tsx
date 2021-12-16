import React, { FC } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText, Text } from './Themed'

type Props = {
	label: string
	placeholder?: string
	numeric?: boolean
	text: Function
}

const Form: FC<Props> = (props) => {
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
			height: 50,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center',
			fontFamily: 'Montserrat',
			color: Colors[colorScheme].text
		}
	})

	const [isFocused, setIsFocused] = React.useState(false)

	return (
		<View style={styles.wrapper}>
			<BoldText style={styles.label}>{props.label}</BoldText>
			<TextInput
				{...props}
				style={[
					styles.input,
					isFocused && {
						borderWidth: 2,
						borderColor: Colors[colorScheme].tint
					}
				]}
				placeholder={props.placeholder}
				focusable={true}
				clearButtonMode="always"
				placeholderTextColor={Colors[colorScheme].tabIconDefault}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				selectionColor={Colors[colorScheme].tint}
				keyboardType={!props.numeric ? 'default' : 'number-pad'}
				onChangeText={(text) => {
					props.text(text)
				}}
			/>
		</View>
	)
}

export default Form
