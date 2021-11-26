import React, { FC } from 'react'
import { Text, View } from '../../components/Themed'
import Title from '../../components/Title'
import HomeProducts from './HomeProducts'

type Props = {}

const TopSellingProducts: FC<Props> = (props) => {
	return (
		<View>
			<Title text="Top Selling Products" />
			<HomeProducts></HomeProducts>
		</View>
	)
}

export default TopSellingProducts
