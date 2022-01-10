import React, { FC } from 'react'
import HomeCard from '../../../components/app/HomeCard'
import HomeLayout from '../../../components/app/HomeLayout'
import Title from '../../../components/app/Title'

import SettingList from './SettingList'
import SettingListWithToggler from './SettingListWithToggler'

type Props = {}

const _Settings: FC<Props> = (props) => {
	return (
		<HomeLayout title="Settings">
			<HomeCard>
				<Title text="Profile Settings" />
				<SettingList />
				<SettingListWithToggler />
			</HomeCard>
		</HomeLayout>
	)
}

export default _Settings
