import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'

type Props = {}

const Balance: FC<Props> = (props) => {
	return (
		<TouchableOpacity>
			<Image
				source={require('../../assets/app/images/payment/top-card.png')}
				style={{
					width: '90%',
					height: 150,
					resizeMode: 'contain',
					marginLeft: '5%'
				}}
			/>
		</TouchableOpacity>
	)
}

export default Balance
