import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import LoginPage from "./components/LoginPage/index";
import GlobalStyled from "./styles/globalStyled";
import {BotProvider} from './providers/bot'
import { defaultStyled } from './themes'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const Routes = () => {

  firebase.initializeApp({
    apiKey: "AIzaSyAzx9zNyRqBP6ee5ujOcpSYgkYbkuIsGfw",
    authDomain: "discordclone-89919.firebaseapp.com",
    projectId: "discordclone-89919",
    storageBucket: "discordclone-89919.appspot.com",
    messagingSenderId: "961826011210",
    appId: "1:961826011210:web:d7d9f1119c1a1aa4fd8eb3",
    measurementId: "G-JLJGTHV14V"
  })

  return (
    <BotProvider>
    <ThemeProvider theme={defaultStyled}>
      <Router>
        <GlobalStyled />
        <Route component={App} path="/channels" exact />
        <Route component={LoginPage} path="/" exact /> 
      </Router>
    </ThemeProvider>
    </BotProvider>
  );
};

export default Routes;