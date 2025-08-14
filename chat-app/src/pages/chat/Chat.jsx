import React from 'react'
import './chat.css'
import Leftsidebar from '../../components/leftsidebar/Leftsidebar'
import Chatbox from '../../components/chatbox/Chatbox'
import Rightsidebar from '../../components/rightsidebar/Rightsidebar'
const chat = () => {
  return (
    <div className='chat'>
      <div className='chat-container'>
      <Leftsidebar />
      <Chatbox />
      <Rightsidebar />
      </div>
    </div>
  )
}

export default chat