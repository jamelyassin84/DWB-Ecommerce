import React, { FC } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import { View } from '../../components/Themed'
import Title from '../../components/Title'
import FloatingButton from './FloatingButton'
import ProductComponent from './ProductComponent'
import { productDummyData, ProductType } from './ProductDummyData'

type Props = {}

const _Products: FC<Props> = (props) => {
	return (
		<View>
			<FloatingButton />
			<HomeLayout>
				<ScrollViewWithRefresh onRefresh={() => {}} loading={false}>
					<HomeCard>
						<Title text="My products (25)" />
						{productDummyData.map(
							(product: ProductType, index: number) => (
								<ProductComponent
									key={index}
									product={product.name}
									image={product.image}
									price={product.price}
								/>
							)
						)}
					</HomeCard>
				</ScrollViewWithRefresh>
			</HomeLayout>
		</View>
	)
}

export default _Products
