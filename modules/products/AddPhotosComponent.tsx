import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {}

const AddPhotosComponent: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const styles = StyleSheet.create({
		flexCOntainer: {
			flexDirection: 'row',
			paddingHorizontal: 20,
			paddingTop: 20
		},
		photoLabel: {
			fontSize: 16
		},
		editBtn: {
			marginLeft: 'auto'
		},
		editBtnText: {
			fontSize: 16,
			color: Colors[colorScheme].tint
		},
		imageContainer: {
			padding: 20,
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: 0,
			marginBottom: -10
		},
		image: {
			width: 150,
			height: 200,
			resizeMode: 'contain'
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
					translateX: 55
				},
				{
					translateY: 10
				}
			]
		}
	})

	return (
		<View>
			<View style={styles.flexCOntainer}>
				<Text style={styles.photoLabel}>2 Photos</Text>
				<TouchableOpacity style={styles.editBtn}>
					<Text style={styles.editBtnText}> Cancel</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				style={{ alignSelf: 'center' }}
				nestedScrollEnabled={false}
				data={[
					require('../../assets/app/images/products/shoe1.jpeg'),
					require('../../assets/app/images/products/shoe1.jpeg'),
					require('../../assets/app/images/products/shoe1.jpeg'),
					require('../../assets/app/images/products/shoe1.jpeg'),
					require('../../assets/app/images/products/shoe1.jpeg'),
					require('../../assets/app/images/products/shoe1.jpeg')
				]}
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
								key={item.key}
								source={item}
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
