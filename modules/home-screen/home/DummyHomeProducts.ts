export const homeProducts: HomeProductType[] = [
	{
		image: require('../../../assets/app/images/home/shirt.png'),
		name: 'Shirt',
		sold: 85,
	},
	{
		image: require('../../../assets/app/images/home/shoe4.jpeg'),
		name: 'Shoes',
		sold: 62,
	},
	{
		image: require('../../../assets/app/images/home/bag.png'),
		name: 'HandBag',
		sold: 50,
	},
]

export type HomeProductType = {
	image: string | any
	name: string
	sold: number
}

export const Months: string[] = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
