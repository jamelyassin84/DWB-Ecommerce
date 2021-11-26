import React, { FC } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { Dimensions, View } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'

type Props = {
	onRefresh: Function
	loading: boolean
	backgroundColor?: string
}

const ScrollViewWithRefresh: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	return (
		<ScrollView
			style={{
				height: Dimensions.get('screen').height,
				width: Dimensions.get('screen').width,
				backgroundColor: props.backgroundColor
			}}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl
					tintColor={Colors[colorScheme].tint}
					refreshing={props.loading}
					onRefresh={props.onRefresh()}
				/>
			}>
			{props.children}
			<View style={{ height: 150 }}></View>
		</ScrollView>
	)
}

export default ScrollViewWithRefresh
