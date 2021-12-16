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
	error?: boolean
	focus?: boolean
	onSubmitEditing: Function
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

	const ref: any = React.useRef()

	React.useEffect(() => {
		if (props.focus === true) {
			return ref.current.focus()
		}
		ref.current.blur()
	}, [props.focus])

	return (
		<View style={styles.wrapper}>
			<BoldText style={styles.label}>{props.label}</BoldText>
			<TextInput
				ref={ref}
				onSubmitEditing={() => props.onSubmitEditing()}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={(text) => {
					props.text(text)
				}}
				placeholder={props.placeholder}
				focusable={true}
				clearButtonMode="always"
				placeholderTextColor={Colors[colorScheme].tabIconDefault}
				selectionColor={Colors[colorScheme].tint}
				keyboardType={!props.numeric ? 'default' : 'number-pad'}
				returnKeyType="next"
				style={[
					styles.input,
					props.error
						? { borderColor: '#E73553', borderWidth: 2 }
						: {},
					isFocused && {
						borderWidth: 2,
						borderColor: Colors[colorScheme].tint
					}
				]}
			/>
		</View>
	)
}

export default Form
