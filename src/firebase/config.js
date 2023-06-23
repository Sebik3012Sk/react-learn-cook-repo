import  firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrfG6Z41XIDcH50vcvY7sdzsSvwXR9RXY",
    authDomain: "react-cook-app.firebaseapp.com",
    projectId: "react-cook-app",
    storageBucket: "react-cook-app.appspot.com",
    messagingSenderId: "385397261620",
    appId: "1:385397261620:web:7ffef12d17a03bf3d35161",
    measurementId: "G-7Z1RF0HP6S"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };