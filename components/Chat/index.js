import { useState, useEffect, useRef } from 'react';
import { ChatStyle } from './styles';
import { Wrapper } from 'owenmerry-designsystem';


const Chat = props => {

  const refMessage = useRef();
  const [stateMessages, setStateMessages] = useState(props.messageList);

  useEffect(() => {
    setStateMessages(props.messageList);
    console.log('props changed', props.messageList);
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



    return (
        <ChatStyle>
          <div className='chat-messages'>
            <Wrapper>
              <div className='message-list'>
              {stateMessages.map((item, key) => (
                <div key={key} className={getClassName(item.type)}>{item.message}</div>
              ))}
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