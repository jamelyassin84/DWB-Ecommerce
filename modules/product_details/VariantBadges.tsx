import React, { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BoldText, View } from '../../components/Themed'
import { groupByKey } from '../../constants/Helpers'
import { Variant } from '../../models/Variant.type'

type Props = {
	data: Variant[]
}

const VariantBadges: FC<Props> = (props) => {
	const [variants, setVariants] = React.useState<any[]>([])

	React.useEffect(() => {
		setVariants(groupByKey(props.data, 'name'))
	}, [])

	return (
		<View style={style.wrapper}>
			{props.data !== null &&
				variants.map((item: any, index: number) => (
					<View key={index}>
						<BoldText style={style.variant}>
							{item[0].name} :
						</BoldText>

						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal={true}>
							{item.map((type: Variant, key: number) => (
								<View style={style.variantBadge} key={key}>
									<BoldText style={style.variantBadgeText}>
										{type.value}
									</BoldText>
								</View>
							))}
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
