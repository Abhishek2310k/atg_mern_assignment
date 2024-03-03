import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7CpZl8DF9EN9Hq5Lt4B-vH7fCuE6gZIs",
    authDomain: "semsui-326df.firebaseapp.com",
    projectId: "semsui-326df",
    storageBucket: "semsui-326df.appspot.com",
    messagingSenderId: "478615516512",
    appId: "1:478615516512:web:f9721a9b74b64027919a05",
    measurementId: "G-4GC7B4ZJ0B"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
