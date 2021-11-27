import React, { FC } from 'react'
import { ScrollView, Image, Platform, View } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	data: any
}

const Carousel: FC<Props> = (props) => {
	const colorscheme = useColorScheme()

	const images = [1, 1, 22, 2, 2, , 2, 2, 2, 2]

	return (
		<ScrollView
			showsHorizontalScrollIndicator={false}
			horizontal={true}
			style={{
				padding: 18
			}}>
			{images.map((image, index) => (
				<View
					style={{
						borderRadius: 15,
						borderWidth: index === 0 ? 2 : 0.5,
						borderColor:
							index === 0
								? Colors[colorscheme].tint
								: 'rgba(150,150,150,.4)',
						marginRight: 20
					}}>
					<Image
						source={props.data.image}
						key={index}
						style={{
							width: 80,
							height: 60,
							resizeMode: 'contain'
						}}
					/>
				</View>
			))}
		</ScrollView>
	)
}

export default Carousel
