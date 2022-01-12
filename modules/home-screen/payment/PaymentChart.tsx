import React, { FC } from 'react'
import { Dimensions, Image, Platform, StyleSheet } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { View } from '../../../components/overrides/Themed'
import { paymentChartConfig } from '../../../constants/AppConstants'

type Props = {}

const PaymentChart: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		container: {},
		image: {
			width: '100%',
			height: 290,
			resizeMode: 'contain',
		},
	})

	const data = {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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
				height={217}
				chartConfig={paymentChartConfig()}
				fromZero={true}
				showBarTops={false}
				withHorizontalLabels={true}
				withInnerLines={true}
				yAxisSuffix=""
				verticalLabelRotation={0}
				withDots={true}
				withShadow={true}
				withOuterLines={true}
				withVerticalLines={true}
				withHorizontalLines={false}
				showValuesOnTopOfBars={false}
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

export default PaymentChart
