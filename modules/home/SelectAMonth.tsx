import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { BoldText, Text, View } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {
	activateBottomSheet: Function
}

const SelectAMonth: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const navigation = useNavigation()

	const styles = StyleSheet.create({
		button: {
			borderRadius: 20,
			borderWidth: 1.5,
			borderColor: 'rgba(150,150,150,.4)',
			flexDirection: 'row',
			alignItems: 'center',
			paddingVertical: 6,
			paddingHorizontal: 12,
			marginLeft: 'auto',
			justifyContent: 'center',
			position: 'relative',
			zIndex: 9,
			marginTop: -7
		},
		iconContainer: {
			justifyContent: 'center'
		},
		icon: {},
		text: {
			fontSize: 14,
			marginRight: 20
		}
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => {
				props.activateBottomSheet()
			}}>
			<BoldText style={styles.text}>August</BoldText>
			<View style={styles.iconContainer}>
				<AntDesign
					name="caretdown"
					size={12}
					color={Colors[colorScheme].tabIconDefault}
				/>
			</View>
		</TouchableOpacity>
	)
}

export default SelectAMonth
