import React, { useState} from 'react'

export const BotContext = React.createContext({});

export const BotProvider = (props) => {

	const [botMessages, setBotMessages ] = useState(null)

	return (<BotContext.Provider value={{botMessages, setBotMessages}}>{props.children}</BotContext.Provider>)
} 