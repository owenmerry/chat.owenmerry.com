import { useState, useEffect } from "react";
import Chat from "../../components/Chat";
import AppHeader from "../../components/HeaderApp";
import io from "socket.io-client";

let socket = {};

export default function Room(props) {
  const startChatMessages = [
    { type: "time", message: "Today" },
    { type: "other", message: "Welcome to the chat." },
    //{type:'other', message: 'You can send messages or links between friends, colleagues or your devices (with out having to send emails) '},
    //{type:'other', message: 'Right now you are in the public chat but you can also create a private room for just you and your friends. Just use the password button'},
  ];

  const [stateMessages, setStateMessages] = useState([...startChatMessages]);

  useEffect(() => {
    setupSocket();
  }, []);

  //functions
  const addMessage = (messageData) => {
    socket.emit("sendMessage", { type: "other", message: messageData });
    updateMessages({ type: "me", message: messageData });
  };
  const setupSocket = async () => {
    socket = await io();
    setupListeners();
    joinRoom();
  };
  const joinRoom = () => {
    socket.emit("joinRoom", { room: props.query.pass });
  };
  const setupListeners = () => {
    socket.on("sendMessage", (chatData) => {
      updateMessages(chatData);
    });
    socket.on('history', (chatData) => {
      //console.log('listen catch history',chatData);
      updateHistory(chatData.list);
    });
  };
  const updateMessages = (addData) => {
    //console.log('update messages', stateMessages, addData);
    setStateMessages((prevState) => [...prevState, addData]);
  };
  const updateHistory = (addData) => {
    const state = stateMessages;
    const history = state.concat(addData);
    //console.log('update history', history);
    setStateMessages([...history]);
  };

  return (
    <div>
      <style jsx global>
        {`
          html,
          body,
          textarea {
            font-family: "Source Sans Pro", sans-serif;
            margin: 0px;
            padding: 0px;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
      <AppHeader
        showBack
        backUrl="/"
        title={`Private Chat: ${props.query.pass}`}
      />
      <Chat messageList={stateMessages} addMessage={addMessage} />
    </div>
  );
}

Room.getInitialProps = async function (props) {
  return {
    server: true,
    query: props.query,
  };
};
