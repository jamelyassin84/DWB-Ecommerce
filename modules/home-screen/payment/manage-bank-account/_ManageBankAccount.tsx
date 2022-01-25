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
import { currencyFormat } from '../../../../constants/Helpers'
import Form from '../../../../components/forms/Form'

type Props = {}

const _ManageBankAccount: FC<Props> = (props) => {
	React.useEffect(() => {
		fetchToken()
	}, [])

	const [fill, setFill] = React.useState<number>(0)
	const [token, setToken] = React.useState<string | null>()
	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		setToken(token)
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

	const [amount, setAmount] = React.useState<number>(0)
	const payout = () => {
		// new APIService(API.Seller)
		// 	.store({ amount: amount }, false, token as string)
		// 	.then((data: any) => {
		// 		console.log(data)
		// 	})
		// 	.catch((error) => {
		// 		console.log(error)
		// 	})
		console.log(token)
	}

	return (
		<Container>
			<TitleBar title="Wallet Balance" />
			<ScrollView>
				<View style={style.container}>
					<View style={style.bankAccountContainer}>
						<AnimatedCircularProgress
							size={270}
							width={20}
							fill={fill}
							tintColor="#2E70E6"
							rotation={0}
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
									{currencyFormat(seller?.balance || 0)}
								</BoldText>
								<BoldText style={style.currency}>AED</BoldText>
							</View>
						)}
					</View>
				</View>

				<Form
					text={(value: string) => {
						setAmount(parseInt(value))
					}}
					label="Amount"
					placeholder="0"
					numeric
				/>

				<TouchableOpacity onPress={() => payout()}>
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
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: -30,
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
	image: {
		height: 50,
		width: Dimensions.get('screen').width - 22 * 2,
		resizeMode: 'cover',
		alignSelf: 'center',
		borderRadius: 12,
	},
})

export default _ManageBankAccount
