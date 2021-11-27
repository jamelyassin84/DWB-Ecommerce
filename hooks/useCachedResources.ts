import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false)

	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync()

				await Font.loadAsync({
					...FontAwesome.font,
					'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
				})
				await Font.loadAsync({
					...FontAwesome.font,
					Montserrat: require('../assets/fonts/Montserrat.ttf')
				})
				await Font.loadAsync({
					...FontAwesome.font,
					'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
				})
				await Font.loadAsync({
					...FontAwesome.font,
					'Montserrat-bold': require('../assets/fonts/Montserrat-bold.ttf')
				})
			} catch (e) {
				console.warn(e)
			} finally {
				setLoadingComplete(true)
				SplashScreen.hideAsync()
			}
		}

		loadResourcesAndDataAsync()
	}, [])

	return isLoadingComplete
}
