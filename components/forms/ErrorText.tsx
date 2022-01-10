import React, { FC } from 'react'
import { Text, View } from '../overrides/Themed'

type Props = {
	true: boolean
	text: string
}

const ErrorText: FC<Props> = (props) => {
	return (
		<View>
			{props.true && (
				<Text
					style={{
						paddingHorizontal: 25,
						color: '#E73553',
						marginTop: -10,
						marginBottom: 20,
					}}>
					{props.text}
				</Text>
			)}
		</View>
	)
}

export default ErrorText
