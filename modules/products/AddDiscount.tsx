import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import Form from '../../components/Form'
import { BoldText, Text, View } from '../../components/Themed'
import useColorScheme from '../../hooks/useColorScheme'

type Props = {}

const AddDiscount: FC<Props> = (props) => {
	const colorScheme = useColorScheme()

	const styles = StyleSheet.create({
		container: {
			flexDirection: 'row',
		},
		checkContainer: {
			flexDirection: 'row',
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
		formContainer: {
			flex: 1.3,
			marginRight: 10,
		},
	})
	return (
		<View style={styles.container}>
			<View style={styles.checkContainer}>
				<AntDesign name="checkcircle" size={24} color="#00B523" />
				<BoldText style={{ marginLeft: 10 }}>Add Discount</BoldText>
			</View>
			<View style={styles.formContainer}>
				<Form
					onSubmitEditing={() => {
						// removeFocus()
						// setPasswordFocus(true)
					}}
					text={(value: string) => {
						// stEmail(value)
					}}
					label="Discounted Price (AED)"
					error={false}
					numeric
				/>
			</View>
		</View>
	)
}

export default AddDiscount
