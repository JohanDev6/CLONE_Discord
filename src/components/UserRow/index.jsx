import React, {useContext, useEffect} from 'react';

import {User, Avatar} from './styles'

import {BotContext} from '../../providers/bot'

const UserRow = ({nickname, isBot, color, imgsrc, email}) => {

	const {setBotMessages } = useContext(BotContext)

	const sendBotMessage = () => {
		if(isBot){
			let inputMessage = document.getElementById('input-msg').value

			let date = new Date()
			let botContent= {}
			let formatedTime = `${date.getHours() <= 9? "0" + date.getHours() : date.getHours()}:${date.getMinutes() <= 9? "0" + date.getMinutes() : date.getMinutes()}`

			switch(inputMessage){
				case '!git':

					botContent = {
						text: 'Da uma star lá porfavor :) | https://github.com/JohanDev6/Discord-Clone/',
				     	username: nickname,
				     	photoURL: imgsrc,
				     	uid: null,
				     	date: formatedTime
					}

					setBotMessages(botContent)
				break;
				case '!discord':

					botContent = {
						text: 'Tanjirinho#1167',
				     	username: nickname,
				     	photoURL: imgsrc,
				     	uid: null,
				     	date: formatedTime
					}

					setBotMessages(botContent)
				break;
				case '!linkedin':

					botContent = {
						text: 'https://www.linkedin.com/in/johan-henrique-3671351a2/',
				     	username: nickname,
				     	photoURL: imgsrc,
				     	uid: null,
				     	date: formatedTime
					}

					setBotMessages(botContent)
				break;

				case '!':

					botContent = {
						text: 'Commando não encontrado!',
				     	username: nickname,
				     	photoURL: imgsrc,
				     	uid: null,
				     	date: formatedTime
					}

					setBotMessages(botContent)
				break;

				default: console.log('Comando executado com sucesso!')
			}
		}
	}

	useEffect(() => {
	  	window.addEventListener('keyup', (ev) => {
	  		if(ev.keyCode === 13){
	  			sendBotMessage()
	  		}
	  	});
    }, [])	

	return(
		<User>
			<Avatar color={color} isBot={isBot} imgsrc={imgsrc?  imgsrc : 'https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png'} />
			<div className='user-info'>
				<strong>{nickname}</strong>
				<p>{email}</p>
			</div>
			{isBot && <span>Bot</span>}
		</User>
	)
}

export default UserRow;
