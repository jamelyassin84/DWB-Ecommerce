import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	image: string | any
	product: string
	price: string
}
const ProductComponent: FC<Props> = (props) => {
	const navigation = useNavigation()
	const colorScheme = useColorScheme()

	const style = StyleSheet.create({
		button: {
			width: '100%',
			borderRadius: 10,
			borderWidth: 0.8,
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 7,
			paddingHorizontal: 8,
			borderColor: 'rgba(150,150,150,.2)',
			backgroundColor: Colors[colorScheme].background,
			marginVertical: 5,
			shadowColor: 'rgba(0,0,0,.15)',
			shadowOffset: {
				width: 0,
				height: 10
			},
			shadowOpacity: 0.39,
			shadowRadius: 14.65,
			elevation: 7
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
		textContainer: { flex: 1, marginLeft: 15 },
		price: {
			marginTop: 3,
			fontWeight: 'bold',
			color: 'gray'
		}
	})

	return (
		<TouchableOpacity
			style={style.button}
			onPress={() => navigation.navigate('ProductDetail')}>
			<View style={style.imageContainer}>
				<Image source={props.image} style={style.image} />
			</View>
			<View style={style.textContainer}>
				<Text style={{ fontWeight: 'bold' }}>{props.product}</Text>
				<Text style={style.price}>{props.price}</Text>
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
