import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import Container from '../../../components/Layout'
import { BoldText, View } from '../../../components/Themed'
import TitleBar from '../../../components/TitleBar'
import Transactions from './Transactions'

type Props = {}

const _ShowRecentTransaction: FC<Props> = (props) => {
	const getTransactions = () => {}

	return (
		<Container>
			<TitleBar title="Recent Transactions" />
			<View style={style.view}>
				<BoldText style={style.ref}>Reference No.</BoldText>
				<BoldText style={style.amount}>Amount</BoldText>
			</View>
			<Transactions />
		</Container>
	)
}

const style = StyleSheet.create({
	view: {
		flexDirection: 'row',
		paddingHorizontal: 43,
		marginBottom: 20,
	},
	ref: {
		flex: 1,
	},
	amount: {},
})

export default _ShowRecentTransaction
