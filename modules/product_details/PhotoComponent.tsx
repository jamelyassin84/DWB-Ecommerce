import React, { FC } from 'react'
import { Image } from 'react-native'
import { View } from '../../components/Themed'
import Carousel from './Carousel'

type Props = {
	data: any
}

const PhotoComponent: FC<Props> = (props) => {
	return (
		<View>
			<Image
				source={props.data.image}
				style={{
					width: '100%',
					height: 250,
					borderBottomWidth: 0.4,
					borderColor: 'rgba(150,150,150,.2)',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
					paddingHorizontal: 20
				}}
			/>
			<Carousel data={props.data} />
		</View>
	)
}

export default PhotoComponent
