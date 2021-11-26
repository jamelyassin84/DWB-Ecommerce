import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {}

const SettingList: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

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
				<AntDesign
					name="user"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<Text style={style.text}>Edit Profile</Text>
				<Entypo
					name="chevron-small-right"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={style.button}>
				<Entypo
					name="lock"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<Text style={style.text}>Change Password</Text>
				<Entypo
					name="chevron-small-right"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default SettingList
