import React from 'react'

import { Container, Form, Button } from './styles'

import { useHistory } from 'react-router-dom'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

export default function LoginPage() {
	
	const history = useHistory()
	const auth = firebase.auth();
	const firestore = firebase.firestore();

	const authenticate = (ev) => {
		ev.preventDefault()

		const provider = new firebase.auth.GoogleAuthProvider();

    	auth.signInWithPopup(provider).then(({user}) => {

    		let usersUid = []

    		firestore.collection("users").get().then((querySnapshot) => {
    			querySnapshot.forEach((doc) => {
			        usersUid.push(doc.data().uid)
			    });

			    if(usersUid.includes(user.uid)){
			    	history.push('/channels')
			    }else{

			    firestore.collection('users').doc(user.uid).set({
				     	username: user.displayName,
				     	photoURL: user.photoURL,
				     	email: user.email,
				     	uid: user.uid,
				     	createAt: new Date(),
					}).then(() => {
				    	history.push('/channels')
				    }).catch((err) => {
				    	console.log(err)
				    })
				}
    		}).catch((error) => {
    			console.log(error)
    		})

    	}).catch((error) => {
    		console.log(error)
    	})
	}

	return (
		<Container>
			<Form>
				<h1>Welcome back</h1>
				<p>Faça um simples login com google</p>

				<Button onClick={authenticate}>Entrar com google</Button>
			</Form>
		</Container>
	)
}