import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBfFw5HIf76FTPWvT1WZ7OaMDzh_CxYfvY",
    authDomain: "chatfirebase-4da56.firebaseapp.com",
    databaseURL: "https://chatfirebase-4da56-default-rtdb.firebaseio.com",
    projectId: "chatfirebase-4da56",
    storageBucket: "chatfirebase-4da56.appspot.com",
    messagingSenderId: "566574066915",
    appId: "1:566574066915:web:2c0bca320ee725338a29d6",
    measurementId: "G-85X44ZRV4K"
};


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
const dbChat = firebase.database();
const db = firebase.firestore();
export {auth , provider ,db, dbChat};