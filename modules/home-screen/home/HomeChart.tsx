import React, { FC } from 'react'
import { Dimensions, Image, Platform, StyleSheet } from 'react-native'
import { View } from '../../../components/overrides/Themed'
import { BarChart } from 'react-native-chart-kit'
import { homeChartConfig } from '../../../constants/AppConstants'

type Props = {}

const HomeChart: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		container: {},
		image: {
			width: '100%',
			height: 290,
			resizeMode: 'contain',
		},
	})

	const data = {
		labels: ['Nike', 'Shoes', 'Wallet', 'Hand Bags', 'Shirt'],
		datasets: [
			{
				data: [30, 65, 22, 45, 82],
			},
		],
	}

	return (
		<View style={styles.container}>
			<BarChart
				data={data}
				width={Dimensions.get('screen').width}
				height={279}
				chartConfig={homeChartConfig()}
				fromZero={true}
				showBarTops={false}
				withHorizontalLabels={true}
				withInnerLines={false}
				yAxisSuffix="%"
				verticalLabelRotation={0}
				withDots={true}
				withShadow={true}
				withOuterLines={true}
				withVerticalLines={true}
				withHorizontalLines={false}
				showValuesOnTopOfBars={true}
				style={{
					alignSelf: 'center',
					marginLeft: Platform.OS === 'android' ? -20 : -25,
					marginTop: 20,
				}}
				propsForVerticalLabels={{ fontWeight: 'bold' }}
				propsForHorizontalLabels={{ fontWeight: 'bold' }}
			/>
		</View>
	)
}

export default HomeChart
