import React, { FC } from 'react'
import { Text } from 'react-native'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import Container from '../../components/Layout'
import Balance from './Balance'
import PaymentChart from './PaymentChart'
import PaymentList from './PaymentList'
import { paymentListData, PaymentListType } from './PaymentListData'
import SelectMonth from './SelectMonth'

type Props = {}

const _Payment: FC<Props> = (props) => {
	return (
		<HomeLayout>
			<HomeCard>
				<Balance />
				<SelectMonth />
				<PaymentChart />
			</HomeCard>
			{paymentListData.map((nav: PaymentListType, index: number) => (
				<PaymentList key={index} nav={nav.name} image={nav.image} />
			))}
		</HomeLayout>
	)
}

export default _Payment
