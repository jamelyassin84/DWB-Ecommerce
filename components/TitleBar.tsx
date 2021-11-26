import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { Text, View } from './Themed'

type Props = {
	title: string
}

const TitleBar: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
			width: '100%',
			paddingHorizontal: 20,
			paddingVertical: 10
		},
		text: {
			textAlign: 'center',
			alignSelf: 'center',
			marginLeft: 'auto',
			marginRight: 'auto',
			fontWeight: 'bold',
			fontSize: 20,
			transform: [
				{
					translateX: -10
				}
			]
		}
	})
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Ionicons
					name="arrow-back-sharp"
					size={24}
					color={Colors[colorScheme].tabIconDefault}
				/>
			</TouchableOpacity>
			<Text style={styles.text}>{props.title}</Text>
		</View>
	)
}

export default TitleBar
