import React from 'react'

import { MdAdd } from 'react-icons/md'

import ChanneButton from '../ChannelButton/index'
import { Container, Category} from './styles'

export default function ChannelList() {
	return (
		<Container>
			<Category>
				<span>Canais de Texto</span>
				<MdAdd className='icon-add'/>
			</Category>

			<ChanneButton channelName='geral' selected/>
			<ChanneButton channelName='estudos'/>
			<ChanneButton channelName='csgo'/>
			<ChanneButton channelName='javascript'/>
			<ChanneButton channelName='react'/>

		</Container>
	)
}