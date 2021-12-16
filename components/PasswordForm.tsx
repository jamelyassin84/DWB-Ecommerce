import React, { FC } from 'react'
import {
	Image,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BoldText, Text } from './Themed'

type Props = {
	label: string
	placeholder?: string
	text: Function
}

const PasswordForm: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		wrapper: {
			paddingVertical: 5
		},
		label: {
			fontSize: 14,
			color: '#757575',
			paddingHorizontal: 20
		},
		input: {
			width: '90%',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: 'rgba(150,150,150,.4)',
			paddingHorizontal: 20,
			height: 50,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center',
			fontFamily: 'Montserrat',
			color: Colors[colorScheme].text
		},
		hideIcon: {
			alignSelf: 'flex-end',
			right: 35,
			transform: [{ translateY: Platform.OS === 'ios' ? 46 : 48 }],
			position: 'absolute'
		}
	})

	const [isFocused, setIsFocused] = React.useState(false)

	return (
		<View style={styles.wrapper}>
			<BoldText style={styles.label}>{props.label}</BoldText>
			<TextInput
				{...props}
				style={[
					styles.input,
					isFocused && {
						borderWidth: 2,
						borderColor: Colors[colorScheme].tint
					}
				]}
				placeholder={props.placeholder}
				focusable={true}
				placeholderTextColor={Colors[colorScheme].tabIconDefault}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				selectionColor={Colors[colorScheme].tint}
				secureTextEntry={true}
				onChangeText={(text) => {
					props.text(text)
				}}
			/>
			<TouchableOpacity style={styles.hideIcon} onPress={() => {}}>
				<Image
					source={require('../assets/app/images/auth/hide.png')}
					style={{ width: 20, height: 20, resizeMode: 'contain' }}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default PasswordForm
