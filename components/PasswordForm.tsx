import React, { FC } from 'react'
import {
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import { Text } from './Themed'

type Props = {
	label: string
	placeholder?: string
}

const PasswordForm: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		wrapper: {
			paddingVertical: 5
		},
		label: {
			fontSize: 14,
			fontWeight: '600',
			color: '#757575',
			paddingHorizontal: 20
		},
		input: {
			width: '90%',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: 'rgba(150,150,150,.4)',
			paddingHorizontal: 10,
			paddingVertical: 15,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center'
		},
		hideIcon: {
			alignSelf: 'flex-end',
			right: 35,
			transform: [{ translateY: 44 }],
			position: 'absolute'
		}
	})

	return (
		<View style={styles.wrapper}>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput secureTextEntry={true} style={styles.input} />
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
