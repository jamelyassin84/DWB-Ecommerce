import { Ionicons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native'
import { BoldText } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosError } from 'axios'
import { APIService } from '../../../api/base.api'
import { API } from '../../../api/api.routes'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const SettingListWithToggler: FC<Props> = (props) => {
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
		logoutBtn: {
			flexDirection: 'row',
			justifyContent: 'center',
			paddingVertical: 15,
			alignItems: 'center',
		},
		logoutBtnText: {
			flex: 1,
			color: Colors[colorScheme].tint,
			fontSize: 18,
			textAlign: 'center',
		},
	})

	const [token, setToken] = React.useState<string | any>('')

	React.useEffect(() => {
		fetchToken()
	}, [])

	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		setToken(token)
	}

	const logout = () => {
		new APIService(API.LogOut)
			.store({}, false, token)
			.then((data: any) => {
				navigation.navigate('Auth')
			})
			.catch((reason: AxiosError<{ additionalInfo: string }>) => {
				console.log(reason)
				alert('Something went wrong')
			})
	}

	return (
		<View>
			<View style={style.button}>
				<Ionicons
					name="notifications"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<BoldText style={style.text}>Send Push Notifications</BoldText>
				<Switch
					trackColor={{
						false: 'rgba(150,150,150,.5)',
						true: Colors[colorScheme].tint,
					}}
					thumbColor={Colors[colorScheme].background}
					value={false}
				/>
			</View>

			<View style={style.button}>
				<Ionicons
					name="refresh"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
				<BoldText style={style.text}>Refresh Automatically</BoldText>
				<Switch
					trackColor={{
						false: 'rgba(150,150,150,.5)',
						true: Colors[colorScheme].tint,
					}}
					thumbColor={Colors[colorScheme].background}
					value={true}
				/>
			</View>

			<TouchableOpacity style={style.logoutBtn} onPress={() => logout()}>
				<BoldText style={style.logoutBtnText}>Logout</BoldText>
			</TouchableOpacity>
		</View>
	)
}

export default SettingListWithToggler
