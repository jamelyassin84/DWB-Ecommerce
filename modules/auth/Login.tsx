import React, { FC } from 'react'
import { Text } from 'react-native'
import { View } from '../../components/Themed'

type Props = {
	isShowing: boolean
}

const Login: FC<Props> = (props) => {
	return (
		<View>
			<Text>Login</Text>
		</View>
	)
}

export default Login
