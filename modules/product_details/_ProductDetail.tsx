import React, { FC } from 'react'
import {
	StyleSheet,
	TouchableOpacity,
	Image,
	Platform,
	Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Container from '../../components/Layout'
import { BoldText, Text, View } from '../../components/Themed'
import TitleBar from '../../components/TitleBar'
import { currencyFormat } from '../../constants/Helpers'
import PhotoComponent from './PhotoComponent'
import * as Clipboard from 'expo-clipboard'

type Props = {}

const _ProductDetail: FC<Props> = ({ route }: any) => {
	const { data } = route.params

	const style = StyleSheet.create({
		title: {
			marginLeft: '5%',

			fontSize: 21,
			marginTop: 10,
		},
		subtitle: {
			color: '#7c7c7c',
			marginLeft: '5%',
			fontSize: 16,
			marginTop: 5,
		},
		price: {
			marginLeft: '5%',

			fontSize: 18,
			marginTop: 15,
		},
		discounted: {
			marginLeft: '5%',
			fontSize: 18,
			marginTop: 15,
			color: 'gray',
			textDecorationLine: 'line-through',
			textDecorationStyle: 'solid',
		},
		descriptionTitle: {
			marginLeft: '5%',

			fontSize: 16,
			marginTop: 30,
		},
		description: {
			color: '#7c7c7c',
			marginHorizontal: '5%',
			fontSize: 16,
			marginTop: 10,
			textAlign: 'justify',
			marginBottom: 57,
		},
		button: {
			width: '90%',
			height: 50,
			alignSelf: 'center',
			marginBottom: Platform.OS === 'android' ? 80 : 0,
		},
	})

	return (
		<Container>
			<TitleBar title="Product Details" />
			<ScrollView>
				<PhotoComponent data={data} />
				<BoldText style={style.title}>{data.product_name}</BoldText>
				<Text style={style.subtitle}>{data.brief_description}</Text>
				<View style={{ flexDirection: 'row' }}>
					<BoldText style={style.price}>
						{currencyFormat(data.price, data.currency)}
					</BoldText>
					{data.discounted_price && (
						<Text style={style.discounted}>
							{currencyFormat(
								data.discounted_price,
								data.currency,
							)}
						</Text>
					)}
				</View>
				<BoldText style={style.descriptionTitle}>Description</BoldText>
				<Text style={style.description}>{data.description}</Text>

				<TouchableOpacity
					onPress={() => {
						Clipboard.setString(data.slug)
						Alert.alert(
							'Rive',
							`Your product link is: ${'\n \n'} https://rive.ae/products/${
								data.slug
							}`,
							[
								{
									text: 'Cancel',
									style: 'cancel',
								},
								{ text: 'Copy' },
							],
						)
					}}>
					<Image
						style={style.button}
						source={require('../../assets/app/images/products/copy_link.png')}
					/>
				</TouchableOpacity>
			</ScrollView>
		</Container>
	)
}

export default _ProductDetail
