import React, { FC } from 'react'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { View } from './Themed'

type Props = {}

const HomeCard: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	return (
		<View
			style={{
				backgroundColor: Colors[colorScheme].background,
				width: '100%',
				padding: 20,
				marginBottom: 10
			}}>
			{props.children}
		</View>
	)
}

export default HomeCard
