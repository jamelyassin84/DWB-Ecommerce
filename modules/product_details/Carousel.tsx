import React, { FC } from 'react'
import {
	ScrollView,
	Image,
	Platform,
	View,
	TouchableOpacity,
} from 'react-native'
import { Text } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	data: any
	firstPhoto?: any
	onSelect: Function
}

const Carousel: FC<Props> = (props) => {
	const colorscheme = useColorScheme()

	const [photoNumber, setPhoto] = React.useState(0)

	return (
		<ScrollView
			showsHorizontalScrollIndicator={false}
			horizontal={true}
			style={{
				padding: 18,
			}}>
			{props.firstPhoto && (
				<TouchableOpacity
					onPress={() => {
						props.onSelect(props.firstPhoto)
						setPhoto(0)
					}}
					style={{
						borderRadius: 15,
						marginRight: 13,
						borderWidth: 2,
						borderColor:
							photoNumber === 0
								? Colors[colorscheme].tint
								: 'transparent',
					}}>
					<Image
						source={{ uri: props.firstPhoto }}
						style={{
							width: 80,
							height: 58,
							resizeMode: 'stretch',
							borderRadius:
								Platform.OS === 'android' ? 150 / 2 : 15,
						}}
					/>
				</TouchableOpacity>
			)}
			{props.data.photos.map((photo: any, index: number) => (
				<TouchableOpacity
					key={index}
					onPress={() => {
						props.onSelect(photo.url)
						setPhoto(index + 1)
					}}
					style={{
						borderRadius: 15,
						borderWidth: 2,
						borderColor:
							index + 1 === photoNumber
								? Colors[colorscheme].tint
								: 'transparent',
						marginRight: 13,
					}}>
					<Image
						source={{ uri: photo.url }}
						key={index}
						style={{
							width: 80,
							height: 58,
							resizeMode: 'stretch',
							borderRadius:
								Platform.OS === 'android' ? 150 / 2 : 15,
						}}
					/>
				</TouchableOpacity>
			))}
		</ScrollView>
	)
}

export default Carousel
