import React, { FC } from 'react'
import AddPhotosBtn from '../../components/AddPhotosBtn'
import Form from '../../components/Form'
import PrimaryButton from '../../components/PrimaryButton'
import TextArea from '../../components/TextArea'
import { View } from '../../components/Themed'
import Title from '../../components/Title'
import AddDiscount from './AddDiscount'
import AddPhotosComponent from './AddPhotosComponent'
import AddVariant from './AddVariant'

type Props = {
	close: Function
	open: Function
}

const AddProductFrom: FC<Props> = (props) => {
	return (
		<View>
			<View>
				<View
					style={{
						paddingHorizontal: 20,
						paddingVertical: 15,
						paddingBottom: 5,
					}}>
					<Title text="Product information" />
				</View>

				<Form
					onSubmitEditing={() => {
						// removeFocus()
						// setPasswordFocus(true)
					}}
					text={(value: string) => {
						// stEmail(value)
					}}
					label="Email"
					placeholder="Product name"
					error={false}
				/>

				<Form
					onSubmitEditing={() => {
						// removeFocus()
						// setPasswordFocus(true)
					}}
					text={(value: string) => {
						// stEmail(value)
					}}
					label="Price (AED)"
					placeholder="Price (AED)"
					error={false}
					numeric
				/>

				<AddVariant />
				<AddDiscount />

				<TextArea label="Description" />
				<AddPhotosBtn callback={() => {}} />
				<AddPhotosComponent />

				<PrimaryButton
					text="add product"
					callback={() => {
						// navigation.navigate('Root')
					}}
				/>

				<View style={{ marginTop: 180 }}></View>
			</View>
		</View>
	)
}

export default AddProductFrom
