import React, { FC } from 'react'
import { Dimensions, Image, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Form from '../../../components/Form'
import Container from '../../../components/Layout'
import TitleBar from '../../../components/TitleBar'

type Props = {}

const _EditProfile: FC<Props> = (props) => {
	return (
		<Container>
			<TitleBar title="Edit Profile" />
			<ScrollView style={{ paddingTop: 36 }}>
				<Form
					onSubmitEditing={() => {}}
					text={(value: string) => {}}
					label="Store Name"
					error={false}
				/>

				<Form
					onSubmitEditing={() => {}}
					text={(value: string) => {}}
					label="Email"
					error={false}
				/>

				<TouchableOpacity style={{ marginTop: 100 }}>
					<Image
						style={{
							height: 50,
							width: Dimensions.get('screen').width - 23 * 2,
							alignSelf: 'center',
						}}
						source={require('../../../assets/app/images/edit-profile/update.png')}
					/>
				</TouchableOpacity>
			</ScrollView>
		</Container>
	)
}

export default _EditProfile
