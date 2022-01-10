import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Seller } from './models/Seller'
import { User } from './models/User'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Auth: any
	EnterVerificationCode: { token: any }
	VerifyPhoneNumber: {
		seller: Seller
		user: User
		token: any
	}
	Root: NavigatorScreenParams<RootTabParamList> | undefined
	SelectMonth: any
	ProductDetail: any
	PasswordReset: any
	Profile: any
	AddProduct: any

	_ManageBankAccount: undefined
	_ShowRecentTransaction: undefined
	_ChangePassword: undefined
	_EditProfile: undefined

	Step1: undefined
	Step2: undefined
	Step3: undefined
	Step4: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
	Home: undefined
	Products: undefined
	Payment: undefined
	Menu: undefined
	Profile: undefined
	PasswordReset: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>
