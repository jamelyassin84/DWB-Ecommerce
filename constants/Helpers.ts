export default function toDate(
	dateString: string,
	monthIsShort: boolean = false,
) {
	const months = [
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
	const date = new Date(new Date(dateString).getTime())
	return `${
		monthIsShort
			? months[date.getMonth()].substring(0, 3)
			: months[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}`
}

export function hasData(data: any) {
	return data ? true : false
}

export function validURL(url: string) {
	let valid = false
	const pattern =
		/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/
	try {
		new URL(url)
		valid = true
	} catch (_) {
		valid = false
	}
	return !!pattern.test(url) && valid
}

export function ucFirst(string: string) {
	const array = string.split('')
	array[0] = array[0].toUpperCase()
	return array.join('')
}

export function ucWords(string: string) {
	return string
		.split(' ')
		.map((word) => (word === 'Id' ? 'ID' : ucFirst(word)))
		.join(' ')
}

export function except<T, K extends keyof T>(data: T, keys: Array<K>) {
	const copy = {} as T

	for (const key in data) {
		copy[key] = data[key]
	}

	for (const key of keys) {
		if (key in copy) {
			delete copy[key]
		}
	}
	return copy
}

export function exceptMany<T, K extends keyof T>(
	data: Array<T>,
	keys: Array<K>,
) {
	return [...data].map((item) => except(item, keys))
}

export function only<T, K extends keyof T>(data: T, keys: Array<K>) {
	const result = {} as T
	;(result as any)['id'] = (data as any)['id']
	for (const key of keys) {
		result[key] = data[key]
	}
	return result
}

export function groupByKey(data: Array<any>, property: string) {
	if (data.length > 0 && !(property in data[0])) {
		throw new Error(`${property} does not exist in array.`)
	}
	const temp: any = {}
	data.forEach((item: any) => {
		const key = item[property]
		if (!(key in temp)) {
			temp[key] = []
		}
		temp[key].push(item)
	})

	return Object.keys(temp).map((key) => temp[key])
}

export function where(data: Array<any>, key: string, value: any) {
	return data.filter((item) => item[key] === value)
}

export function stringToArray(text: string | any) {
	if (text === null) {
		return []
	}
	return text.split(', ')
}

export function getPercent(value: number, basis: number) {
	return (value * 100) / basis
}

export function total(x: string | any, y: string | any) {
	return parseFloat(x) + parseFloat(y)
}

export function isOdd(num: number) {
	return num % 2
}

export function currencyFormat(
	number: number,
	currency: string | boolean = false,
) {
	return `${currency ? currency : ''} ${number
		.toFixed(2)
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
}

const intervals = [
	{ label: 'year', seconds: 31536000 },
	{ label: 'month', seconds: 2592000 },
	{ label: 'day', seconds: 86400 },
	{ label: 'hour', seconds: 3600 },
	{ label: 'minute', seconds: 60 },
	{ label: 'second', seconds: 1 },
]

export function timeSince(date: any) {
	const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
	const interval: any = intervals.find((i) => i.seconds < seconds)
	const count = Math.floor(seconds / interval.seconds)
	return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`
}
