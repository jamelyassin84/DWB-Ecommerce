import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import { BoldText, Text } from '../overrides/Themed'
type Props = {
	text: string
	image: string | any
	callback: Function
}

const SocialButtons: FC<Props> = (props) => {
	const colorScheme = useColorScheme()
	const styles = StyleSheet.create({
		button: {
			width: '90%',
			borderRadius: 10,
			flexDirection: 'row',
			alignItems: 'center',
			borderWidth: 1,
			borderColor: '#CAD0DB',
			paddingHorizontal: 20,
			paddingVertical: 12,
			alignSelf: 'center',
		},
		imageContainer: {},
		image: { width: 25, height: 25, resizeMode: 'contain' },
		text: { fontSize: 16, flex: 1, textAlign: 'center' },
	})

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.callback()}>
			<Image style={styles.image} source={props.image} />
			<BoldText style={styles.text}>{props.text}</BoldText>
		</TouchableOpacity>
	)
}

export default SocialButtons
