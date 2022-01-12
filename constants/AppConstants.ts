import { Platform } from 'react-native'

export const GoogleConfig = {
	clientId:
		Platform.OS === 'android'
			? '430180773137-qjk72tn8iosvc2sg76pdcgo1ikm00oou.apps.googleusercontent.com'
			: '430180773137-pmo7p2eb9smbpmsupmg2ibn9ei5ldm1q.apps.googleusercontent.com',
	scopes: ['profile', 'email'],
}

export const homeChartConfig = () => {
	return {
		backgroundGradientFrom: 'white',
		backgroundGradientTo: 'white',
		decimalPlaces: 0,
		fillShadowGradient: '#008FF9',
		fillShadowGradientOpacity: 1,
		labelColor: () => '#5F6A84',
		color: () => '#000F34',
		barPercentage: 1.2,
		barRadius: 10,
		strokeWidth: 1,
	}
}
export const paymentChartConfig = () => {
	return {
		backgroundGradientFrom: 'white',
		backgroundGradientTo: 'white',
		decimalPlaces: 0,
		fillShadowGradient: '#0AD0E4', //'#E2E7EE'
		fillShadowGradientOpacity: 1,
		labelColor: () => '#5F6A84',
		color: () => '#000F34',
		barPercentage: 1.2,
		barRadius: 10,
		strokeWidth: 1,
		propsForBackgroundLines: {
			strokeWidth: 1,
			strokeOpacity: 0.1,
			strokeDashArray: [20],
			scaleX: 112,
		},
	}
}
