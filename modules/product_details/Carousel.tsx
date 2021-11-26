import React, { FC } from 'react'
import { ScrollView, Image } from 'react-native'
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
				<Image
					source={props.data.image}
					key={index}
					style={{
						width: 80,
						height: 60,
						resizeMode: 'stretch',
						borderRadius: 15,
						marginRight: 20,
						borderWidth: index === 0 ? 2 : 0,
						borderColor: Colors[colorscheme].tint
					}}
				/>
			))}
		</ScrollView>
	)
}

export default Carousel
