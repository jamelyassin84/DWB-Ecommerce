import React, { FC } from 'react'
import { Alert, Dimensions, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { API } from '../../../../api/api.routes'
import { APIService } from '../../../../api/base.api'
import { BoldText } from '../../../../components/overrides/Themed'
import { AxiosError } from 'axios'
import Container from '../../../../components/app/Layout'
import TitleBar from '../../../../components/app/TitleBar'
import ErrorText from '../../../../components/forms/ErrorText'
import PasswordForm from '../../../../components/forms/PasswordForm'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const _ChangePassword: FC<Props> = (props) => {
	// Values
	const [token, setToken] = React.useState<string | any>('')
	const [oldPassword, setOldPassword] = React.useState<string>('')
	const [newPassword, setNewPassword] = React.useState<string>('')
	const [confirmPassword, setConfirmPassword] = React.useState<string>('')

	// Errors
	const [oldPasswordError, setOldPasswordError] =
		React.useState<boolean>(false)
	const [newPasswordError, setNewPasswordError] =
		React.useState<boolean>(false)
	const [confirmPasswordError, setConfirmPasswordError] =
		React.useState<boolean>(false)

	// Functions
	React.useEffect(() => {
		fetchToken()
	}, [])

	const fetchToken = async () => {
		const token = await AsyncStorage.getItem('token')
		setToken(token)
	}

	const updatePassword = () => {
		removeFocus()
		removeErrors()
		setButtonIsDisabled(true)
		if (newPassword !== confirmPassword) {
			setButtonIsDisabled(false)
			return setConfirmPasswordError(true)
		}
		const data: any = {
			oldPassword: oldPassword,
			newPassword: newPassword,
			confirmPassword: confirmPassword,
		}
		for (let key in data) {
			if (data[key] === '') {
				Alert.alert(
					'Invalid Operation',
					'One or more fields should not be empty',
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
				)
				setButtonIsDisabled(false)
				return removeErrors()
			}
		}
		new APIService(API.ChangePassword)
			.store(data, false, token)
			.then(() => {
				setButtonIsDisabled(false)
				Alert.alert(
					'Account Updated.',
					'Your password has been successfully changed.',
					[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
				)
			})
			.catch((reason: AxiosError<{ additionalInfo: string }>) => {
				setButtonIsDisabled(false)

				if (reason.response!.status === 401) {
					return Alert.alert(
						'Account not found',
						'This account has been moved or deleted',
						[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
					)
				}
				if (reason.response!.status === 300) {
					return setOldPasswordError(true)
				}
				if (reason.response!.status === 500) {
					return Alert.alert(
						'Internal Server Error',
						'Please try again later',
						[{ text: 'Cancel', style: 'cancel' }, { text: 'OK' }],
					)
				}
				setNewPasswordError(true)
			})
	}
	const removeErrors = (): void => {
		setOldPasswordError(false)
		setNewPasswordError(false)
		setConfirmPasswordError(false)
	}

	const removeFocus = () => {
		setOldPasswordFocus(false)
		setNewPasswordFocus(false)
		setConfirmPasswordFocus(false)
		setSubmitButtonFocus(false)
	}

	const [oldPasswordFocus, setOldPasswordFocus] =
		React.useState<boolean>(false)
	const [newPasswordFocus, setNewPasswordFocus] =
		React.useState<boolean>(false)
	const [confirmPasswordFocus, setConfirmPasswordFocus] =
		React.useState<boolean>(false)

	//Buttons
	const [submitButtonFocus, setSubmitButtonFocus] =
		React.useState<boolean>(false)
	const [buttonIsDisabled, setButtonIsDisabled] =
		React.useState<boolean>(false)

	return (
		<Container>
			<TitleBar title="Change Password" />
			<ScrollView style={{ paddingVertical: 36 }}>
				<BoldText style={style.label}>Email</BoldText>
				<BoldText style={style.value}>johndoe@mail.com</BoldText>
				<PasswordForm
					focus={oldPasswordFocus}
					onSubmitEditing={() => {
						removeFocus()
						setNewPasswordFocus(true)
					}}
					text={(value: string) => {
						setOldPassword(value)
					}}
					label="Old Password"
					error={oldPasswordError}
				/>
				<ErrorText
					true={oldPasswordError}
					text="Old password is incorrect"
				/>

				<PasswordForm
					focus={newPasswordFocus}
					onSubmitEditing={() => {
						removeFocus()
						setConfirmPasswordFocus(true)
					}}
					text={(value: string) => {
						setNewPassword(value)
					}}
					label="New Password"
					error={newPasswordError}
				/>
				<ErrorText
					true={newPasswordError}
					text="Password must have minimum of 8 characters, contain at least 1
					uppercase, lowercase and special character."
				/>

				<PasswordForm
					focus={confirmPasswordFocus}
					onSubmitEditing={() => {
						removeFocus()
						setSubmitButtonFocus(true)
					}}
					text={(value: string) => {
						setConfirmPassword(value)
					}}
					label="Confirm Password"
					error={confirmPasswordError}
				/>
				<ErrorText
					true={confirmPasswordError}
					text="Password does not match"
				/>

				<TouchableOpacity
					disabled={buttonIsDisabled}
					style={[
						{
							marginTop: 50,
							width: Dimensions.get('screen').width - 23 * 2,
							alignSelf: 'center',
						},
						buttonIsDisabled ? style.disabled : {},
						submitButtonFocus ? style.focus : {},
					]}
					onPress={() => updatePassword()}>
					<Image
						style={{
							height: 50,
							width: Dimensions.get('screen').width - 28 * 2,
						}}
						source={require('../../../../assets/app/images/password-reset/save-changes.png')}
					/>
				</TouchableOpacity>
			</ScrollView>
		</Container>
	)
}

const style = StyleSheet.create({
	label: {
		fontSize: 14,
		color: '#5F6A84',
		paddingLeft: 25,
	},
	value: {
		fontSize: 15,
		color: '#000F34',
		paddingLeft: 25,
		marginBottom: 41,
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

export default _ChangePassword
