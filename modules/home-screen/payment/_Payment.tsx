import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text } from 'react-native'
import HomeCard from '../../../components/app/HomeCard'
import HomeLayout from '../../../components/app/HomeLayout'
import ScrollViewWithRefresh from '../../../components/app/ScrollViewWithRefresh'
import Balance from './Balance'
import PaymentChart from './PaymentChart'
import PaymentList from './PaymentList'
import { paymentListData, PaymentListType } from './PaymentListData'
import SelectMonth from './SelectMonth'

type Props = {}

const _Payment: FC<Props> = (props) => {
	const navigation = useNavigation()

	const [willRefresh, setWillRefresh] = React.useState(false)

	React.useEffect(() => {
		setWillRefresh(true)
	}, [])

	return (
		<HomeLayout title="My Wallet">
			<ScrollViewWithRefresh
				onRefresh={() => {
					setWillRefresh(true)
				}}
				loading={false}>
				<HomeCard>
					<Balance
						willFetch={willRefresh}
						afterRefresh={() => setWillRefresh(false)}
					/>
					<SelectMonth />
					<PaymentChart />
				</HomeCard>
				{paymentListData.map((nav: PaymentListType, index: number) => (
					<PaymentList
						callback={() => navigation.navigate(nav.route)}
						key={index}
						nav={nav.name}
						icon={nav.icon}
					/>
				))}
			</ScrollViewWithRefresh>
		</HomeLayout>
	)
}

export default _Payment
