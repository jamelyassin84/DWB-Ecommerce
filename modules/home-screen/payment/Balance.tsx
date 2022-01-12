import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { BoldText, Text } from '../../../components/overrides/Themed'

type Props = {}

const Balance: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<View>
			<View style={style.imageContainer}>
				<Image
					source={require('../../../assets/app/images/payment/wallet_balance.png')}
					style={style.image}
				/>
			</View>
			<View style={style.anotherContainer}>
				<View style={{ paddingTop: 17 }}>
					<Text style={style.walletBalance}>Wallet balance</Text>
					<BoldText style={style.balance}>AED 59.90</BoldText>
				</View>
				<View>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('_ManageBankAccount')
						}
						style={style.button}>
						<Image
							source={require('../../../assets/app/images/payment/withdraw-button.png')}
							style={style.buttonImage}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	imageContainer: { position: 'relative', marginTop: -40, marginBottom: -20 },
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'contain',
		alignSelf: 'center',
	},
	anotherContainer: {
		flexDirection: 'row',
		paddingHorizontal: 34,
		paddingVertical: 19,
		position: 'absolute',
	},
	walletBalance: {
		color: '#E9EBF0',
		fontSize: 16,
	},
	balance: {
		color: 'white',
		fontSize: 30,
	},
	button: {
		width: 100,
		height: 36,
		marginLeft: 43,
		marginTop: 20,
	},
	buttonImage: {
		width: 100,
		height: 36,
		resizeMode: 'contain',
	},
})

export default Balance
