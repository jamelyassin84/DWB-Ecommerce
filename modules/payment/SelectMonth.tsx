import { Entypo } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Container from '../../components/app/Layout'
import { BoldText, View } from '../../components/overrides/Themed'

type Props = {}

const SelectMonth: FC<Props> = (props) => {
	const styles = StyleSheet.create({
		month: {
			fontSize: 18,
			color: '#5F6A84',
			textAlign: 'center',
			marginTop: 5,
		},
		balanceContainer: {
			width: '50%',
			alignItems: 'center',
			alignSelf: 'center',
			flexDirection: 'row',
			marginTop: 10,
			justifyContent: 'space-between',
		},
		balance: {
			fontSize: 27,
		},
	})

	return (
		<View>
			<BoldText style={styles.month}>May</BoldText>
			<View style={styles.balanceContainer}>
				<TouchableOpacity>
					<Entypo
						name="chevron-small-left"
						size={24}
						color="#5F6A84"
					/>
				</TouchableOpacity>

				<BoldText style={styles.balance}>$ 1059.90</BoldText>

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
