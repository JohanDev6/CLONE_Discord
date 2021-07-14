import React from 'react'

import { Grid } from './styles.js'

import ServerList from '../ServerList/index'
import ServerName from '../ServerName/index'
import ChannelInfo from '../ChannelInfo/index'
import ChannelList from '../ChannelList/index'
import ChannelData from '../ChannelData/index'
import UserInfo from '../UserInfo/index'
import UserList from '../UserList/index'
 
export default function Layout() {
	return (
		<Grid>
			<ServerList/>
			<ServerName/>
			<ChannelInfo/>
			<ChannelList/>
			<ChannelData/>
			<UserInfo/>
			<UserList/>
		</Grid>
	)
}