import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyACVpQ0bW954cbNtBQdgc_qughpPEedP9Y",
    authDomain: "projetomontanari.firebaseapp.com",
    projectId: "projetomontanari",
    storageBucket: "projetomontanari.firebasestorage.app",
    messagingSenderId: "523298150837",
    appId: "1:523298150837:web:80fbbda3ab25f4d07721fc",
    measurementId: "G-WQV4VYR8F6"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
