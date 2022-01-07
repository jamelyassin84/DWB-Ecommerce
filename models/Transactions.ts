import { Product } from './Product'
export type Transaction = {
	amount: number
	buyer_id: number
	created_at: any
	id: number
	product_id: number
	quantity: number
	reference_number: String
	seller_id: number
	updated_at: any
	product: Product
}
