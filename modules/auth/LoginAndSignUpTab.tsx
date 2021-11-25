import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'

type Props = {
	wantsToLogin: Function
}

const LoginAndSignUpTab: FC<Props> = (props) => {
	return (
		<View>
			<View>
				<TouchableOpacity
					onPress={() => {
						props.wantsToLogin(false)
					}}>
					<Text>Sign up</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						props.wantsToLogin(true)
					}}>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default LoginAndSignUpTab
