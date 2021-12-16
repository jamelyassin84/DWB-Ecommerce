export type User = {
	name: string
	email: string
	password?: string
	avatar?: string
	phone?: string
	alt_phone?: string
	mode: 'Google' | 'Facebook' | 'Apple' | 'Default'
	token?: string
	google?: string
	facebook?: string
	apple?: string
}
