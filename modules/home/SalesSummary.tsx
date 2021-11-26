import React, { FC } from 'react'
import { Text } from 'react-native'
import { View } from '../../components/Themed'
import Title from '../../components/Title'
import SelectAMonth from './SelectAMonth'

type Props = {}

const SalesSummary: FC<Props> = (props) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
			<Title text="Sales summary" />
			<SelectAMonth />
		</View>
	)
}

export default SalesSummary
