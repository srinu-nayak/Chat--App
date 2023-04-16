import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// firebase.initializeApp({
//    apiKey: "AIzaSyC5fZSX0ewjAnCqlTrH7Z3Zp2xRrWTrvCo",
//   authDomain: "botte-web-app.firebaseapp.com",
//   projectId: "botte-web-app",
//   storageBucket: "botte-web-app.appspot.com",
//   messagingSenderId: "796315991506",
//   appId: "1:796315991506:web:3dcc0a3db152b4987e5c0b",
//   measurementId: "G-CP3SRVL9R4"
//   })

firebase.initializeApp({
    apiKey: "AIzaSyDny5hbTs3_R4SxiNOSCvFK2Xh6pk6KfQ0",
  authDomain: "chat-app-e3920.firebaseapp.com",
  projectId: "chat-app-e3920",
  storageBucket: "chat-app-e3920.appspot.com",
  messagingSenderId: "818812141719",
  appId: "1:818812141719:web:032d4372c415c7ffb929d2",
  measurementId: "G-GF8PZVGKX9"
  })



const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
