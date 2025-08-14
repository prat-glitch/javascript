// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import Imagekit from "imagekit-javascript";
const imagekit= new Imagekit({
  publickey:"public_QNONAWZ6yKSuzoKyG1Ruo3u8cX8=",
  urlEndpoint:"https://ik.imagekit.io/prat123"
})
const firebaseConfig = {
  apiKey: "AIzaSyD6YPmC67GJCm56l3iruSrYcJ_R35ftDQI",
  authDomain: "chat-app-gs-a4ed9.firebaseapp.com",
  projectId: "chat-app-gs-a4ed9",
  storageBucket: "chat-app-gs-a4ed9.firebasestorage.app",
  messagingSenderId: "1087493872577",
  appId: "1:1087493872577:web:9b4f08f66bcfc8589fad40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

const signup = async (username, email, password) => {
 try {
    const res= await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      username: username.toLowerCase(),
      email,
      uid: user.uid,
      avatar:"",
      bio:"Hey there! I am using Chat App",
      lastseen:new Date(). toLocaleString()
    });
    await setDoc(doc(db, "userChats", user.uid), {
        chatdata: [],
    });
 } catch (error) {
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "));
 }

}

const Login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout= async () =>
{
  try {
     await signOut(auth)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
export {signup,imagekit, Login, logout, auth, db};