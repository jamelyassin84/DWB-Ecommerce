import React, { FC } from 'react'
import { Dimensions, Platform, View } from 'react-native'
import useColorScheme from '../hooks/useColorScheme'
import Colors from '../constants/Colors'

type Props = {}

const HomeLayout: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<View
			style={{
				height: Dimensions.get('screen').height,
				width: Dimensions.get('screen').width,
				paddingTop: 10,
				backgroundColor: Colors[colorScheme].background
			}}>
			{props.children}
		</View>
	)
}

export default HomeLayout
