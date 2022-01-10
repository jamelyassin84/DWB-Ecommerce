import React, { FC } from 'react'
import { Text, View } from '../../components/overrides/Themed'
import Title from '../../components/app/Title'
import { homeProducts, HomeProductType } from './DummyHomeProducts'
import HomeProducts from './HomeProducts'

type Props = {}

const TopSellingProducts: FC<Props> = (props) => {
	return (
		<View>
			<Title text="Top Selling Products" />
			{homeProducts.map((product: HomeProductType, index: number) => (
				<HomeProducts
					key={index}
					image={product.image}
					product={product.name}
					sold={product.sold}
				/>
			))}
		</View>
	)
}

export default TopSellingProducts
