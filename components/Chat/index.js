import { useState, useEffect, useRef } from 'react';
import { ChatStyle } from './styles';
import { Wrapper } from 'owenmerry-designsystem';
import { motion } from "framer-motion";


const Chat = props => {

  const refMessage = useRef();
  const refMessageList = useRef();
  const refMessageListEnd = useRef();
  const [stateMessages, setStateMessages] = useState(props.messageList);

  useEffect(() => {
    setStateMessages(props.messageList);
    console.log('props changed', props.messageList);
    scrollBottom();
  },[props.messageList]);

  const addMessage = () => {
    props.addMessage(refMessage.current.value);
    refMessage.current.value = '';
  }; 

  const messageChange = (e) => {
    if(e.key === 'Enter'){
      addMessage(refMessage.current.value);
    }
  }; 

  const getClassName = (type) => {
    let className = ''; 
    if(type === 'time'){className = 'status status-time';}
    if(type === 'user'){className = 'status status-user';}
    if(type === 'other'){className = 'message message-other';}
    if(type === 'me'){className = 'message message-me';}

    return className;
  };

  const scrollBottom = () => {
    setTimeout(() => {
      refMessageListEnd.current.scrollIntoView({ behavior: "smooth" });
    }, 100 );
  };


  //animations
  const variants = {
    start: {
      opacity: 0, 
      y:-10,
    },
    end: {
      opacity: 1, 
      y:0,
    },
  }


    return (
        <ChatStyle>
          <div className='chat-messages'>
            <Wrapper>
              <div ref={refMessageList} className='message-list'>
              {stateMessages.map((item, key) => (
                <motion.div 
                  initial="start"
                  animate="end"
                  variants={variants}
                  key={key} 
                  className={getClassName(item.type)}
                >{item.message}</motion.div>
              ))}
              <div ref={refMessageListEnd} />
              </div>
            </Wrapper>
          </div>
          <div className='chat-box'>
            <Wrapper>
            <div className='chat-box-content'>
                <div className='input'><input ref={refMessage} placeholder='Type your message...' onKeyDown={(e) => messageChange(e)} /></div>
                <div className='button-box'>
                    <div onClick={() => addMessage()} className='button'>Send</div>
                </div>
              </div>
            </Wrapper>
          </div>
        </ChatStyle>
    );
}


export default Chat; 