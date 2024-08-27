
// Your web app's Firebase configuration
//const firebaseConfig = {
  //apiKey: "AIzaSyA63sghCPwep1JTYfWOvg0_dz8RMbCPKko",
  //authDomain: "news-84ce7.firebaseapp.com",
  //projectId: "news-84ce7",
  //storageBucket: "news-84ce7.appspot.com",
  //messagingSenderId: "552342488946",
  //appId: "1:552342488946:web:b9a03408785358b3c3ffeb"
//};


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA63sghCPwep1JTYfWOvg0_dz8RMbCPKko",
    authDomain: "news-84ce7.firebaseapp.com",
    projectId: "news-84ce7",
    storageBucket: "news-84ce7.appspot.com",
    messagingSenderId: "552342488946",
    appId: "1:552342488946:web:b9a03408785358b3c3ffeb"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

