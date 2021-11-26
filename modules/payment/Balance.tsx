import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'

type Props = {}

const Balance: FC<Props> = (props) => {
	return (
		<TouchableOpacity>
			<Image
				source={require('../../assets/app/images/payment/top-card.png')}
				style={{
					width: '90%',
					height: 100,
					resizeMode: 'contain',
					alignSelf: 'center',
					marginBottom: 20
				}}
			/>
		</TouchableOpacity>
	)
}

export default Balance
