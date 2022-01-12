import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText, View } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {
	nav: string
	icon: 'bank' | 'currency-usd-circle'
	callback: Function
}

const PaymentList: FC<Props> = (props) => {
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
			backgroundColor: Colors[colorScheme].background,
		},
		imageContainer: {
			borderWidth: 1,
			borderRadius: 10,
			borderColor: 'rgba(150,150,150,.2)',
			padding: 7,
		},
		image: {
			width: 40,
			height: 40,
			resizeMode: 'contain',
		},
		textContainer: { flex: 1, marginLeft: 10 },
		soldContainer: {
			paddingVertical: 7,
			paddingHorizontal: 10,
			backgroundColor: 'rgba(150,150,150,.2)',
			borderRadius: 20,
		},
		soldText: {},
	})

	return (
		<TouchableOpacity style={style.button} onPress={() => props.callback()}>
			<View style={style.imageContainer}>
				<MaterialCommunityIcons
					name={props.icon}
					size={24}
					color="#7B74FF"
				/>
			</View>
			<View style={style.textContainer}>
				<BoldText>{props.nav}</BoldText>
			</View>
			<Entypo
				name="chevron-small-right"
				size={24}
				color={Colors[colorScheme].tabIconDefault}
			/>
		</TouchableOpacity>
	)
}

export default PaymentList
