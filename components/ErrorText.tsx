import React, { FC } from 'react'
import { Text, View } from './Themed'

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
						paddingHorizontal: 20,
						color: '#E73553',
						marginTop: -10,
						marginBottom: 20
					}}>
					{props.text}
				</Text>
			)}
		</View>
	)
}

export default ErrorText
