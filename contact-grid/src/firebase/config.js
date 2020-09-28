import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAvNiIb1Iex_B4S06r4Y30aVEo32_QiX1o",
  authDomain: "react-contact-grid.firebaseapp.com",
  databaseURL: "https://react-contact-grid.firebaseio.com",
  projectId: "react-contact-grid",
  storageBucket: "react-contact-grid.appspot.com",
  messagingSenderId: "969712794124",
  appId: "1:969712794124:web:58f1ebd4d1ead5a2818c29"
};


firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();
export const storage = firebase.storage();
