
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo-eNYbfo_isdaVWXVlBKtpPbtOEa5ooI",
  authDomain: "resumescorer-fd213.firebaseapp.com",
  projectId: "resumescorer-fd213",
  storageBucket: "resumescorer-fd213.firebasestorage.app",
  messagingSenderId: "305737720879",
  appId: "1:305737720879:web:77f4af7f1747bd245d92da",
  measurementId: "G-2PXPH0SYWX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };