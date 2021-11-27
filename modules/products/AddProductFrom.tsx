import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import AddPhotosBtn from '../../components/AddPhotosBtn'
import BottomSheetHeader from '../../components/BottomSheetHeader'
import Form from '../../components/Form'
import PrimaryButton from '../../components/PrimaryButton'
import TextArea from '../../components/TextArea'
import { View } from '../../components/Themed'
import Title from '../../components/Title'

type Props = {
	close: Function
	open: Function
}

const AddProductFrom: FC<Props> = (props) => {
	return (
		<View>
			<BottomSheetHeader
				title="Add Product"
				close={() => {
					props.close()
				}}
			/>
			<ScrollView>
				<View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
					<Title text="Product information" />
				</View>
				<Form label="Product name" />
				<Form label="Price" />
				<TextArea label="Description" />
				<AddPhotosBtn callback={() => {}} />
				<PrimaryButton
					text="Add product"
					callback={() => {
						// navigation.navigate('Root')
					}}
				/>
				<View style={{ marginTop: 180 }}></View>
			</ScrollView>
		</View>
	)
}

export default AddProductFrom
