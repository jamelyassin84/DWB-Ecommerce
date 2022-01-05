import React, { FC } from 'react'
import { Image } from 'react-native'
import { View } from '../../components/Themed'
import Carousel from './Carousel'

type Props = {
	data: any
}

const PhotoComponent: FC<Props> = (props) => {
	const [image, setImage] = React.useState(props.data.url)

	return (
		<View>
			<Image
				source={{ uri: image }}
				style={{
					width: '100%',
					height: 250,
					borderBottomWidth: 0.4,
					borderColor: 'rgba(150,150,150,.2)',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
					paddingHorizontal: 20,
					marginBottom: 6,
				}}
			/>
			<Carousel
				onSelect={(image: string) => {
					setImage(image)
				}}
				firstPhoto={props.data.url}
				data={props.data}
			/>
		</View>
	)
}

export default PhotoComponent
