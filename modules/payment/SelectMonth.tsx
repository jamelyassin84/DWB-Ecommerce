import { Entypo } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Container from '../../components/Layout'
import { View } from '../../components/Themed'

type Props = {}

const SelectMonth: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		month: {
			fontSize: 18,
			color: '#5F6A84',
			textAlign: 'center',
			marginTop: 5,
			fontWeight: '500'
		},
		balanceContainer: {
			width: '50%',
			alignItems: 'center',
			alignSelf: 'center',
			flexDirection: 'row',
			marginTop: 10,
			justifyContent: 'space-between'
		},
		balance: {
			fontSize: 27,
			fontWeight: '600'
		}
	})

	return (
		<View>
			<Text style={styles.month}>May</Text>
			<View style={styles.balanceContainer}>
				<TouchableOpacity>
					<Entypo
						name="chevron-small-left"
						size={24}
						color="#5F6A84"
					/>
				</TouchableOpacity>

				<Text style={styles.balance}>$ 1059.90</Text>

				<TouchableOpacity>
					<Entypo
						name="chevron-small-right"
						size={24}
						color="#5F6A84"
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default SelectMonth
