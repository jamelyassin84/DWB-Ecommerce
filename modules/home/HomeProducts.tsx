import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'

type Props = {
	image: string | any
	product: string
	sold: number
}

const HomeProducts: FC<Props> = (props) => {
	const style = StyleSheet.create({
		button: {
			width: '100%',
			paddingLeft: '5%',
			paddingRight: '5%',
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 10,
			paddingHorizontal: 8,
			backgroundColor: '#fff'
		},
		imageContainer: {
			borderWidth: 1,
			borderRadius: 10,
			borderColor: '#ddd'
		},
		image: {
			width: 60,
			height: 50,
			resizeMode: 'stretch',
			borderRadius: 10
		},
		textContainer: { flex: 1, marginLeft: 10 },
		soldContainer: {
			paddingVertical: 7,
			paddingHorizontal: 10,
			backgroundColor: '#f5f5f5',
			borderRadius: 20
		},
		soldText: {}
	})

	return (
		<TouchableOpacity style={style.button}>
			<View style={style.imageContainer}>
				<Image source={props.image} style={style.image} />
			</View>
			<View style={style.textContainer}>
				<Text style={{ fontWeight: '500' }}>{props.product}</Text>
			</View>
			<View style={style.soldContainer}>
				<Text>{props.sold} sold</Text>
			</View>
		</TouchableOpacity>
	)
}

export default HomeProducts
