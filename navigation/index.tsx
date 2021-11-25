/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps
} from '../types'
import { Entypo } from '@expo/vector-icons'

export default function Navigation({
	colorScheme
}: {
	colorScheme: ColorSchemeName
}) {
	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	)
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const RootNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	)
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()
const BottomTabNavigator = () => {
	const colorScheme = useColorScheme()

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint
			}}>
			<BottomTab.Screen
				name="Home"
				component={TabOneScreen}
				options={{
					title: 'Products',
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Products"
				component={TabTwoScreen}
				options={{
					title: 'Products',
					tabBarIcon: ({ color }) => (
						<FontAwesome5 size={24} name="box-open" color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Payment"
				component={TabTwoScreen}
				options={{
					title: 'Payment',
					tabBarIcon: ({ color }) => (
						<FontAwesome
							size={24}
							name="credit-card-alt"
							color={color}
						/>
					)
				}}
			/>
			<BottomTab.Screen
				name="Settings"
				component={TabTwoScreen}
				options={{
					title: 'Settings',
					tabBarIcon: ({ color }) => (
						<Ionicons
							size={24}
							name="ios-settings-sharp"
							color={color}
						/>
					)
				}}
			/>
		</BottomTab.Navigator>
	)
}
