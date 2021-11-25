import React, { FC } from 'react'
import { Text } from 'react-native'
import Container from './Layout'

type Props = {}

const TextArea: FC<Props> = (props) => {
	return (
		<Container>
			<Text>TextArea</Text>
		</Container>
	)
}

export default TextArea
