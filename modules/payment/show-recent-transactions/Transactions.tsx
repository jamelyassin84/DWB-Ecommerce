import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from '../../../components/Themed'

type Props = {}

const Transactions: FC<Props> = (props) => {
	return (
		<View style={style.container}>
			<View style={style.textWrapper}>
				<Text style={style.referenceNumber}>AE126465265UI</Text>
				<Text style={style.title}>Nike PRECISION IV</Text>
				<Text style={style.description}>Unisex Basketball Shoes</Text>
				<Text style={style.variant}>Size : 37 US</Text>
			</View>
			<View style={style.amountWrapper}>
				<Text style={style.amount}>599 AED</Text>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 15,
		paddingRight: 43,
		paddingHorizontal: 32,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
	},
	textWrapper: {
		flex: 1,
	},
	referenceNumber: {
		fontSize: 16,
		color: '#2E70E6',
	},
	title: {
		color: '#000F34',
		fontSize: 12,
	},
	description: {
		color: '#000F34',
		fontSize: 12,
	},
	variant: {
		color: '#000F34',
		fontSize: 12,
	},
	amountWrapper: {},
	amount: {
		alignSelf: 'flex-end',
		color: '#000F34',
		fontSize: 16,
	},
})

export default Transactions
