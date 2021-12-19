export type Product = {
	product_name: string
	'image-url'?: string
	slug?: string
	brief_description: string
	description: string
	currency: string
	price: number
	discounted_price?: number
	variants?: string
	is_sold_out: boolean
	user_id: number
	photos?: any
}
