import React, { FC } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import Title from '../../components/Title'
import ProductComponent from './ProductComponent'
import { productDummyData, ProductType } from './ProductDummyData'

type Props = {}

const _Products: FC<Props> = (props) => {
	return (
		<ScrollViewWithRefresh onRefresh={() => {}} loading={false}>
			<HomeLayout>
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
			</HomeLayout>
		</ScrollViewWithRefresh>
	)
}

export default _Products
