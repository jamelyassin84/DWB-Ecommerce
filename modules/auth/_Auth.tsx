import React, { FC } from 'react'
import Container from '../../components/Layout'
import ScrollViewWithRefresh from '../../components/ScrollViewWithRefresh'
import Login from './Login'
import LoginAndSignUpTab from './LoginAndSignUpTab'
import SignUp from './SignUp'
import Socials from './Socials'

type Props = {}

const _Auth: FC<Props> = (props) => {
	const [shouldLogin, setShouldLogin] = React.useState<boolean>(false)

	return (
		<ScrollViewWithRefresh onRefresh={() => {}} loading={false}>
			<Container>
				<LoginAndSignUpTab
					shouldLogin={shouldLogin}
					wantsToLogin={(value: boolean) => {
						setShouldLogin(value)
					}}
				/>
				<SignUp isShowing={!shouldLogin} />
				<Login isShowing={shouldLogin} />
				<Socials isShowing={!shouldLogin} />
			</Container>
		</ScrollViewWithRefresh>
	)
}

export default _Auth
