import React, { FC } from 'react'
import { BoldText, Text } from './Themed'

type Props = {
	text: string
}

const Title: FC<Props> = (props) => {
	return (
		<BoldText
			style={{
				fontSize: 16,
				marginBottom: 10,
				color: '#000F34'
			}}>
			{props.text}
		</BoldText>
	)
}

export default Title
