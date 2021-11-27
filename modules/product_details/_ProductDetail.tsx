import React, { FC } from 'react'
import { Platform, StyleSheet } from 'react-native'
import Container from '../../components/Layout'
import { BoldText, Text, View } from '../../components/Themed'
import TitleBar from '../../components/TitleBar'
import PhotoComponent from './PhotoComponent'

type Props = {}

const _ProductDetail: FC<Props> = ({ route }: any) => {
	const { data } = route.params

	const style = StyleSheet.create({
		title: {
			marginLeft: '5%',

			fontSize: 21,
			marginTop: 10
		},
		subtitle: {
			color: '#7c7c7c',
			marginLeft: '5%',
			fontSize: 16,
			marginTop: 5
		},
		price: {
			marginLeft: '5%',

			fontSize: 18,
			marginTop: 15
		},
		discounted: {
			marginLeft: '5%',
			fontSize: 18,
			marginTop: 15,
			color: 'gray',
			textDecorationLine: 'line-through',
			textDecorationStyle: 'solid'
		},
		descriptionTitle: {
			marginLeft: '5%',

			fontSize: 16,
			marginTop: 30
		},
		description: {
			color: '#7c7c7c',
			marginHorizontal: '5%',
			fontSize: 16,
			marginTop: 10,
			textAlign: 'justify'
		}
	})

	return (
		<Container>
			<TitleBar title="Product Details" />
			<PhotoComponent data={data} />
			<BoldText style={style.title}>{data.product}</BoldText>
			<Text style={style.subtitle}>Unisex basketball shoes</Text>
			<View style={{ flexDirection: 'row' }}>
				<BoldText style={style.price}>$ 74</BoldText>
				<Text style={style.discounted}>$ 74</Text>
			</View>
			<BoldText style={style.descriptionTitle}>Description</BoldText>
			<Text style={style.description}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
				provident quas dolorum praesentium voluptatem aperiam, fugiat
				animi voluptates officia ut, velit hic! Distinctio accusantium
				praesentium dolor dolore sunt molestias quidem?
			</Text>
		</Container>
	)
}

export default _ProductDetail
