import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import { BoldText, Text, View } from '../overrides/Themed'

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
			paddingVertical: 10,
		},
		text: {
			textAlign: 'center',
			alignSelf: 'center',
			marginLeft: 'auto',
			marginRight: 'auto',
			fontSize: 18,
			transform: [
				{
					translateX: -10,
				},
			],
		},
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
			<BoldText style={styles.text}>{props.title}</BoldText>
		</View>
	)
}

export default TitleBar
