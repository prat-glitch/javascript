import React, {useContext, useEffect} from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Chat from './pages/chat/Chat.jsx'
import Profile from './pages/profileupdate/Profile.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase.js'
import Appcontext from './context/Appcontext.jsx'
const App = () => {

  const Navigate= useNavigate();
  const{loaduserdata}= useContext(Appcontext);
  useEffect(() =>
{
 onAuthStateChanged(auth, async(user) =>
{
 if(user)
 {
   Navigate('/chat')
   console.log(user);
   await loaduserdata(user.uid);
 }
 else {
  Navigate('/')
 }
})
})
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path='/chat' element={<Chat />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </>
  )
}

export default App