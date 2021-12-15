import * as React from 'react'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList, RootTabParamList } from '../types'
import { ColorSchemeName, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme
} from '@react-navigation/native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import _Home from '../modules/home/_Home'
import _Products from '../modules/products/_Products'
import _Payment from '../modules/payment/_Payment'
import _Settings from '../modules/settings/_Settings'
import _Auth from '../modules/auth/_Auth'
import _ProductDetail from '../modules/product_details/_ProductDetail'
import _PasswordReset from '../modules/PasswordReset/_PasswordReset'
import _Profile from '../modules/Profile/_Profile'
import AddProduct from '../modals/AddProduct'
import ModalScreen from '../modals/ModalScreen'

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
				name="Auth"
				component={_Auth}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ProductDetail"
				component={_ProductDetail}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Profile"
				component={_Profile}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PasswordReset"
				component={_PasswordReset}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Group
				screenOptions={{
					presentation: 'modal',
					headerTitle: 'Select Month',
					headerBackButtonMenuEnabled: true,
					headerBackTitle: 'Cancel',
					gestureEnabled: true
				}}>
				<Stack.Screen name="SelectMonth" component={ModalScreen} />
			</Stack.Group>
			<Stack.Group
				screenOptions={{
					presentation: 'modal',
					headerTitle: 'Add Product',
					headerBackButtonMenuEnabled: true,
					headerBackTitle: 'Cancel',
					gestureEnabled: true
				}}>
				<Stack.Screen name="AddProduct" component={AddProduct} />
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
				tabBarActiveTintColor: Colors[colorScheme].tint,
				tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
				tabBarStyle: { borderRadius: 20, height: 80 },
				tabBarHideOnKeyboard: true
			}}>
			<BottomTab.Screen
				name="Home"
				component={_Home}
				options={{
					title: 'Home',
					headerTitleAllowFontScaling: true,
					headerTitleStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 21,
						marginBottom: -10
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0
							}
						]
					},
					tabBarIcon: ({ color }) => (
						<Octicons name="home" size={24} color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Products"
				component={_Products}
				options={{
					title: 'Products',
					headerTitleAllowFontScaling: true,
					headerTitleStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 21,
						marginBottom: -10
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0
							}
						]
					},
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							name="shopping-bag"
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<BottomTab.Screen
				name="Payment"
				component={_Payment}
				options={{
					title: 'Payment',
					headerTitleAllowFontScaling: true,
					headerTitleStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 21,
						marginBottom: -10
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0
							}
						]
					},
					tabBarIcon: ({ color }) => (
						<AntDesign name="creditcard" size={24} color={color} />
					)
				}}
			/>
			<BottomTab.Screen
				name="Menu"
				component={_Settings}
				options={{
					title: 'Menu',
					headerTitleAllowFontScaling: true,
					headerTitleStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 21,
						marginBottom: -10
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0
							}
						]
					},
					tabBarIcon: ({ color }) => (
						<AntDesign name="menuunfold" size={24} color={color} />
					)
				}}
			/>
		</BottomTab.Navigator>
	)
}
