import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text } from 'react-native'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import Container from '../../components/Layout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import Balance from './Balance'
import PaymentChart from './PaymentChart'
import PaymentList from './PaymentList'
import { paymentListData, PaymentListType } from './PaymentListData'
import SelectMonth from './SelectMonth'

type Props = {}

const _Payment: FC<Props> = (props) => {
	const navigation = useNavigation()
	return (
		<HomeLayout title="Income">
			<ScrollViewWithRefresh onRefresh={() => {}} loading={false}>
				<HomeCard>
					<Balance />
					<SelectMonth />
					<PaymentChart />
				</HomeCard>
				{paymentListData.map((nav: PaymentListType, index: number) => (
					<PaymentList
						callback={() => navigation.navigate(nav.route)}
						key={index}
						nav={nav.name}
						image={nav.image}
					/>
				))}
			</ScrollViewWithRefresh>
		</HomeLayout>
	)
}

export default _Payment
