import React, { FC } from 'react'
import { Text } from 'react-native'
import BottomSheetHeader from '../../components/BottomSheetHeader'
import Container from '../../components/Layout'
import { View } from '../../components/Themed'

type Props = {
	close: Function
}

const Calendar: FC<Props> = (props) => {
	return (
		<View>
			<BottomSheetHeader
				title="Select Month"
				close={() => {
					props.close()
				}}
			/>
		</View>
	)
}

export default Calendar
