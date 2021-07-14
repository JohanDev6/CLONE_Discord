import React from 'react'

import { Container} from './styles'

import { HiHashtag } from 'react-icons/hi'
import { MdPersonAdd, MdSettings } from 'react-icons/md'

export default function ChannelButton({channelName, selected}) {
	return (
		<Container className={selected? 'active': ''}>
			<div>
				<HiHashtag className='icon-hashtag'/>
				<span>{channelName}</span>
			</div>

			<div className='icons-group'>
				<MdPersonAdd className='icon-invite'/>
				<MdSettings className='icon-settings'/>
			</div>
		</Container>
	)
}