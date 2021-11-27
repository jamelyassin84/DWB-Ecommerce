import { FontAwesome5 } from '@expo/vector-icons'
import React, { FC } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import BottomSheetHeader from '../../components/BottomSheetHeader'
import Container from '../../components/Layout'
import { Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import { Months } from './DummyHomeProducts'

type Props = {
	close: Function
}

const Calendar: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	return (
		<View>
			<BottomSheetHeader
				title="Select Month"
				close={() => {
					props.close()
				}}
			/>
			<ScrollView style={{ width: '100%' }}>
				{Months.map((month: string, index: number) => (
					<TouchableOpacity
						key={index}
						style={{
							flexDirection: 'row',
							paddingHorizontal: 30,
							paddingVertical: 15,
							width: '100%'
						}}>
						<Text
							style={{
								flex: 1,
								fontSize: 16,
								fontWeight: 'bold',
								color:
									index === 8 - 1
										? Colors[colorScheme].tint
										: '#5F6A84'
							}}>
							{month}
						</Text>
						<FontAwesome5
							name="check"
							size={16}
							color={
								index === 8 - 1
									? Colors[colorScheme].tint
									: 'rgba(150,150,150,.2)'
							}
						/>
					</TouchableOpacity>
				))}
				<View style={{ marginTop: 190 }}></View>
			</ScrollView>
		</View>
	)
}

export default Calendar
