import { FontAwesome5 } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import { API } from '../../api/api.routes'
import { APIService } from '../../api/base.api'
import AddPhotosBtn from '../../components/AddPhotosBtn'
import Form from '../../components/Form'
import PrimaryButton from '../../components/PrimaryButton'
import TextArea from '../../components/TextArea'
import { View } from '../../components/Themed'
import Title from '../../components/Title'
import { Product } from '../../models/Product'
import AddDiscount from './AddDiscount'
import AddPhotosComponent from './AddPhotosComponent'
import AddVariant from './AddVariant'

type Props = {
	close: Function
	open: Function
}

const AddProductFrom: FC<Props> = () => {
	//Variants
	const [product_name, setProduct_name]: any = React.useState('')
	const [brief_description, setBrief_description]: any = React.useState('')
	const [price, setPrice]: any = React.useState('')
	const [description, setDescription]: any = React.useState('')
	const [discounted_price, setDiscounted_price]: any = React.useState('')
	const [variants, setVariants]: any = React.useState([])
	const [photos, setPhotos]: any = React.useState([])
	const [files, setFiles]: any = React.useState([])

	const addVariant = () => {
		let hasEmpties = false
		variants.forEach((variant: any) => {
			for (let key in variant) {
				if (variant[key] === '') {
					hasEmpties = true
				}
			}
		})

		if (!hasEmpties) {
			setVariants([...variants, variantForm])
		}
	}

	const addProduct = async () => {
		const data: Product | any = {
			product_name: product_name,
			brief_description: brief_description,
			price: price,
			description: description,
			discounted_price: discounted_price,
			variants: variants,
			currency: 'AED',
			is_sold_out: false,
			user_id: 1,
		}

		for (let key in data) {
			if (data[key] === '') {
				return
			}
		}

		let formData: any = new FormData()

		for (let key in data) {
			formData.append(key, data[key])
		}

		photos.forEach((image: any) => {
			const imageUri: any = image.replace('file:/data', 'file:///data')
			const imageType = image.split('.')[1]
			formData.append('photos[]', {
				uri: imageUri,
				type: `image/${imageType}`,
				name: `photo.${imageType}`,
			})
		})

		await new APIService(API.Products)
			.store(formData, true)
			.then((data) => {
				console.log(data)
				Alert.alert(
					'Product Upload Successful',
					'Your Product is ready!',
					[
						{
							text: 'Got It!',
							style: 'cancel',
						},
						{ text: 'OK' },
					],
				)
			})
			.catch((error) => {
				alert('error')
				console.log(error)
			})
	}

	return (
		<View>
			<View>
				<View
					style={{
						paddingHorizontal: 23,
						paddingVertical: 24,
					}}>
					<Title text="Product information" />
				</View>

				<Form
					text={(value: string) => {
						setProduct_name(value)
					}}
					label="Product name"
					placeholder="Product name"
					error={false}
				/>

				<Form
					text={(value: string) => {
						setBrief_description(value)
					}}
					label="Brief Description"
					placeholder="Brief Description"
					error={false}
				/>

				<Form
					text={(value: string) => {
						setPrice(value)
					}}
					label="Price (AED)"
					placeholder="Price (AED)"
					error={false}
					numeric
				/>

				<AddVariant addVariant={() => addVariant()} />

				{variants.map((variant: any, index: number) => (
					<View key={index}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<Form
								text={(value: string) => {
									let newArray = variants
									for (let i of newArray) {
										if (i === index) {
											newArray[i].variant = value
										}
									}
									setVariants(newArray)
								}}
								placeholder="Size"
								error={false}
							/>

							<TouchableOpacity
								style={{
									flex: 2,
									marginTop: -10,
									marginLeft: -10,
								}}
								onPress={() => {
									let newArray = variants
									newArray.splice(index, 1)
									setVariants(newArray)
								}}>
								<FontAwesome5
									name="times"
									size={16}
									color="#5F6A84"
								/>
							</TouchableOpacity>
						</View>

						<Form
							text={(value: string) => {
								let newArray = variants
								for (let i of newArray) {
									if (i === index) {
										newArray[i].variants = value
									}
								}
								setVariants(newArray)
							}}
							placeholder="36 US, 37 US, 38 US, 39 US"
							error={false}
						/>
					</View>
				))}

				<AddDiscount
					text={(value: string) => {
						setDiscounted_price(value)
					}}
				/>

				<TextArea
					text={(value: string) => {
						setDescription(value)
					}}
					label="Description"
				/>

				<AddPhotosBtn
					callback={(file: any) => {
						setPhotos([...photos, file.uri])
						setFiles([...files, file])
					}}
				/>

				<AddPhotosComponent
					photos={photos}
					onClear={() => setPhotos([])}
				/>

				<PrimaryButton
					text="add product"
					callback={() => addProduct()}
				/>

				<View style={{ marginTop: 180 }}></View>
			</View>
		</View>
	)
}

export default AddProductFrom

export type VariantType = {
	variant: string
	variants: string
}

const variantForm = {
	variant: null,
	variants: null,
}
