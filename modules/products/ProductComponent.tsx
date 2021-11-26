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
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 7,
			paddingHorizontal: 8,
			backgroundColor: Colors[colorScheme].background,
			marginVertical: 5,
			shadowColor: 'rgba(0,0,0,.12)',
			shadowOffset: {
				width: 0,
				height: 5
			},
			shadowOpacity: 0.49,
			shadowRadius: 24.65,
			elevation: 7
		},
		imageContainer: {
			borderWidth: 1,
			borderRadius: 10,
			borderColor: 'rgba(150,150,150,.2)'
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
			onPress={() =>
				navigation.navigate('ProductDetail', {
					data: {
						product: props.product,
						image: props.image
					}
				})
			}>
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
