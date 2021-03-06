/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/messaging';
import { FirebaseApp } from './App';
import * as serviceWorker from './serviceWorker';
import './Google-Sans/stylesheet.css';

const config = {
  apiKey: 'AIzaSyDHa2E9E4xuExZFqdoxX-4Ehwh7qMzTPew',
  authDomain: 'rails-students.firebaseapp.com',
  databaseURL: 'https://rails-students.firebaseio.com',
  projectId: 'rails-students',
  storageBucket: 'rails-students.appspot.com',
  messagingSenderId: '927373339672',
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BLTf1ScMkukM6eMWQ3c713ZwaJ2Relaal_FWIUjiNf-ztSlDVQWYi44HnOxK05ToNE9dHOABd7K0Yv7OfsC2ILA');


ReactDOM.render(<FirebaseApp />, document.getElementById('root'));

// Google Service Worker. Support Chrome 64+ and firefox 13+. Tested on Chrome 70.0.3538.110 (64 bit).

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
