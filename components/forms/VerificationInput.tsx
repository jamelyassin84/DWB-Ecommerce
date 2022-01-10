import React, { FC } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

type Props = {}

const VerificationInput: FC<Props> = (props) => {
	return (
		<View>
			<TextInput
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
					fontFamily: 'Avenir Heavy',
					fontSize: 24,
					backgroundColor: 'white',
				}}
				value="3"
				keyboardType="phone-pad"
			/>
		</View>
	)
}

export default VerificationInput
