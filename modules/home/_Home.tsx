import React, { FC } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import HomeChart from './HomeChart'
import SalesSummary from './SalesSummary'
import TopSellingProducts from './TopSellingProducts'

type Props = {}

const _Home: FC<Props> = (props) => {
	return (
		<HomeLayout>
			<ScrollViewWithRefresh onRefresh={() => {}} loading={false}>
				<HomeCard>
					<SalesSummary />
					<HomeChart />
				</HomeCard>

				<HomeCard>
					<TopSellingProducts />
				</HomeCard>
			</ScrollViewWithRefresh>
		</HomeLayout>
	)
}

export default _Home
