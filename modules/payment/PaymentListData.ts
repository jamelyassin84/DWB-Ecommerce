import { RootStackParamList } from './../../types'
export const paymentListData: PaymentListType[] = [
	{
		name: 'Show Recent Transactions',
		image: require('../../assets/app/images/payment/transaction.png')
	},
	{
		name: 'Manage Bank Accounts',
		image: require('../../assets/app/images/payment/bank-fill.png')
	}
]

export type PaymentListType = {
	route?: RootStackParamList
	name: string
	image: string | any
}
