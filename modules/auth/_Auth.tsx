import React, { FC } from 'react'
import Container from '../../components/Layout'
import Login from './Login'
import LoginAndSignUpTab from './LoginAndSignUpTab'
import SignUp from './SignUp'
import Socials from './Socials'

type Props = {}

const _Auth: FC<Props> = (props) => {
	const [shouldLogin, setShouldLogin] = React.useState<boolean>(false)

	return (
		<Container>
			<LoginAndSignUpTab
				shouldLogin={shouldLogin}
				wantsToLogin={(value: boolean) => {
					setShouldLogin(value)
				}}
			/>
			<Login isShowing={shouldLogin} />
			<SignUp isShowing={!shouldLogin} />
			<Socials isShowing={!shouldLogin} />
		</Container>
	)
}

export default _Auth
