import React, { FC } from 'react'
import { StyleSheet, Image, Platform } from 'react-native'
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native-gesture-handler'
import Container from '../../../components/app/Layout'
import { BoldText, Text, View } from '../../../components/overrides/Themed'
import TitleBar from '../../../components/app/TitleBar'

type Props = {}

const _ManageBankAccount: FC<Props> = (props) => {
	return (
		<Container>
			<TitleBar title="Manage Bank Account" />
			<ScrollView>
				<View style={style.container}>
					<View style={style.bankAccountContainer}>
						<View style={style.bankAccountBorder}>
							<Text style={style.availableBalance}>
								Available Balance
							</Text>
							<BoldText style={style.balance}>559.90</BoldText>
							<BoldText style={style.currency}>AED</BoldText>
						</View>
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
						source={require('../../../assets/app/images/payment/withdraw.png')}
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
		borderWidth: 20,
		borderColor: '#2E70E6',
		borderRadius: Platform.OS === 'ios' ? 50 : 270 / 2,
		height: 270,
		width: 270,
		justifyContent: 'center',
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
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
		borderTopColor: 'rgba(150,150,150,.2)',
		borderTopWidth: 1,
	},
	label: {
		fontSize: 16,
		color: '#000F34',
	},
	textInput: {
		fontSize: 14,
		color: '#5F6A84',
	},
	image: {
		height: 50,
		width: 338,
		marginTop: 20,
		resizeMode: 'contain',
		alignSelf: 'center',
	},
})

export default _ManageBankAccount
