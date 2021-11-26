import React, { FC } from 'react'
import { Text } from 'react-native'
import HomeLayout from '../../components/HomeLayout'
import Container from '../../components/Layout'
import Balance from './Balance'
import PaymentChart from './PaymentChart'
import PaymentList from './PaymentList'
import SelectMonth from './SelectMonth'

type Props = {}

const _Payment: FC<Props> = (props) => {
	return (
		<HomeLayout>
			<Balance />
			<SelectMonth />
			<PaymentChart />
			<PaymentList />
		</HomeLayout>
	)
}

export default _Payment
