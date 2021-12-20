import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { BoldText, Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { currencyFormat } from '../../constants/Helpers'
import useColorScheme from '../../hooks/useColorScheme'
import { Product } from '../../models/Product'

type Props = {
	image: string | any
	product: string
	price: number
	currency: string
	data: Product
}
const ProductComponent: FC<Props> = (props) => {
	const navigation = useNavigation()
	const colorScheme = useColorScheme()

	const style = StyleSheet.create({
		button: {
			width: '100%',
			borderRadius: 10,
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 7,
			paddingHorizontal: 8,
			backgroundColor: Colors[colorScheme].background,
			marginVertical: 5,
			shadowColor:
				Platform.OS === 'ios' ? 'rgba(0,0,0,.12)' : 'rgba(0,0,0,.32)',
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.49,
			shadowRadius: 24.65,
			elevation: 20,
		},
		imageContainer: {
			borderWidth: 1,
			borderRadius: 10,
			borderColor: 'rgba(150,150,150,.2)',
		},
		image: {
			width: 60,
			height: 50,
			resizeMode: 'stretch',
			borderRadius: 10,
		},
		textContainer: { flex: 1, marginLeft: 15 },
		price: {
			marginTop: 3,
			color: 'gray',
		},
	})

	return (
		<TouchableOpacity
			style={style.button}
			onPress={() =>
				navigation.navigate('ProductDetail', {
					data: props.data,
				})
			}>
			<View style={style.imageContainer}>
				<Image source={{ uri: props.image }} style={style.image} />
			</View>
			<View style={style.textContainer}>
				<BoldText>{props.product}</BoldText>
				<Text style={style.price}>
					{currencyFormat(props.price, props.currency)}
				</Text>
			</View>
			<Entypo
				name="chevron-small-right"
				size={24}
				color={Colors[colorScheme].tabIconDefault}
			/>
		</TouchableOpacity>
	)
}

export default ProductComponent
