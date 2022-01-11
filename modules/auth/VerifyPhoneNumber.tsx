import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Image, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BoldText } from '../../components/overrides/Themed'
import { APIService } from '../../api/base.api'
import { API } from '../../api/api.routes'
import Container from '../../components/app/Layout'
import EnterMobileNumberForm from '../../components/forms/EnterMobileNumberForm'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const VerifyPhoneNumber: FC<Props> = ({ route }: any) => {
	const navigation = useNavigation()

	const { seller, user, token } = route.params
	const [phone, setPhone] = React.useState('')

	// FUNCTIONS
	const verify = () => {
		new APIService(API.Verify)
			.store({ phone: phone }, false, token)
			.then(async (data: any) => {
				await AsyncStorage.setItem('user', JSON.stringify(data.user))
				await AsyncStorage.setItem(
					'seller',
					JSON.stringify(data.seller),
				)
				navigation.navigate('EnterVerificationCode', {
					token: token,
				})
			})
			.catch(() => {
				return Alert.alert(
					'Internal Server Error',
					'Please try again later',
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
				)
			})
	}

	//Buttons
	const [buttonIsDisabled, setButtonIsDisabled] =
		React.useState<boolean>(false)

	return (
		<Container>
			<BoldText style={style.verify}>Verify your mobile</BoldText>
			<Text style={style.desc}>
				We will send a text to verify your number. No fees will apply.
			</Text>

			<EnterMobileNumberForm text={(text: string) => setPhone(text)} />

			<TouchableOpacity
				disabled={buttonIsDisabled}
				style={{ marginTop: 120 }}
				onPress={() => verify()}>
				<Image
					style={{
						height: 50,
						width: '87%',
						alignSelf: 'center',
					}}
					source={require('../../assets/app/images/Verification/verify_button.png')}
				/>
			</TouchableOpacity>
		</Container>
	)
}
const style = StyleSheet.create({
	verify: {
		fontSize: 20,
		alignSelf: 'center',
		textAlign: 'center',
		marginTop: 50,
	},
	desc: {
		color: '#6F7D8F',
		alignSelf: 'center',
		paddingTop: 12,
		paddingHorizontal: 60,
		textAlign: 'center',
		fontSize: 15,
	},
	disabled: {
		backgroundColor: '#B7CDF7',
	},
	focus: {
		borderColor: '#D3E1FA',
		borderWidth: 5,
		borderRadius: 15,
	},
})

export default VerifyPhoneNumber
