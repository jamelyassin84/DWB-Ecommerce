import React, { FC } from 'react'
import { Text, View } from '../../components/Themed'
import Title from '../../components/Title'
import { homeProducts, HomeProductType } from './DummyHomeProducts'
import HomeProducts from './HomeProducts'

type Props = {}

const TopSellingProducts: FC<Props> = (props) => {
	return (
		<View>
			<Title text="Top Selling Products" />
			{homeProducts.map((product: HomeProductType, index: number) => (
				<HomeProducts
					image={product.image}
					product={product.name}
					sold={product.sold}
				/>
			))}
		</View>
	)
}

export default TopSellingProducts
