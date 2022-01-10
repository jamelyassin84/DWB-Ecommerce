import React, { FC } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../components/app/Layout'
import { BoldText, Text, View } from '../../components/overrides/Themed'
import TitleBar from '../../components/app/TitleBar'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Step2: FC<Props> = (props) => {
	const navigation = useNavigation()

	return (
		<Container>
			<TitleBar title="Step 2" />
			<LinearGradient
				colors={['#E9F8FF', '#54C1E9']}
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
				<BoldText style={style.title}>Upload your product</BoldText>

				<Image
					style={style.image}
					source={require('../../assets/app/images/steps/2.png')}
				/>

				<View style={style.stepContainer}>
					<View style={style.step} />
					<View style={style.step} />
					<View style={style.active} />
				</View>

				<View style={style.buttonContainer}>
					<TouchableOpacity
						onPress={() => navigation.navigate('Root')}
						style={[style.button, { marginRight: '80%' }]}>
						<BoldText style={style.buttonText}>Skip</BoldText>
					</TouchableOpacity>
					<TouchableOpacity
						style={style.button}
						onPress={() => navigation.navigate('Step3')}>
						<BoldText style={style.buttonText}>Next</BoldText>
					</TouchableOpacity>
				</View>
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
	image: {
		resizeMode: 'contain',
		height: 540,
	},
	stepContainer: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	step: {
		marginRight: 7,
		height: 7,
		width: 7,
		backgroundColor: '#727788',
		borderRadius: 50,
	},
	active: {
		marginRight: 7,
		height: 7,
		width: 7,
		backgroundColor: '#7589AE',
		borderRadius: 50,
	},
	buttonContainer: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
		marginTop: 20,
		width: Dimensions.get('screen').width,
		padding: 20,
	},
	button: {},
	buttonText: {},
})

export default Step2
