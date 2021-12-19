import React, { FC, useCallback, useMemo, useRef } from 'react'
import HomeCard from '../../components/HomeCard'
import HomeLayout from '../../components/HomeLayout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import HomeChart from './HomeChart'
import SalesSummary from './SalesSummary'
import TopSellingProducts from './TopSellingProducts'
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetScrollView
} from '@gorhom/bottom-sheet'

import Calendar from './Calendar'
import useColorScheme from '../../hooks/useColorScheme'
import Colors from '../../constants/Colors'
import BottomSheetHeader from '../../components/BottomSheetHeader'

type Props = {}

const _Home: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const monthsRef = useRef<BottomSheet>(null)
	const snapPoints = useMemo(() => ['25%', '89'], [])

	const handleSheetChanges = useCallback((index: number) => {
		if (index === 0) {
			monthsRef.current?.close()
		}
	}, [])

	return (
		<HomeLayout title="Home">
			<ScrollViewWithRefresh onRefresh={() => {}} loading={false}>
				<HomeCard>
					<SalesSummary
						activateBottomSheet={() => {
							monthsRef.current?.snapToIndex(1)
						}}
					/>
					<HomeChart />
				</HomeCard>

				<HomeCard>
					<TopSellingProducts />
				</HomeCard>
			</ScrollViewWithRefresh>

			<BottomSheet
				handleStyle={{
					display: 'none'
				}}
				style={{
					shadowColor: 'gray',
					shadowOffset: {
						width: 0,
						height: 0
					},
					shadowOpacity: 0.2,
					shadowRadius: 5.46,
					// elevation: 19,
					width: '100%',
					borderWidth: 1,
					borderColor: '#F2F4F6',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20
				}}
				backgroundStyle={{
					backgroundColor: Colors[colorScheme].background,
					borderWidth: 1,
					borderColor: 'rgba(150,150,150,.1)',
					padding: 5
				}}
				ref={monthsRef}
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
					title="Select Month"
					close={() => {
						monthsRef.current?.close()
					}}
				/>

				<BottomSheetScrollView>
					<Calendar
						close={() => {
							monthsRef.current?.close()
						}}
					/>
				</BottomSheetScrollView>
			</BottomSheet>
		</HomeLayout>
	)
}

export default _Home
