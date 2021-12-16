import { Platform } from 'react-native'

export const GoogleConfig = {
	clientId:
		Platform.OS === 'android'
			? '430180773137-qjk72tn8iosvc2sg76pdcgo1ikm00oou.apps.googleusercontent.com'
			: '430180773137-pmo7p2eb9smbpmsupmg2ibn9ei5ldm1q.apps.googleusercontent.com',
	scopes: ['profile', 'email']
}
