import React, { FC } from 'react'
import { Text } from 'react-native'
import Container from '../../components/Layout'
import TitleBar from '../../components/TitleBar'

type Props = {}

const _ProductDetail: FC<Props> = ({ route }: any) => {
	return (
		<Container>
			<TitleBar title="Product Details" />
		</Container>
	)
}

export default _ProductDetail
