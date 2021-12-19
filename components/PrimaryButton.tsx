import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText, Text, View } from './Themed'

type Props = {
	text: string
	callback: Function
	focus?: boolean
	isDisabled?: boolean
}

const PrimaryButton: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		wrapper: {
			marginBottom: 20,
			paddingHorizontal: 23,
		},
		button: {
			width: '100%',
			borderRadius: 13,
			backgroundColor: Colors[colorScheme].tint,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 30,
			alignSelf: 'center',
			borderWidth: 1,
			borderColor: 'transparent',
			height: 50,
			paddingHorizontal: 23,
		},
		buttonText: {
			color: '#fff',
			fontSize: 18,
		},
		focus: {
			borderColor: '#D3E1FA',
			borderWidth: 5,
		},
		disabled: {
			backgroundColor: '#B7CDF7',
		},
	})

	return (
		<View style={styles.wrapper}>
			<TouchableOpacity
				disabled={props.isDisabled}
				style={[
					styles.button,
					props.focus ? styles.focus : {},
					props.isDisabled ? styles.disabled : {},
				]}
				onPress={() => props.callback()}>
				<BoldText style={styles.buttonText}>{props.text}</BoldText>
			</TouchableOpacity>
		</View>
	)
}

export default PrimaryButton
