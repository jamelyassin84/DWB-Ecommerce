import React, { FC } from 'react'
import { Text } from 'react-native'
import { View } from '../../components/Themed'

type Props = {
	isShowing: boolean
}

const SignUp: FC<Props> = (props) => {
	return (
		<View>
			<Text>SignUp</Text>
		</View>
	)
}

export default SignUp
