export type Product = {
	name: string
	brief_description: string
	description: string
	currency: string
	price: number
	user_id: number
	variants?: string | any
	discounted_price?: number
	url?: string
	photos?: any
	is_sold_out?: boolean
	slug?: string
	created_at?: any
	updated_at?: any
	chosenVariants?: any
}
