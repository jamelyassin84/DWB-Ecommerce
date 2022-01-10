import React, { FC } from 'react'
import { Text } from 'react-native'
import { View } from '../overrides/Themed'

type Props = {}

const AddProductsPlaceholder: FC<Props> = (props) => {
	return (
		<View>
			<Text>AddProductsPlaceholder</Text>
		</View>
	)
}

export default AddProductsPlaceholder
