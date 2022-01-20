import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA46AWeqMixKWl26YEf_mXR8_kSwIEC014",
    authDomain: "cms-database-e8f5d.firebaseapp.com",
    projectId: "cms-database-e8f5d",
    storageBucket: "cms-database-e8f5d.appspot.com",
    messagingSenderId: "172999974843",
    appId: "1:172999974843:web:bbe9bbaa538365554bae9e"
  };

export const firebaseApp = initializeApp(firebaseConfig);