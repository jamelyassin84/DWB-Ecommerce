import axios from 'axios'
import { Alert } from 'react-native'

axios.interceptors.request.use(
	(response) => {
		if (response.method !== 'GET') {
			//Global State na loading = true
			//Componets Reload
		}
		return response
	},
	(error) => handleError(error)
)

axios.interceptors.response.use(
	(response) => {
		if (response.config.method !== 'GET') {
			//Global State na loading = false
		}
		return response
	},
	(error) => handleError(error)
)

const handleError = (error: any) => {
	const { status } = error.response
	if (status === 404) {
		Alert.alert(
			'There was a problem resolving the network.',
			'Check your internet and try again.',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{ text: 'OK' }
			]
		)
	}
	if (status === 401) {
		Alert.alert(
			'Access not allowed.',
			'You are unauthorized to perform this operation.',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{ text: 'Got it!' }
			]
		)
	}
	if (status === 500) {
		Alert.alert('Rive Server Error.', 'Please try again.', [
			{
				text: 'Cancel',
				style: 'cancel'
			},
			{ text: 'Got it!' }
		])
	}

	return Promise.reject(error)
}
