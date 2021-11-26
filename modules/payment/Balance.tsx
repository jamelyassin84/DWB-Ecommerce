import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'

type Props = {}

const Balance: FC<Props> = (props) => {
	return (
		<TouchableOpacity>
			<Image
				source={require('../../assets/app/images/payment/top-card.png')}
				style={{
					width: '100%',
					height: 140,
					resizeMode: 'contain',
					alignSelf: 'center'
				}}
			/>
		</TouchableOpacity>
	)
}

export default Balance
