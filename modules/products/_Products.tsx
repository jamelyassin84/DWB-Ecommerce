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
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import AddProductFrom from './AddProductFrom'
import Colors from '../../constants/Colors'
import BottomSheetHeader from '../../components/BottomSheetHeader'

type Props = {}

const _Products: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const [mounted, setMounted] = React.useState(false)
	const [floatingButtonIsShowing, setFloatingButtonIsShowing] =
		React.useState(true)

	const addProductRef = useRef<BottomSheet>(null)
	const snapPoints = useMemo(() => ['25%', '93'], [])

	const handleSheetChanges = useCallback((index: number) => {
		if (index === 0) {
			setFloatingButtonIsShowing(true)
			addProductRef.current?.close()
			return
		}
	}, [])
	React.useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<View>
			<FloatingButton
				isShowing={floatingButtonIsShowing}
				open={() => {
					addProductRef.current?.snapToIndex(1)
					setFloatingButtonIsShowing(false)
				}}
			/>
			<HomeLayout title="Products">
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
							),
						)}
					</HomeCard>
				</ScrollViewWithRefresh>
			</HomeLayout>
			{mounted && (
				<BottomSheet
					backgroundStyle={{
						backgroundColor: Colors[colorScheme].background,
						borderWidth: 1,
						borderColor: 'rgba(150,150,150,.1)',
						padding: 5,
					}}
					handleStyle={{
						display: 'none',
					}}
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
					<BottomSheetHeader
						title="Add Product"
						close={() => {
							addProductRef.current?.close()
							setFloatingButtonIsShowing(true)
						}}
					/>
					<BottomSheetScrollView>
						<AddProductFrom
							open={() => {
								addProductRef.current?.snapToIndex(1)
								setFloatingButtonIsShowing(false)
							}}
							close={() => {
								addProductRef.current?.close()
								setFloatingButtonIsShowing(true)
							}}
						/>
					</BottomSheetScrollView>
				</BottomSheet>
			)}
		</View>
	)
}

export default _Products
