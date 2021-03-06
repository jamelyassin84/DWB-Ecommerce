import React, { FC } from 'react'
import {
	Image,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import { BoldText, Text } from '../overrides/Themed'

type Props = {
	label: string
	placeholder?: string
	text: Function
	error?: boolean
	onSubmitEditing: Function
	focus?: boolean
}

const PasswordForm: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		wrapper: {
			marginBottom: 20,
			paddingHorizontal: 23,
		},
		label: {
			fontSize: 14,
			color: '#5F6A84',
		},
		input: {
			width: '100%',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: '#CAD0DB',
			paddingHorizontal: 20,
			height: 50,
			fontSize: 16,
			marginVertical: 10,
			alignSelf: 'center',
			fontFamily: 'Montserrat',
			color: Colors[colorScheme].text,
			zIndex: -1,
			position: 'relative',
		},
		hideIcon: {
			alignSelf: 'flex-end',
			right: 35,
			transform: [{ translateY: Platform.OS === 'ios' ? 40 : 43 }],
			position: 'absolute',
			zIndex: 9,
		},
	})

	const [isFocused, setIsFocused] = React.useState(false)
	const [showField, setShowField] = React.useState(false)

	const ref: any = React.useRef()

	React.useEffect(() => {
		if (props.focus === true) {
			return ref.current.focus()
		}
		ref.current.blur()
	}, [props.focus])

	return (
		<View style={styles.wrapper}>
			<BoldText style={styles.label}>{props.label}</BoldText>
			<TextInput
				ref={ref}
				onSubmitEditing={() => props.onSubmitEditing()}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholder={props.placeholder}
				focusable={true}
				placeholderTextColor={Colors[colorScheme].tabIconDefault}
				selectionColor={Colors[colorScheme].tint}
				secureTextEntry={!showField ? true : false}
				onChangeText={(text) => {
					props.text(text)
				}}
				style={[
					styles.input,
					props.error
						? { borderColor: '#E73553', borderWidth: 2 }
						: {},
					isFocused && {
						borderWidth: 2,
						borderColor: Colors[colorScheme].tint,
					},
				]}
			/>
			<TouchableOpacity
				style={styles.hideIcon}
				onPress={() =>
					showField ? setShowField(false) : setShowField(true)
				}>
				<Image
					source={
						showField
							? require('../../assets/app/images/auth/show.png')
							: require('../../assets/app/images/auth/unshow.png')
					}
					style={{ width: 20, height: 20, resizeMode: 'contain' }}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default PasswordForm
