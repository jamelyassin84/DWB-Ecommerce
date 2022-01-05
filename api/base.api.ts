import axios from 'axios'
import { environment } from '../environments/environment.dev'

export class APIService<T> {
	protected url: string

	constructor(url: string) {
		this.url = url
	}

	headers(token: string | any): any {
		return {
			headers: {
				Accept: 'application/json',
				Authorization: 'Bearer ' + token,
			},
		}
	}

	async index(token?: any | string) {
		const { data } = await axios.get<T[]>(
			`${environment.api}${this.url}`,
			this.headers(token),
		)
		return data
	}

	async show(id: number, params?: string, token?: any | string) {
		const { data } = await axios.get<T[]>(
			`${environment.api}${this.url}/${id}${
				params !== undefined ? '?' + params : ''
			}`,
			this.headers(token),
		)
		return data
	}

	async store(payload: FreeObject, formData = false, token?: any | string) {
		const { data } = await axios.post<T[]>(
			`${environment.api}${this.url}`,
			payload,
			formData
				? {
						headers: {
							'Content-Type': 'multipart/form-data',
							Authorization: 'Bearer ' + token,
						},
				  }
				: this.headers(token),
		)
		return data
	}

	async update(payload: FreeObject, id: number, token?: any | string) {
		const { data } = await axios.put<T[]>(
			`${environment.api}${this.url}/${id}`,
			payload,
			this.headers(token),
		)
		return data
	}

	async delete(id: number, token?: any | string) {
		const { data } = await axios.get<T[]>(
			`${environment.api}${this.url}/${id}`,
			this.headers(token),
		)
		return data
	}

	async fetchWithParams(params: string, token?: any | string) {
		const { data } = await axios.get<T[]>(
			this.resolveURL(params),
			this.headers(token),
		)
		return data
	}

	protected resolveURL(params?: string) {
		return `${environment.api}${this.url}?${params}`
	}
}

export type FreeObject = {
	[key: string]: any
}
