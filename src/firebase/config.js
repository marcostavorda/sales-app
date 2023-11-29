
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQn1D_pjZ_vE-HphTtLEF6KfZJauADMxQ",
  authDomain: "sales-app-react.firebaseapp.com",
  projectId: "sales-app-react",
  storageBucket: "sales-app-react.appspot.com",
  messagingSenderId: "320437017558",
  appId: "1:320437017558:web:ea392af5f2dddecbe32277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;