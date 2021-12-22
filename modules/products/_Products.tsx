import React, { FC, useCallback, useMemo, useRef } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import { BoldText, View } from '../../components/Themed'
import Title from '../../components/Title'
import useColorScheme from '../../hooks/useColorScheme'
import FloatingButton from './FloatingButton'
import ProductComponent from './ProductComponent'
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import AddProductFrom from './AddProductFrom'
import Colors from '../../constants/Colors'
import BottomSheetHeader from '../../components/BottomSheetHeader'
import { APIService } from '../../api/base.api'
import { Product } from '../../models/Product'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

	const [loading, setLoading] = React.useState(false)
	React.useEffect(() => {
		setMounted(true)
		fetchToken()
	}, [])

	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		getProducts(token)
	}

	const [products, setProducts] = React.useState<Product[]>([])
	const getProducts = (token: string | any): void => {
		setLoading(true)
		new APIService('products')
			.show(1, undefined, token)
			.then((data: Product[] | any) => {
				setProducts(data)
				setLoading(false)
			})
			.catch((error) => {
				setLoading(false)
			})
	}

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
				<ScrollViewWithRefresh
					onRefresh={() => fetchToken()}
					loading={false}>
					<HomeCard>
						<Title text={`My products (${products.length})`} />
						{products.map((item: Product, index: number) => (
							<ProductComponent
								key={index}
								product={item.product_name}
								image={item['image-url']}
								price={item.price}
								currency={item.currency}
								data={item}
							/>
						))}

						{products.length === 0 && (
							<BoldText
								style={{
									alignSelf: 'center',
									padding: '20%',
								}}>
								No Products to show..
							</BoldText>
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
