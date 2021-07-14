import React, {useEffect, useState} from 'react'

import { Container, Role} from './styles'

import { useAuthState } from 'react-firebase-hooks/auth';

import UserRow from '../UserRow/index'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function UserList() {

	const auth = firebase.auth();
	const firestore = firebase.firestore();
	const [user] = useAuthState(auth);

	const [userLength, setUserLength] = useState(0)

	const [users] = useCollectionData(firestore.collection('users'), {idField: 'id'})

	useEffect(() => {
		firestore.collection("users").get().then((querySnapshot) => {
	    	setUserLength(querySnapshot.size)
		})
	}, [])

	return (
		<Container>

			<Role>Disponível - 1</Role>
			<UserRow color='green' uid={user.uid} email={user.email} imgsrc={user.photoURL} nickname={user.displayName} />

			<Role>Members - {userLength}</Role>

			{users && users.map((user) => (
				<UserRow color='green' uid={user.uid} email={user.email} imgsrc={user.photoURL} nickname={user.username} />
			))}

			<Role>Bots - 1</Role>

			<UserRow color='blueviolet' imgsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJN-tZlgJy6-HkHyRsu5WZbA_XG3P5xri7g&usqp=CAU' isBot nickname='Tanjirin' />

		</Container>
	)
}