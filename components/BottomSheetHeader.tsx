import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText, Text, View } from './Themed'

type Props = {
	title: string
	close: Function
}

const BottomSheetHeader: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	return (
		<View
			style={{
				flexDirection: 'row',
				width: '100%',
				paddingHorizontal: 20,
				paddingVertical: 5,
				borderBottomColor: 'rgba(150,150,150,.2)',
				borderBottomWidth: 1,
				paddingBottom: 10
			}}>
			<TouchableOpacity style={{ flex: 1 }} onPress={() => props.close()}>
				<Text
					style={{
						color: Colors[colorScheme].tint,
						fontSize: 17
					}}>
					Cancel
				</Text>
			</TouchableOpacity>
			<BoldText
				style={{
					textAlign: 'center',
					alignSelf: 'center',
					fontSize: 17
				}}>
				{props.title}
			</BoldText>
			<View style={{ flex: 1, paddingRight: 10 }}></View>
		</View>
	)
}

export default BottomSheetHeader
