import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { BoldText, Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	image: string | any
	product: string
	sold: number
}

const HomeProducts: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const style = StyleSheet.create({
		button: {
			width: '100%',
			paddingLeft: '5%',
			paddingRight: '5%',
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 10,
			paddingHorizontal: 8,
			borderColor: 'rgba(150,150,150,.2)',
			backgroundColor: Colors[colorScheme].background
		},
		imageContainer: {
			borderWidth: 1,
			borderRadius: 10,
			borderColor: 'rgba(150,150,150,.2)'
		},
		image: {
			width: 60,
			height: 40,
			resizeMode: 'contain',
			borderRadius: 10
		},
		textContainer: { flex: 1, marginLeft: 10 },
		soldContainer: {
			paddingVertical: 7,
			paddingHorizontal: 10,
			backgroundColor: 'rgba(150,150,150,.2)',
			borderRadius: 20
		}
	})

	return (
		<TouchableOpacity style={style.button}>
			<View style={style.imageContainer}>
				<Image source={props.image} style={style.image} />
			</View>
			<View style={style.textContainer}>
				<BoldText>{props.product}</BoldText>
			</View>
			<View style={style.soldContainer}>
				<BoldText>{props.sold} sold</BoldText>
			</View>
		</TouchableOpacity>
	)
}

export default HomeProducts
