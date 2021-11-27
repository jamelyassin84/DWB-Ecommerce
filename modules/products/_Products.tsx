import React, { FC, useCallback, useMemo, useRef } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import { View } from '../../components/Themed'
import Title from '../../components/Title'
import useColorScheme from '../../hooks/useColorScheme'
import FloatingButton from './FloatingButton'
import ProductComponent from './ProductComponent'
import { productDummyData, ProductType } from './ProductDummyData'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import AddProductFrom from './AddProductFrom'
import Colors from '../../constants/Colors'

type Props = {}

const _Products: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const addProductRef = useRef<BottomSheet>(null)
	const snapPoints = useMemo(() => ['25%', '96'], [])

	const handleSheetChanges = useCallback((index: number) => {
		if (index === 0) {
			addProductRef.current?.close()
		}
	}, [])

	return (
		<View>
			<FloatingButton
				open={() => addProductRef.current?.snapToIndex(1)}
			/>
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
			<BottomSheet
				backgroundStyle={{
					backgroundColor: Colors[colorScheme].background,
					borderWidth: 1,
					borderColor: 'rgba(150,150,150,.1)',
					padding: 5
				}}
				enableContentPanningGesture={false}
				ref={addProductRef}
				index={0}
				snapPoints={snapPoints}
				backdropComponent={(backdropProps) => (
					<BottomSheetBackdrop
						{...backdropProps}
						enableTouchThrough={true}
					/>
				)}
				onChange={handleSheetChanges}>
				<AddProductFrom
					open={() => addProductRef.current?.snapToIndex(1)}
					close={() => addProductRef.current?.close()}
				/>
			</BottomSheet>
		</View>
	)
}

export default _Products
