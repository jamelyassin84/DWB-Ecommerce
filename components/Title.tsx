import React, { FC } from 'react'
import { Text } from './Themed'

type Props = {
	text: string
}

const Title: FC<Props> = (props) => {
	return <Text style={{ fontSize: 16, fontWeight: '500' }}>{props.text}</Text>
}

export default Title
