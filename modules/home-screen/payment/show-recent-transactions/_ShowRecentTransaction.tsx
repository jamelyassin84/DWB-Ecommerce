import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import Transactions from './Transactions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { APIService } from '../../../../api/base.api'
import { API } from '../../../../api/api.routes'
import { Transaction } from '../../../../models/Transactions'
import TitleBar from '../../../../components/app/TitleBar'
import Container from '../../../../components/app/Layout'
import { BoldText, View } from '../../../../components/overrides/Themed'
import ScrollViewWithRefresh from '../../../../components/app/ScrollViewWithRefresh'

type Props = {}

const _ShowRecentTransaction: FC<Props> = (props) => {
	const [loading, setLoading] = React.useState(false)
	React.useEffect(() => {
		fetchToken()
	}, [])

	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		const user = await AsyncStorage.getItem('user')
		getTransactions(token, user)
	}

	const [transactions, seTransactions] = React.useState<Transaction[]>([])
	const getTransactions = (token: string | any, user: any): void => {
		user = JSON.parse(user)
		setLoading(true)
		new APIService(API.Transactions)
			.show(user.id, undefined, token)
			.then((data: any) => {
				seTransactions(data)
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
			})
	}

	return (
		<Container>
			<TitleBar title="Recent Transactions" />
			<View style={style.view}>
				<BoldText style={style.ref}>Reference No.</BoldText>
				<BoldText style={style.amount}>Amount</BoldText>
			</View>

			<ScrollViewWithRefresh
				onRefresh={() => fetchToken()}
				loading={loading}>
				{transactions.map((transaction: Transaction, index: number) => (
					<Transactions transaction={transaction} key={index} />
				))}
			</ScrollViewWithRefresh>
		</Container>
	)
}

const style = StyleSheet.create({
	view: {
		flexDirection: 'row',
		paddingHorizontal: 43,
	},
	ref: {
		flex: 1,
	},
	amount: {},
})

export default _ShowRecentTransaction
