import React, { FC } from 'react'
import { Dimensions, Platform, View } from 'react-native'
import useColorScheme from '../../hooks/useColorScheme'
import Colors from '../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Container: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	return (
		<SafeAreaView
			style={{
				height: Dimensions.get('screen').height,
				width: Dimensions.get('screen').width,
				backgroundColor: Colors[colorScheme].background,
			}}>
			{props.children}
		</SafeAreaView>
	)
}

export default Container
