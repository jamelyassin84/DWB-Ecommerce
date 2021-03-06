import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { APIService } from './api/base.api'
import { API } from './api/api.routes'
import { useNavigation } from '@react-navigation/native'
// import 'react-native-gesture-handlers'

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	// const navigation = useNavigation()
	// async function checkConnection() {
	// 	// new APIService(API.Connection)
	// 	// 	.index()
	// 	// 	.then(() => {
	// 	// 		alert('Connected')
	// 	// 	})
	// 	// 	.catch(() => {
	// 	// 		alert('Failed to Connect to Server')
	// 	// 	})
	// 	navigation.navigate('Root')
	// }

	// checkConnection()

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</SafeAreaProvider>
		)
	}
}
