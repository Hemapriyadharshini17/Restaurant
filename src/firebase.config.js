import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzFqyR8ySy3w9jic1-8UXJ2T6ygGONFt0",
  authDomain: "restaurantapp-b6faf.firebaseapp.com",
  databaseURL: "https://restaurantapp-b6faf-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-b6faf",
  storageBucket: "restaurantapp-b6faf.appspot.com",
  messagingSenderId: "86090565433",
  appId: "1:86090565433:web:acf3555e14dcdd25d18ae8",
  measurementId: "G-Y32LSJW5TG",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
