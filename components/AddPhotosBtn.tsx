import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { Text, View } from './Themed'

type Props = {
	callback: Function
}

const AddPhotosBtn: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		button: {
			width: '90%',
			paddingVertical: 15,
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 30,
			alignSelf: 'center',
			flexDirection: 'row',
			borderWidth: 2,
			borderStyle: 'dashed',
			borderColor: 'rgba(150,150,150,.4)'
		},
		buttonText: {
			color: Colors[colorScheme].tint,
			fontSize: 18,
			fontWeight: '600',
			marginLeft: 10,
			textAlign: 'center'
		}
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.callback()}>
			<View
				style={{
					alignSelf: 'center',
					flexDirection: 'row',
					alignItems: 'center'
				}}>
				<Feather
					name="plus"
					size={28}
					color={Colors[colorScheme].tint}
				/>
				<Text style={styles.buttonText}>Add Photos</Text>
			</View>
		</TouchableOpacity>
	)
}

export default AddPhotosBtn
