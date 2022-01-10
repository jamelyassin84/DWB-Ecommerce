import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { BoldText, View } from '../../components/overrides/Themed'

type Props = {
	addVariant: Function
}

const AddVariant: FC<Props> = (props) => {
	return (
		<View
			style={{
				marginHorizontal: 23,
				flexDirection: 'row',
				alignItems: 'center',
				marginVertical: 10,
			}}>
			<TouchableOpacity
				onPress={() => props.addVariant()}
				style={{
					backgroundColor: '#2E70E6',
					height: 40,
					padding: 11,
					borderRadius: 10,
				}}>
				<BoldText style={{ color: 'white', fontSize: 14 }}>
					Add Variant
				</BoldText>
			</TouchableOpacity>

			<Text
				style={{
					color: '#000F34',
					fontStyle: 'italic',
					marginLeft: 'auto',
					fontSize: 13,
				}}>
				Use " , " sign every after details.
			</Text>
		</View>
	)
}

export default AddVariant
