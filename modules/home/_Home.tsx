import React, { FC } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import HomeChart from './HomeChart'
import SalesSummary from './SalesSummary'
import SelectAMonth from './SelectAMonth'
import TopSellingProducts from './TopSellingProducts'

type Props = {}

const _Home: FC<Props> = (props) => {
	return (
		<HomeLayout>
			<HomeCard>
				<SalesSummary />
				<SelectAMonth />
				<HomeChart />
			</HomeCard>

			<HomeCard>
				<TopSellingProducts />
			</HomeCard>
		</HomeLayout>
	)
}

export default _Home
