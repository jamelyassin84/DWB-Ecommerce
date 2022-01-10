import React, { FC } from 'react'
import { Dimensions, Platform, View } from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'
import Colors from '../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoldText, Text } from '../overrides/Themed'

type Props = {
	title?: string
}

const HomeLayout: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View
			style={{
				height: Dimensions.get('screen').height,
				width: Dimensions.get('screen').width,
				backgroundColor: Colors[colorScheme].homeBackground,
			}}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: Colors[colorScheme].background,
					paddingTop: 57,
					paddingBottom: 11,
					borderWidth: 0.8,
					borderColor: Colors[colorScheme].homeBackground,
				}}>
				<BoldText
					style={{
						color: '#000F34',
						fontSize: 18,
						textAlign: 'center',
					}}>
					{props.title}
				</BoldText>
			</View>
			{props.children}
		</View>
	)
}

export default HomeLayout
