import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { BoldText, View } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {}

const SettingList: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

	const style = StyleSheet.create({
		button: {
			flexDirection: 'row',
			justifyContent: 'center',
			paddingVertical: 15,
			alignItems: 'center',
		},
		text: {
			flex: 1,
			marginLeft: 15,
			color: Colors[colorScheme].text,
			fontSize: 14,
		},
	})

	return (
		<View>
			<TouchableOpacity
				style={style.button}
				onPress={() => navigation.navigate('_EditProfile')}>
				<AntDesign
					name="user"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<BoldText style={style.text}>Edit Profile</BoldText>
				<Entypo
					name="chevron-small-right"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={style.button}
				onPress={() => navigation.navigate('_ChangePassword')}>
				<Entypo
					name="lock"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<BoldText style={style.text}>Change Password</BoldText>
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
