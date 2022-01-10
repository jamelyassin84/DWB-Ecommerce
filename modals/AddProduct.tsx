import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Text, View } from '../components/overrides/Themed'

export default function AddProduct({ route }: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Coming Soon</Text>

			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
