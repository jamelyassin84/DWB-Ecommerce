export const paymentListData: PaymentListType[] = [
	{
		name: 'Show Recent Transactions',
		route: '_ShowRecentTransaction',
		icon: 'currency-usd-circle',
	},
	{
		name: 'Manage Bank Accounts',
		route: '_ManageBankAccount',
		icon: 'bank',
	},
]

export type PaymentListType = {
	route: string | any
	name: string
	icon: 'bank' | 'currency-usd-circle'
}
