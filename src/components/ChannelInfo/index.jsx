import React from 'react'

import { HiHashtag } from 'react-icons/hi'

import { Container, Title, Separator, Description } from './styles'

export default function ChannelInfo() {
	return (
		<Container>
			<HiHashtag className='icon-hashtag'/>
			
			<Title>Chat Livre</Title>

			<Separator/>

			<Description>Chat principal de ideias</Description>
		</Container>
	)
}