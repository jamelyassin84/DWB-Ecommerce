import { RootStackParamList } from './../../types'
export const paymentListData: PaymentListType[] = [
	{
		name: 'Show Recent Transactions',
		image: require('../../assets/app/images/payment/transaction.png'),
		route: '_ShowRecentTransaction',
	},
	{
		name: 'Manage Bank Accounts',
		image: require('../../assets/app/images/payment/bank-fill.png'),
		route: '_ManageBankAccount',
	},
]

export type PaymentListType = {
	route: string | any
	name: string
	image: string | any
}
