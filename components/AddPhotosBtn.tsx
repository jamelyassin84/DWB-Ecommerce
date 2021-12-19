import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText, Text, View } from './Themed'

type Props = {
	callback: Function
}

const AddPhotosBtn: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		wrapper: {
			marginBottom: 20,
			paddingHorizontal: 23,
		},
		button: {
			width: '100%',
			paddingVertical: 15,
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 30,
			alignSelf: 'center',
			flexDirection: 'row',
			borderWidth: 2,
			borderStyle: 'dashed',
			borderColor: '#CAD0DB',
		},
		buttonText: {
			color: Colors[colorScheme].tint,
			fontSize: 18,
			fontWeight: '600',
			marginLeft: 10,
			textAlign: 'center',
		},
	})

	return (
		<View style={styles.wrapper}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.callback()}>
				<View
					style={{
						alignSelf: 'center',
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Feather
						name="plus"
						size={28}
						color={Colors[colorScheme].tint}
					/>
					<BoldText style={styles.buttonText}>Add Photos</BoldText>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default AddPhotosBtn
