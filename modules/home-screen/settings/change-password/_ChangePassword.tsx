import React, { FC } from 'react'
import { Dimensions, Image, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../../../components/app/Layout'
import TitleBar from '../../../../components/app/TitleBar'

type Props = {}

const _ChangePassword: FC<Props> = (props) => {
	return (
		<Container>
			<TitleBar title="Change Password" />
			<ScrollView style={{ paddingTop: 36 }}>
				<TouchableOpacity style={{ marginTop: 100 }}>
					<Image
						style={{
							height: 50,
							width: Dimensions.get('screen').width - 23 * 2,
							alignSelf: 'center',
						}}
						source={require('../../../../assets/app/images/edit-profile/update.png')}
					/>
				</TouchableOpacity>
			</ScrollView>
		</Container>
	)
}

export default _ChangePassword
