import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'

type Props = {}

const HeaderWithBack: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<View
			style={{
				width: '100%',
			}}>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack()
				}}>
				{/* <Image
					style={{
						height: 24,
						resizeMode: 'contain',
					}}
					source={require('../assets/app/images/back.png')}
				/> */}
			</TouchableOpacity>
		</View>
	)
}

export default HeaderWithBack
