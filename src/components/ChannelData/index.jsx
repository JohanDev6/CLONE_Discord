import React, { useEffect, useContext} from 'react'

import { Container, Messages, Input, InputWrapper, Separator } from './styles'

import Message from '../ChannelMessage/index'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {BotContext} from '../../providers/bot'

export default function ChannelData() {

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);

  const {botMessages} = useContext(BotContext)

  const [messages] = useCollectionData(firestore.collection('messages').orderBy('createAt'), {idField: 'id'})

  function clearCollection(path) {
	  const ref = firestore.collection(path)

	  ref.onSnapshot((snapshot) => {
	    snapshot.docs.forEach((doc) => {
	      ref.doc(doc.id).delete()
	    })
	  })

	}

  let date =  new Date()

  const sendMessage = async () => {

    const { uid, photoURL, displayName } = user;

    await firestore.collection('messages').add({
      text: document.getElementById('input-msg').value,
     	username: displayName,
     	photoURL,
     	uid,
     	createAt: new Date(),
     	date: `${date.getHours() <= 9? "0" + date.getHours() : date.getHours()}:${date.getMinutes() <= 9? "0" + date.getMinutes() : date.getMinutes()}`
    })

    document.getElementById('input-msg').value = ''
  }

  useEffect(() => {

  	setInterval(() => {
  		clearCollection('messages')
  	}, 1500000)

  	window.addEventListener('keyup', (ev) => {
  		if(ev.keyCode === 13){
  			sendMessage()
  		}
  	});
  }, [])

	return (
		<Container>

			<div className='chat-info'>
				<h2>Bem vindo ao Chat principal</h2>
				<span>🤙 Por favor não tumultuar e esse chat é completamente limpo a cada 25 Minutos 🤙</span>

				<p>Comandos: !git - !linkedin - !discord</p>
				<Separator/>
			</div>

			<Messages>
				{messages && messages.map(msg => (
					<Message key={msg.id} content={msg}/>
				))}

				{botMessages && <Message isBot hasMention content={botMessages}/>}
			</Messages>

			<InputWrapper>
				<Input id='input-msg' placeholder='Conversar em #geral' type='text'/>
			</InputWrapper>
		</Container>
	)
}
