import React, { FC } from 'react'
import { StyleSheet, Image, Platform, Dimensions } from 'react-native'
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native-gesture-handler'
import Container from '../../../../components/app/Layout'
import TitleBar from '../../../../components/app/TitleBar'
import { BoldText, Text, View } from '../../../../components/overrides/Themed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { APIService } from '../../../../api/base.api'
import { Seller } from '../../../../models/Seller'
import { API } from '../../../../api/api.routes'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

type Props = {}

const _ManageBankAccount: FC<Props> = (props) => {
	React.useEffect(() => {
		fetchToken()
	}, [])

	const [fill, setFill] = React.useState<number>(0)
	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		const user = await AsyncStorage.getItem('user')
		getBalance(token, user)
		setFill(fill + 100)
	}

	const [seller, setSeller] = React.useState<Seller | any>()
	const getBalance = (token: string | any, user: any): void => {
		user = JSON.parse(user)
		new APIService(API.Seller)
			.show(user.id, undefined, token)
			.then((data: any) => {
				setSeller(data)
			})
			.catch(() => {})
	}

	return (
		<Container>
			<TitleBar title="Manage Bank Account" />
			<ScrollView>
				<View style={style.container}>
					<View style={style.bankAccountContainer}>
						<AnimatedCircularProgress
							size={270}
							width={20}
							fill={fill}
							tintColor="#2E70E6"
							rotation={130}
							onAnimationComplete={() => {}}
							backgroundColor="white"
							style={{
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 1,
								},
								shadowOpacity: 0.2,
								shadowRadius: 1.41,
								elevation: 2,
							}}
						/>
						{fill === 100 && (
							<View style={style.bankAccountBorder}>
								<Text style={style.availableBalance}>
									Available Balance
								</Text>
								<BoldText style={style.balance}>
									{seller?.balance || 0}
								</BoldText>
								<BoldText style={style.currency}>AED</BoldText>
							</View>
						)}
					</View>
					<View style={style.textInputContainer}>
						<BoldText style={style.label}>Name</BoldText>
						<TextInput
							placeholder={'Mohammed Ali'}
							style={style.textInput}
						/>
					</View>
					<View style={style.textInputContainer}>
						<BoldText style={style.label}>Bank Name</BoldText>
						<TextInput
							placeholder={'Emirates NBD'}
							style={style.textInput}
						/>
					</View>
					<View style={style.textInputContainer}>
						<BoldText style={style.label}>Account No.</BoldText>
						<TextInput
							placeholder={'000000000'}
							style={style.textInput}
						/>
					</View>
					<View style={style.textInputContainer}>
						<BoldText style={style.label}>IBAN No.</BoldText>
						<TextInput
							placeholder={'AE000000000'}
							style={style.textInput}
						/>
					</View>
					<View style={style.textInputContainer}>
						<BoldText style={style.label}>Swift No.</BoldText>
						<TextInput
							placeholder={'000000000'}
							style={style.textInput}
						/>
					</View>
				</View>
				<TouchableOpacity>
					<Image
						style={style.image}
						source={require('../../../../assets/app/images/payment/withdraw.png')}
					/>
				</TouchableOpacity>
				<View style={{ height: 150 }} />
			</ScrollView>
		</Container>
	)
}

const style = StyleSheet.create({
	container: {
		marginVertical: 23,
		marginHorizontal: 43,
	},
	bankAccountContainer: {
		marginBottom: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	bankAccountBorder: {
		height: 270,
		width: 270,
		justifyContent: 'center',
		backgroundColor: 'white',

		marginTop: -270,
	},
	availableBalance: {
		color: '#000F34',
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 12,
	},
	balance: {
		color: '#000F34',
		fontSize: 47,
		textAlign: 'center',
		marginBottom: 14,
	},
	currency: {
		color: '#000F34',
		fontSize: 27,
		textAlign: 'center',
	},

	textInputContainer: {
		width: '100%',
		paddingVertical: 10,
		borderBottomColor: 'rgba(150,150,150,.2)',
		borderBottomWidth: 1,
	},
	label: {
		fontSize: 16,
		color: '#000F34',
		marginBottom: Platform.OS === 'ios' ? 10 : 0,
	},
	textInput: {
		fontSize: 14,
		color: '#5F6A84',
	},
	image: {
		height: 50,
		width: Dimensions.get('screen').width - 43 * 2,
		marginTop: 20,
		resizeMode: 'cover',
		alignSelf: 'center',
		borderRadius: 12,
	},
})

export default _ManageBankAccount
