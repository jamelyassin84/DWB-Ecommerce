import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet, Switch, Text, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {}

const SettingListWithToggler: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const style = StyleSheet.create({
		button: {
			flexDirection: 'row',
			justifyContent: 'center',
			paddingVertical: 15,
			alignItems: 'center'
		},
		text: {
			flex: 1,
			marginLeft: 15,
			fontWeight: 'bold',
			color: Colors[colorScheme].text,
			fontSize: 14
		}
	})

	return (
		<View>
			<TouchableOpacity style={style.button}>
				<Ionicons
					name="notifications"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<Text style={style.text}>Send Push Notifications</Text>
				<Switch
					trackColor={{
						false: 'rgba(150,150,150,.5)',
						true: Colors[colorScheme].tint
					}}
					thumbColor={Colors[colorScheme].background}
					value={false}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={style.button}>
				<Ionicons
					name="refresh"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<Text style={style.text}>Refresh Automatically</Text>
				<Switch
					trackColor={{
						false: 'rgba(150,150,150,.5)',
						true: Colors[colorScheme].tint
					}}
					thumbColor={Colors[colorScheme].background}
					value={true}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default SettingListWithToggler
