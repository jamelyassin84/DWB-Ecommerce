import React, { FC } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

type Props = {
	focus?: boolean
	onSubmitEditing?: Function
	value?: string
	text: Function
}

const VerificationInput: FC<Props> = (props) => {
	const [isFocused, setIsFocused] = React.useState(false)

	const ref: any = React.useRef()

	React.useEffect(() => {
		if (props.focus === true) {
			return ref.current.focus()
		}
		ref.current.blur()
	}, [props.focus])

	return (
		<View>
			<TextInput
				ref={ref}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChangeText={(text) => {
					props.text(text)
				}}
				onSubmitEditing={() => {
					props.onSubmitEditing ? props.onSubmitEditing() : void 0
				}}
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					borderWidth: 1,
					borderColor: '#99A8BC',
					marginHorizontal: 14,
					marginVertical: 18,
					height: 58,
					width: 54,
					borderRadius: 15,
					textAlign: 'center',
					fontFamily: 'Montserrat-bold',
					fontSize: 24,
					backgroundColor: 'white',
				}}
				placeholderTextColor="#2E70E6"
				keyboardType="phone-pad"
			/>
		</View>
	)
}

export default VerificationInput
