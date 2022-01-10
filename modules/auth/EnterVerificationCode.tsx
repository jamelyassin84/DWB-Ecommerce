import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderWithBack from '../../components/app/HeaderWithBack'
import Container from '../../components/app/Layout'
import VerificationInput from '../../components/forms/VerificationInput'
import { BoldText, View } from '../../components/overrides/Themed'

type Props = {}

const EnterVerificationCode: FC<Props> = (props) => {
	const navigation = useNavigation()
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
				<VerificationInput />
				<VerificationInput />
				<VerificationInput />
				<VerificationInput />
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
				<TouchableOpacity>
					<Text
						style={{
							color: 'black',
							alignSelf: 'center',
							paddingTop: 12,
							textAlign: 'center',
							fontSize: 16,
						}}>
						Click here
					</Text>
				</TouchableOpacity>
			</View>
		</Container>
	)
}

export default EnterVerificationCode
