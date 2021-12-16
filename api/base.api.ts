import axios from 'axios'
import { environment } from '../environments/environment.dev'

export class BaseService<T> {
	protected url: string

	constructor(url: string) {
		this.url = url
	}

	async index() {
		const { data } = await axios.get<T[]>(`${environment.api}${this.url}`)
		return data
	}

	async show(id: number, params?: string) {
		const { data } = await axios.get<T[]>(
			`${environment.api}${this.url}/${id}${
				params !== undefined ? '?' + params : ''
			}`
		)
		return data
	}

	async store(payload: FreeObject) {
		const { data } = await axios.post<T[]>(
			`${environment.api}${this.url}`,
			payload
		)
		return data
	}

	async update(payload: FreeObject, id: number) {
		const { data } = await axios.put<T[]>(
			`${environment.api}${this.url}/${id}`,
			payload
		)
		return data
	}

	async delete(id: number) {
		const { data } = await axios.get<T[]>(
			`${environment.api}${this.url}/${id}`
		)
		return data
	}

	async fetchWithParams(params: string) {
		const { data } = await axios.get<T[]>(this.resolveURL(params))
		return data
	}

	protected resolveURL(params?: string) {
		return `${environment.api}${this.url}?${params}`
	}
}

export type FreeObject = {
	[key: string]: any
}
