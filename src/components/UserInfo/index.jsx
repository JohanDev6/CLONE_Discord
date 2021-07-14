import React from 'react'

import { Container, Profile, Icons, Avatar, UserData } from './styles'

import { MdMic, MdSettings, MdHeadset } from 'react-icons/md'

import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

export default function UserInfo() {

	const auth = firebase.auth();
	const [user] = useAuthState(auth);

	return (
		<Container>
			<Profile>
				<Avatar imgsrc={user.photoURL}/>
				<UserData>
					<strong>{user.displayName.split(' ')[0]}</strong>
					<span>{'#' + user.metadata.a.substr(0, 4)}</span>
				</UserData>
			</Profile>

			<Icons>
				<MdMic className='icon-mic'/>
				<MdHeadset className='icon-headphone'/>
				<MdSettings className='icon-settings'/>
			</Icons>
		</Container>
	)
}