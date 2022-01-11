import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import { BoldText, View } from '../../components/overrides/Themed'
import HeaderWithBack from '../../components/app/HeaderWithBack'
import Container from '../../components/app/Layout'
import VerificationInput from '../../components/forms/VerificationInput'
import ErrorText from '../../components/forms/ErrorText'

type Props = {}

const EnterVerificationCode: FC<Props> = ({ route }: any) => {
	const { token } = route.params
	const navigation = useNavigation()

	const [code1, setCode1] = React.useState<any>()
	const [code2, setCode2] = React.useState<any>()
	const [code3, setCode3] = React.useState<any>()
	const [code4, setCode4] = React.useState<any>()

	// FOCUS
	const [code1Focus, setCode1Focus] = React.useState<any>()
	const [code2Focus, setCode2Focus] = React.useState<any>()
	const [code3Focus, setCode3Focus] = React.useState<any>()
	const [code4Focus, setCode4Focus] = React.useState<any>()

	// ERROR
	const [codeError, setCodeError] = React.useState<boolean>(false)

	const sendCode = (code4: number) => {
		setCodeError(false)
		let code = [code1, code2, code3, code4].join('')

		new APIService(API.Code)
			.store({ verification_code: code }, false, token)
			.then(async (data: any) => {
				navigation.navigate('Step1')
			})
			.catch(() => {
				setCodeError(true)
			})
	}

	const removeFocus = () => {
		setCode1Focus(false)
		setCode2Focus(false)
		setCode3Focus(false)
		setCode4Focus(false)
	}

	return (
		<Container>
			<HeaderWithBack />
			<BoldText
				style={{
					fontSize: 20,
					alignSelf: 'center',
					marginTop: 39,
					textAlign: 'center',
					marginBottom: 12,
				}}>
				Enter verification code
			</BoldText>
			<Text
				style={{
					color: '#6F7D8F',
					alignSelf: 'center',
					paddingHorizontal: 60,
					textAlign: 'center',
					fontSize: 15,
					marginBottom: 64,
				}}>
				We sent you a verification code via SMS.
			</Text>

			<View
				style={{
					flexDirection: 'row',
					alignSelf: 'center',
				}}>
				<VerificationInput
					focus={code1Focus}
					text={(value: number) => {
						removeFocus()
						setCode1(value)
						setCode2Focus(true)
					}}
				/>
				<VerificationInput
					focus={code2Focus}
					text={(value: number) => {
						removeFocus()
						setCode2(value)
						setCode3Focus(true)
					}}
				/>
				<VerificationInput
					focus={code3Focus}
					text={(value: number) => {
						removeFocus()
						setCode3(value)
						setCode4Focus(true)
					}}
				/>

				<VerificationInput
					focus={code4Focus}
					text={(value: number) => {
						removeFocus()
						sendCode(value)
					}}
				/>
			</View>

			<View style={{ alignItems: 'center' }}>
				<ErrorText
					true={true}
					text="Your verification code is incorrect"
				/>
			</View>

			<View
				style={{
					flexDirection: 'row',
					alignSelf: 'center',
					position: 'absolute',
					top: '50%',
				}}>
				<Text
					style={{
						color: '#6F7D8F',
						alignSelf: 'center',
						paddingTop: 12,
						textAlign: 'center',
						fontSize: 16,
						marginRight: 16,
					}}>
					Didn’t receive it?
				</Text>
				<TouchableOpacity onPress={() => sendCode(code4)}>
					<BoldText
						style={{
							color: '#2E70E6',
							alignSelf: 'center',
							paddingTop: 12,
							textAlign: 'center',
							fontSize: 16,
						}}>
						Click here
					</BoldText>
				</TouchableOpacity>
			</View>
		</Container>
	)
}

export default EnterVerificationCode
