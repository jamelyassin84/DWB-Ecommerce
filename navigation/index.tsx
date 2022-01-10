import * as React from 'react'
import { AntDesign, FontAwesome5, Octicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList, RootTabParamList } from '../types'
import { ColorSchemeName, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import _Home from '../modules/home-screen/home/_Home'
import _Products from '../modules/home-screen/products/_Products'
import _Payment from '../modules/home-screen/payment/_Payment'
import _Settings from '../modules/home-screen/settings/_Settings'
import _Auth from '../modules/auth/_Auth'
import _ProductDetail from '../modules/home-screen/products/product_details/_ProductDetail'
import AddProduct from '../modals/AddProduct'
import ModalScreen from '../modals/ModalScreen'
import _EditProfile from '../modules/home-screen/settings/edit-profile/_EditProfile'
import _ChangePassword from '../modules/home-screen/settings/change-password/_ChangePassword'
import _ShowRecentTransaction from '../modules/home-screen/payment/show-recent-transactions/_ShowRecentTransaction'
import _ManageBankAccount from '../modules/home-screen/payment/manage-bank-account/_ManageBankAccount'
import Step1 from '../modules/stepper/Step1'
import Step2 from '../modules/stepper/Step2'
import Step3 from '../modules/stepper/Step3'
import Step4 from '../modules/stepper/Step4'
import EnterVerificationCode from '../modules/auth/EnterVerificationCode'
import VerifyPhoneNumber from '../modules/auth/VerifyPhoneNumber'

export default function Navigation({
	colorScheme,
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
				name="VerifyPhoneNumber"
				component={VerifyPhoneNumber}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="EnterVerificationCode"
				component={EnterVerificationCode}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ProductDetail"
				component={_ProductDetail}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="_ManageBankAccount"
				component={_ManageBankAccount}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="_ShowRecentTransaction"
				component={_ShowRecentTransaction}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="_ChangePassword"
				component={_ChangePassword}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Step1"
				component={Step1}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Step2"
				component={Step2}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Step3"
				component={Step3}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Step4"
				component={Step4}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="_EditProfile"
				component={_EditProfile}
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
					gestureEnabled: true,
				}}>
				<Stack.Screen name="SelectMonth" component={ModalScreen} />
			</Stack.Group>
			<Stack.Group
				screenOptions={{
					presentation: 'modal',
					headerTitle: 'Add Product',
					headerBackButtonMenuEnabled: true,
					headerBackTitle: 'Cancel',
					gestureEnabled: true,
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
				tabBarHideOnKeyboard: true,
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
						marginBottom: -10,
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0,
							},
						],
					},
					tabBarIcon: ({ color }) => (
						<Octicons name="home" size={24} color={color} />
					),
					headerShown: false,
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
						marginBottom: -10,
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0,
							},
						],
					},
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							name="shopping-bag"
							size={24}
							color={color}
						/>
					),
					headerShown: false,
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
						marginBottom: -10,
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0,
							},
						],
					},
					tabBarIcon: ({ color }) => (
						<AntDesign name="creditcard" size={24} color={color} />
					),
					headerShown: false,
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
						marginBottom: -10,
					},
					tabBarLabelStyle: {
						fontFamily: 'Montserrat-bold',
						fontSize: 11,
						transform: [
							{
								translateY: Platform.OS === 'android' ? -14 : 0,
							},
						],
					},
					tabBarIcon: ({ color }) => (
						<AntDesign name="menuunfold" size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
		</BottomTab.Navigator>
	)
}
