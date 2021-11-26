import React, { FC } from 'react'
import { Text } from './Themed'

type Props = {
	text: string
}

const Title: FC<Props> = (props) => {
	return (
		<Text
			style={{
				fontSize: 16,
				fontWeight: 'bold',
				marginBottom: 10
			}}>
			{props.text}
		</Text>
	)
}

export default Title
