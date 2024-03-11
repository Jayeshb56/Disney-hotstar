
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDeg2C83EBxEMEuYl3d3TBC0jggSf3ZNx0",
  authDomain: "hotstar-7ff28.firebaseapp.com",
  projectId: "hotstar-7ff28",
  storageBucket: "hotstar-7ff28.appspot.com",
  messagingSenderId: "736175563611",
  appId: "1:736175563611:web:f5b07e9550080519f1f07e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)