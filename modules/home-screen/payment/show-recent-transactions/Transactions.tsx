import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { BoldText, Text, View } from '../../../../components/overrides/Themed'
import {
	applicationPercentageInPercent,
	deductAppPercentage,
} from '../../../../constants/AppConstants'
import toDate from '../../../../constants/Helpers'
import { Transaction } from '../../../../models/Transactions'

type Props = {
	transaction: Transaction
}

const Transactions: FC<Props> = (props) => {
	return (
		<View style={style.container}>
			<View style={style.textWrapper}>
				{/* <Text style={style.referenceNumber}>
					{props.transaction.reference_number}
				</Text> */}
				<Text style={style.title}>
					{props.transaction.product.name}
				</Text>
				<Text style={style.description}>
					{props.transaction.product.brief_description}
				</Text>

				<Text style={style.variant}>
					{toDate(props.transaction.created_at, true)}
				</Text>
			</View>
			<View style={style.amountWrapper}>
				<BoldText style={[style.variant, { color: '#0AD0E4' }]}>
					App Fee: {applicationPercentageInPercent}
				</BoldText>
				<BoldText style={[style.variant]}>
					Amount: {props.transaction.amount}
				</BoldText>
				<BoldText style={style.amount}>
					{deductAppPercentage(props.transaction.amount)}{' '}
					{props.transaction.product.currency}
				</BoldText>
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
		borderBottomColor: 'rgba(150,150,150,.2)',
	},
	textWrapper: {
		flex: 1,
	},
	referenceNumber: {
		fontSize: 12,
		color: '#2E70E6',
	},
	title: {
		color: '#000F34',
		fontSize: 14,
	},
	description: {
		color: 'gray',
		fontSize: 14,
	},
	variant: {
		color: 'gray',
		fontSize: 14,
	},
	amountWrapper: {},
	amount: {
		alignSelf: 'flex-end',
		color: '#000F34',
		fontSize: 16,
	},
})

export default Transactions
