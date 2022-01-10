import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import {
	FlatList,
	Image,
	LogBox,
	Platform,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { BoldText, Text, View } from '../../../components/overrides/Themed'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

type Props = {
	photos: any[]
	onClear: Function
}

const AddPhotosComponent: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	React.useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
		LogBox.ignoreLogs(['VirtualizedLists:'])
	}, [])

	const styles = StyleSheet.create({
		flexCOntainer: {
			flexDirection: 'row',
			paddingHorizontal: 20,
			paddingTop: 20,
			marginBottom: 10,
		},
		photoLabel: {
			fontSize: 16,
			marginTop: 10,
		},
		editBtn: {
			marginLeft: 'auto',
			marginTop: 10,
		},
		editBtnText: {
			fontSize: 16,
			color: Colors[colorScheme].tint,
		},
		imageContainer: {
			padding: 30,
			paddingHorizontal: 5,
			paddingBottom: 0,
			borderRadius: 30,
		},
		image: {
			width: 160,
			height: Platform.OS === 'ios' ? 110 : 150,
			resizeMode: 'stretch',
			borderRadius: 10,
			borderWidth: 1,
			borderColor: 'rgba(150,150,150,.2)',
		},
		closeButton: {
			borderRadius: 50,
			height: 20,
			width: 20,
			backgroundColor: '#E73A54',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: -30,
			zIndex: 9,
			transform: [
				{
					translateX: 135,
				},
			],
		},
	})

	return (
		<View>
			<View style={styles.flexCOntainer}>
				<BoldText style={styles.photoLabel}>2 Photos</BoldText>
				<TouchableOpacity
					style={styles.editBtn}
					onPress={() => props.onClear()}>
					<BoldText style={styles.editBtnText}> Clear</BoldText>
				</TouchableOpacity>
			</View>

			<FlatList
				style={{ alignSelf: 'center' }}
				nestedScrollEnabled={true}
				data={props.photos}
				renderItem={({ item, index }) => {
					return (
						<View style={styles.imageContainer}>
							<TouchableOpacity style={styles.closeButton}>
								<AntDesign
									name="close"
									size={16}
									color="white"
								/>
							</TouchableOpacity>
							<Image
								style={styles.image}
								key={index}
								source={{ uri: item }}
							/>
						</View>
					)
				}}
				numColumns={2}
			/>
		</View>
	)
}

export default AddPhotosComponent
