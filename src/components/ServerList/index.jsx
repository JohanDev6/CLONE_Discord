import React from 'react'

import { Container, Separator } from './styles'

import ServerButton from '../ServerButton/index'

export default function ServerList() {
	return (
		<Container>

			<ServerButton isHome/>

			<Separator/>

			<ServerButton hasNotifications selected/>
			<ServerButton />
			<ServerButton hasNotifications mentions={12}/>
			<ServerButton/>
			<ServerButton hasNotifications mentions={33}/>
			<ServerButton hasNotifications/>
			<ServerButton mentions={1}/>

		</Container>
	)   
}