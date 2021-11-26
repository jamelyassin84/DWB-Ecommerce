import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import Navigation from '../../navigation'

type Props = {}

const FloatingButton: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('AddProduct')}
			style={{
				position: 'absolute',
				backgroundColor: Colors[colorScheme].tint,
				borderRadius: 50,
				padding: 14,
				zIndex: 9,
				right: 20,
				top: '70.5%',
				shadowColor: Colors[colorScheme].tint,
				shadowOffset: {
					width: 0,
					height: 0
				},
				shadowOpacity: 0.59,
				shadowRadius: 10.65,
				elevation: 7
			}}>
			<Feather name="plus" size={28} color="white" />
		</TouchableOpacity>
	)
}

export default FloatingButton
