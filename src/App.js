import React, {useEffect} from 'react';

import { useHistory } from 'react-router-dom'

import Layout from './components/Layout/index'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  let history = useHistory()

  useEffect(() => {
    if(!user){
      history.replace('/')
    }
  }, [history,user])

  return (
    <Layout/>
  );
}

export default App;
