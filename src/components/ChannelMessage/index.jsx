import React from 'react'

import { Container, Avatar, Header, Content, Message } from './styles'
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

export default function ChannelMessage({
	content,
	hasMention,
	isBot,
}) {

	const auth = firebase.auth();
	const [user] = useAuthState(auth);

	return (
		<Container className={hasMention? 'mention' : '' }>
			<Avatar className={isBot? 'bot' : ''} imgsrc={content.photoURL? content.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJN-tZlgJy6-HkHyRsu5WZbA_XG3P5xri7g&usqp=CAU'}/>
			<Message>
				<Header>
					<strong>{content.username}</strong>

					{isBot && <span>Bot</span>}

					<time>{content.date}</time>
				</Header>
				<Content>
					{isBot && <span className='mention-text'>@{user.displayName}</span>}{content.text}
				</Content>
			</Message>

		</Container>
	)
}