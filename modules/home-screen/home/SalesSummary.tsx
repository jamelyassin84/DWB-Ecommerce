import React, { FC } from 'react'
import { View } from '../../../components/overrides/Themed'
import Title from '../../../components/app/Title'
import SelectAMonth from './SelectAMonth'

type Props = {
	activateBottomSheet: Function
}

const SalesSummary: FC<Props> = (props) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
			<Title text="Sales summary" />
			<SelectAMonth
				activateBottomSheet={() => {
					props.activateBottomSheet()
				}}
			/>
		</View>
	)
}

export default SalesSummary
