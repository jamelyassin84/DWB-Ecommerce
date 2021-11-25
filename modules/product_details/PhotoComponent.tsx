import React, { FC } from 'react'
import { Text } from 'react-native'
import Container from '../../components/Layout'

type Props = {}

const PhotoComponent: FC<Props> = (props) => {
	return (
		<Container>
			<Text>PhotoComponent</Text>
		</Container>
	)
}

export default PhotoComponent
