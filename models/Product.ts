export type Product = {
	product_name: string
	brief_description: string
	description: string
	currency: string
	price: number
	user_id: number
	variants?: string
	discounted_price?: number

	'image-url'?: string
	photos?: any
	is_sold_out?: boolean
	slug?: string
	created_at?: any
	updated_at?: any
}
