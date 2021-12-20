import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Container from '../../components/Layout'
import { BoldText, View } from '../../components/Themed'
import { VariantType } from '../products/AddProductFrom'

type Props = {
	data: string
}

const VariantBadges: FC<Props> = (props) => {
	React.useEffect(() => {
		console.log(JSON.parse(props.data))
	}, [])

	return (
		<View style={style.wrapper}>
			{JSON.parse(props.data).map((item: VariantType, index: number) => (
				<View key={index}>
					<BoldText style={style.variant}>{item.variant} : </BoldText>

					<ScrollView
						showsHorizontalScrollIndicator={false}
						horizontal={true}>
						{JSON.parse(JSON.stringify(item.variants)).map(
							(type: string, key: number) => (
								<View style={style.variantBadge} key={key}>
									<BoldText style={style.variantBadgeText}>
										{type}
									</BoldText>
								</View>
							),
						)}
					</ScrollView>
				</View>
			))}
		</View>
	)
}

const style = StyleSheet.create({
	wrapper: {
		marginTop: 30,
		marginHorizontal: 18,
		marginBottom: -10,
	},
	variant: {
		fontSize: 16,
		marginBottom: 11,
	},
	variantBadge: {
		marginBottom: 16,
		paddingVertical: 9,
		paddingHorizontal: 15,
		backgroundColor: '#E8EAEF',
		borderRadius: 8,
		marginRight: 9,
		fontSize: 13,
	},
	variantBadgeText: {},
})

export default VariantBadges
