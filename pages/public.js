import { Header } from 'owenmerry-designsystem';
import { useState,useEffect } from 'react';
import Chat from '../components/Chat';
import AppHeader from '../components/HeaderApp';
import io from 'socket.io-client';

let socket = {};

export default function Home() {

  const startChatMessages = [
    {type:'time', message: 'Today'},
    {type:'other', message: 'Welcome to the chat.'},
    //{type:'other', message: 'You can send messages or links between friends, colleagues or your devices (with out having to send emails) '},
    //{type:'other', message: 'Right now you are in the public chat but you can also create a private room for just you and your friends. Just use the password button'},
  ];

  const [stateMessages, setStateMessages] = useState([...startChatMessages]);

  useEffect( () => {
    setupSocket();
  },[]);

  //functions
  const addMessage = (messageData) => {
    socket.emit('sendMessage',{type:'other', message: messageData});
    updateMessages({type:'me', message: messageData});
  };
  const setupSocket = async () => {
    socket = await io();
    joinRoom();
    setupListeners();
  }
  const joinRoom = () => {
    socket.emit('joinRoom',{room:'public'});
  };
  const setupListeners = () => {
    socket.on('sendMessage', (chatData) => {
      updateMessages(chatData);
    });
  };
  const updateMessages = (addData) => {
    setStateMessages(prevState => [...prevState, addData]);
  }



  return (
    <div>
      <style jsx global>{`
        html, body, textarea {
            font-family: 'Source Sans Pro', sans-serif;
            margin:0px;
            padding:0px;
            overflow:none;
            height:100%;
            }
            a{text-decoration: none;}
        `}
      </style>
      <AppHeader showBack backUrl='/' title='Public Chat' />
      <Chat messageList={stateMessages} addMessage={addMessage}/>
    </div>
  )
}
