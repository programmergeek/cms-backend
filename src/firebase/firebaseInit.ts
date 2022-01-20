import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDWO7EBEGQ-D8W83L2QoH9skHzJawKsn00",
    authDomain: "cms-database-90d66.firebaseapp.com",
    projectId: "cms-database-90d66",
    storageBucket: "cms-database-90d66.appspot.com",
    messagingSenderId: "66326031745",
    appId: "1:66326031745:web:1a7cd158884a6701198c80",
    measurementId: "G-JZW2T3KNNV"
  };

export const firebaseApp = initializeApp(firebaseConfig);