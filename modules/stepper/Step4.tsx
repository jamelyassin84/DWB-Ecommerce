import React, { FC } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../components/app/Layout'
import { BoldText, View } from '../../components/overrides/Themed'
import TitleBar from '../../components/app/TitleBar'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Step4: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<Container>
			<TitleBar title="" />
			<LinearGradient
				colors={['#F5F5F5', '#F5F5F5']}
				style={{
					flex: 1,
					position: 'absolute',
					width: Dimensions.get('screen').width,
					height: Dimensions.get('screen').height,
					zIndex: -1,
					marginTop: 50,
				}}
			/>
			<View style={style.container}>
				<BoldText style={style.title}>Congratulation!</BoldText>
				<BoldText style={style.description}>
					You can now share your product through all social media
					platform!
				</BoldText>

				<Image
					style={style.image}
					source={require('../../assets/app/images/steps/4.png')}
				/>

				<TouchableOpacity
					style={style.button}
					onPress={() => navigation.navigate('Root')}>
					<BoldText style={style.buttonText}>
						Go To Dashboard
					</BoldText>
				</TouchableOpacity>
			</View>
		</Container>
	)
}
const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	title: {
		fontSize: 20,
		marginVertical: 21,
	},
	description: {
		fontSize: 16,
		color: '#5F6A84',
		width: 336,
		textAlign: 'center',
	},
	image: {
		resizeMode: 'contain',
		height: 440,
	},

	button: {
		width: Dimensions.get('screen').width - 25 * 2,
		backgroundColor: '#2E70E6',
		height: 50,
		justifyContent: 'center',
		borderRadius: 15,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
})

export default Step4
