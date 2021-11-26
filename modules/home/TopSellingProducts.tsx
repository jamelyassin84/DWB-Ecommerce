import React, { FC } from 'react'
import { Text, View } from '../../components/Themed'
import HomeProducts from './HomeProducts'

type Props = {}

const TopSellingProducts: FC<Props> = (props) => {
	return (
		<View>
			<Text>Top Selling Products</Text>
			<HomeProducts></HomeProducts>
		</View>
	)
}

export default TopSellingProducts
