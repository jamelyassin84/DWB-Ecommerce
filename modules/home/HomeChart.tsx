import React, { FC } from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from '../../components/overrides/Themed'

type Props = {}

const HomeChart: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		container: {},
		image: {
			width: '100%',
			height: 290,
			resizeMode: 'contain',
		},
	})

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require('../../assets/app/images/home/graph.png')}
			/>
		</View>
	)
}

export default HomeChart
