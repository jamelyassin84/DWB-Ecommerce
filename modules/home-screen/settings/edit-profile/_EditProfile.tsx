import React, { FC } from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../../../components/app/Layout'
import TitleBar from '../../../../components/app/TitleBar'
import Form from '../../../../components/forms/Form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { User } from '../../../../models/User'
import { APIService } from '../../../../api/base.api'
import { API } from '../../../../api/api.routes'
import { AxiosError } from 'axios'

type Props = {}

const _EditProfile: FC<Props> = (props) => {
	// VALUES
	const [token, setToken] = React.useState<string | any>('')
	const [name, setName] = React.useState<string>('')
	const [email, setEmail] = React.useState<string>('')
	const [phone, setPhone] = React.useState<string>('')

	// FUNCTIONS
	React.useEffect(() => {
		fetchToken()
	}, [])

	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		let userData: any = await AsyncStorage.getItem('user')
		userData = JSON.parse(userData)
		setToken(token)
		setValues(userData)
	}

	const setValues = (userData: User) => {
		setName(userData.name)
		setEmail(userData.email)
		setPhone(userData.phone || '')
	}

	const updateAccount = (): void => {
		removeFocus()
		setButtonIsDisabled(true)
		const data: any = {
			name: name,
			email: email,
			phone: phone,
		}
		new APIService(API.ChangeDetails)
			.store(data, false, token)
			.then((data: any) => {
				setButtonIsDisabled(false)
				Alert.alert(
					'Account Updated.',
					'Your Account has been successfully updated',
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
				)
				setName(data.name)
				setEmail(data.email)
				setPhone(data.phone)
			})
			.catch((reason: AxiosError<{ additionalInfo: string }>) => {
				setButtonIsDisabled(false)
				if (reason.response!.status === 500) {
					return Alert.alert(
						'Internal Server Error',
						'Please try again later',
						[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
					)
				}
				if (reason.response!.status === 401) {
					return Alert.alert(
						'Account not found',
						'This account has been moved or deleted',
						[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
					)
				}
			})
	}

	const removeFocus = () => {
		setNameFocus(false)
		setEmailFocus(false)
		setPhoneFocus(false)
	}

	//FOCUS
	const [nameFocus, setNameFocus] = React.useState<boolean>(false)
	const [emailFocus, setEmailFocus] = React.useState<boolean>(false)
	const [phoneFocus, setPhoneFocus] = React.useState<boolean>(false)

	//BUTTONS
	const [submitButtonFocus, setSubmitButtonFocus] =
		React.useState<boolean>(false)
	const [buttonIsDisabled, setButtonIsDisabled] =
		React.useState<boolean>(false)

	return (
		<Container>
			<TitleBar title="Edit Profile" />
			<ScrollView style={{ paddingTop: 36 }}>
				<Form
					value={name}
					focus={nameFocus}
					onSubmitEditing={() => {
						removeFocus()
						setEmailFocus(true)
					}}
					text={(value: string) => {
						setName(value)
					}}
					label="Store Name"
					error={false}
				/>

				<Form
					value={email}
					focus={emailFocus}
					onSubmitEditing={() => {
						removeFocus()
						setPhoneFocus(true)
					}}
					text={(value: string) => {
						setEmail(value)
					}}
					label="Email"
					error={false}
				/>

				<Form
					value={phone}
					focus={phoneFocus}
					onSubmitEditing={() => {
						removeFocus()
						setSubmitButtonFocus(true)
					}}
					text={(value: string) => {
						setPhone(value)
					}}
					label="Mobile"
					error={false}
				/>

				<TouchableOpacity
					onPress={() => updateAccount()}
					disabled={buttonIsDisabled}
					style={[
						{
							marginTop: 50,
							width: Dimensions.get('screen').width - 23 * 2,
							alignSelf: 'center',
						},
						buttonIsDisabled ? style.disabled : {},
						submitButtonFocus ? style.focus : {},
					]}>
					<Image
						style={{
							height: 50,
							width: Dimensions.get('screen').width - 28 * 2,
						}}
						source={require('../../../../assets/app/images/edit-profile/update.png')}
					/>
				</TouchableOpacity>
			</ScrollView>
		</Container>
	)
}
const style = StyleSheet.create({
	disabled: {
		backgroundColor: '#B7CDF7',
	},
	focus: {
		borderColor: '#D3E1FA',
		borderWidth: 5,
		borderRadius: 15,
	},
})

export default _EditProfile
