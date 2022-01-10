import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { BoldText, Text, View } from '../../components/overrides/Themed'
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
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 10,
			borderColor: 'rgba(150,150,150,.2)',
			backgroundColor: Colors[colorScheme].background,
		},
		imageContainer: {
			borderRadius: 10,
			width: 54,
			height: 40,
		},
		image: {
			width: 54,
			height: 40,
			resizeMode: 'stretch',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: 'rgba(150,150,150,.2)',
		},
		textContainer: { flex: 1, marginLeft: 16 },
		soldContainer: {
			paddingVertical: 7,
			paddingHorizontal: 10,
			backgroundColor: '#F5F5F5',
			borderRadius: 20,
		},
	})

	return (
		<TouchableOpacity style={style.button}>
			<View style={style.imageContainer}>
				<Image source={props.image} style={style.image} />
			</View>
			<View style={style.textContainer}>
				<BoldText style={{ fontSize: 14 }}>{props.product}</BoldText>
			</View>
			<View style={style.soldContainer}>
				<Text>{props.sold} sold</Text>
			</View>
		</TouchableOpacity>
	)
}

export default HomeProducts
