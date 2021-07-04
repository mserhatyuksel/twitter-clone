import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCoPZTeA3fynd2R5uwCwaY1rApPqBJWoa0",
    authDomain: "twitter-clone-msy.firebaseapp.com",
    projectId: "twitter-clone-msy",
    storageBucket: "twitter-clone-msy.appspot.com",
    messagingSenderId: "420123784766",
    appId: "1:420123784766:web:441c4a4513995a582f836f",
    measurementId: "G-08YW0MY550",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const db = firebase.firestore();

export default db;