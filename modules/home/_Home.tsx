import React, { FC } from 'react'
import { Text } from 'react-native'
import HomeLayout from '../../components/HomeLayout'
import Container from '../../components/Layout'

type Props = {}

const _Home: FC<Props> = (props) => {
	return (
		<HomeLayout>
			<Text>_Home</Text>
		</HomeLayout>
	)
}

export default _Home
