import React from 'react'

import { Button } from './styles'

export default function ServerButton({
	selected,
	isHome,
	hasNotifications,
	mentions
}) {
	return (
		<Button 
			isHome={isHome}
			hasNotifications={hasNotifications}
			mentions={mentions}
			className={selected? 'active' : ''}
		>
			{isHome ? (<img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>) : ''}
			{mentions? (<div className='mention-bagde'><span>{mentions}</span></div>) : ''}
		</Button>
	) 
}