import * as React from 'react'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList, RootTabParamList } from '../types'
import { ColorSchemeName, Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Entypo } from '@expo/vector-icons'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme
} from '@react-navigation/native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import LoginAndSignUpTab from '../modules/app/LoginAndSignupTab'

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
				component={LoginAndSignUpTab}
				options={{
					title: 'Products',
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Products"
				component={LoginAndSignUpTab}
				options={{
					title: 'Products',
					tabBarIcon: ({ color }) => (
						<FontAwesome5 size={24} name="box-open" color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Payment"
				component={LoginAndSignUpTab}
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
				component={LoginAndSignUpTab}
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
