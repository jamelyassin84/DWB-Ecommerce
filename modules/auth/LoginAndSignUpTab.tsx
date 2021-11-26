import React, { FC } from 'react'
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	wantsToLogin: Function
	shouldLogin: boolean
}

const LoginAndSignUpTab: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const styles = StyleSheet.create({
		container: {
			alignItems: 'center'
		},
		wrapper: {
			width: '65%',
			backgroundColor: Colors[colorScheme].tabColor,
			borderRadius: 12,
			flexDirection: 'row',
			alignItems: 'center',
			padding: 5,
			alignSelf: 'center',
			marginVertical: 30,
			marginTop: Platform.OS === 'ios' ? 0 : 30
		},
		button: {
			flex: 1,
			borderRadius: 10,
			justifyContent: 'center',
			alignItems: 'center'
		},
		active: {
			backgroundColor: Colors[colorScheme].background
		},
		text: {
			color: Colors[colorScheme].text,
			fontWeight: '700',
			paddingVertical: 10,
			fontSize: 16
		},
		activeText: {
			color: Colors[colorScheme].tint
		}
	})

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<TouchableOpacity
					style={[
						styles.button,
						!props.shouldLogin ? styles.active : null
					]}
					onPress={() => props.wantsToLogin(false)}>
					<Text
						style={[
							styles.text,
							!props.shouldLogin ? styles.activeText : null
						]}>
						Sign up
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.button,
						props.shouldLogin ? styles.active : null
					]}
					onPress={() => props.wantsToLogin(true)}>
					<Text
						style={[
							styles.text,
							props.shouldLogin ? styles.activeText : null
						]}>
						Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default LoginAndSignUpTab
