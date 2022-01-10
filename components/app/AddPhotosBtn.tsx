import { Feather } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import { BoldText, View } from '../overrides/Themed'
import * as ImagePicker from 'expo-image-picker'

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

	const pickImage = async () => {
		let result: any = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [2, 1],
			allowsMultipleSelection: true,
			quality: 1,
		})
		if (!result.cancelled) {
			props.callback(result)
		}
	}

	return (
		<View style={styles.wrapper}>
			<TouchableOpacity style={styles.button} onPress={() => pickImage()}>
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
					<BoldText style={styles.buttonText}>Add Photo</BoldText>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default AddPhotosBtn
