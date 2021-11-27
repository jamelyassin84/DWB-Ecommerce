import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText, Text } from './Themed'

type Props = {
	text: string
	callback: Function
}

const PrimaryButton: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		button: {
			width: '90%',
			paddingVertical: 15,
			borderRadius: 10,
			backgroundColor: Colors[colorScheme].tint,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 30,
			alignSelf: 'center'
		},
		buttonText: {
			color: '#fff',
			fontSize: 18
		}
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.callback()}>
			<BoldText style={styles.buttonText}>{props.text}</BoldText>
		</TouchableOpacity>
	)
}

export default PrimaryButton
