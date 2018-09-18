import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var config = {
  apiKey: "AIzaSyBJvd77zV5ZacOYIw3t05RT-8yU69EtkoI",
  authDomain: "events-d10de.firebaseapp.com",
  databaseURL: "https://events-d10de.firebaseio.com",
  projectId: "events-d10de",
  storageBucket: "events-d10de.appspot.com",
  messagingSenderId: "366608580570"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";
export const auth = firebase.auth();
export const DB = firebase.database();
export const StoreDB = firebase.firestore();
export default firebase;
