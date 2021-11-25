import React, { FC } from 'react'
import { Text } from 'react-native'
import Container from '../../components/Layout'

type Props = {}

const ProductComponent: FC<Props> = (props) => {
	return (
		<Container>
			<Text>ProductComponent</Text>
		</Container>
	)
}

export default ProductComponent
