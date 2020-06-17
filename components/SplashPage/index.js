import { useState, useEffect, useRef } from 'react';
import { SplashPageStyle } from './styles';
import Link from 'next/link';
import { motion } from "framer-motion";


const SplashPage = props => {

  const startChatMessages = [
    //{type:'time', message: 'Today'},
    {type:'other', message: 'Welcome 👋🏾'},
    {type:'other', message: 'Now you can talk online with anyone without logging in'},
    {type:'me', message: 'Nice 👍'},
    {type:'other', message: 'Choose to join the public chat room or join your own room and share with friends'},
  ];

  //animations
  const variants = {
    start: i => ({
      opacity: 0, 
      y:-10,
      transition: {
        delay: i * 1,
      },
    }),
    end: i => ({
      opacity: 1, 
      y:0,
      transition: {
        delay: i * .7,
      },
    }),
  }

  useEffect(() => {

  },[]);

  //functions
  const getClassName = (type) => {
    let className = ''; 
    if(type === 'time'){className = 'status status-time';}
    if(type === 'user'){className = 'status status-user';}
    if(type === 'other'){className = 'message message-other';}
    if(type === 'me'){className = 'message message-me';}

    return className;
  };



    return (
        <SplashPageStyle>
          <div className='wrapper'>
          <div className='logo'>chat.owenmerry.com</div>
          <div className='title'>Chat Online with friends</div>
            <div className='chat-messages'>
              <div className='message-list'>
              {startChatMessages.map((item, key) => (
                <motion.div 
                  custom={key}
                  initial="start"
                  animate="end"
                  variants={variants}
                  key={key} 
                  className={getClassName(item.type)}
                >{item.message}</motion.div>
              ))}
              </div>
            </div>
            <div className='buttons'>
              <Link href='/public'>
                <div className='button'>
                  <span className='svg-box'>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>browser</title>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Desktop" transform="translate(-620.000000, -29.000000)" fill="#ffffff" fillRule="nonzero">
                                <g id="browser" transform="translate(620.000000, 29.000000)">
                                    <path d="M24.0000193,12 C23.9990929,6.80275269 20.6526232,2.19681557 15.71,0.59 L15.71,0.59 C13.3172302,-0.180928386 10.7427698,-0.180928386 8.35,0.59 L8.35,0.59 C3.39182514,2.20178697 0.041644679,6.8306223 0.0598235622,12.0441645 C0.0781508824,17.2577066 3.46066079,21.8629702 8.43,23.44 L8.48,23.44 C10.8103721,24.1730931 13.3096279,24.1730931 15.64,23.44 L15.69,23.44 C20.6510616,21.8368044 24.009305,17.213663 24.0000193,12 Z M17,20.67 C17.3831216,19.1359833 17.6472398,17.5746774 17.79,16 L21.16,16 C20.3035385,17.9583552 18.8467273,19.5937659 17,20.67 Z M2,12 C2.00065842,11.3283746 2.06765026,10.6584562 2.2,10 L6.06,10 C6,10.66 6,11.33 6,12 C6,12.67 6,13.34 6.06,14 L2.2,14 C2.06765026,13.3415438 2.00065842,12.6716254 2,12 Z M8,12 C8,11.32 8,10.66 8.06,10 L15.94,10 C15.94,10.66 16,11.32 16,12 C16,12.68 16,13.34 15.94,14 L8.06,14 C8,13.34 8,12.68 8,12 Z M17.94,10 L21.8,10 C22.0666667,11.32 22.0666667,12.68 21.8,14 L17.94,14 C17.94,13.34 18,12.67 18,12 C18,11.33 18,10.66 17.94,10 L17.94,10 Z M21.16,8 L17.79,8 C17.6472398,6.42532258 17.3831216,4.86401671 17,3.33 C18.8467273,4.40623405 20.3035385,6.04164481 21.16,8 L21.16,8 Z M14.55,2.34 C15.184559,4.17077719 15.5975014,6.07098352 15.78,8 L8.22,8 C8.4024986,6.07098352 8.81544096,4.17077719 9.45,2.34 C10.2823482,2.12002571 11.1390943,2.0057929 12,2 C12.8609057,2.0057929 13.7176518,2.12002571 14.55,2.34 L14.55,2.34 Z M7,3.33 C6.61687835,4.86401671 6.35276023,6.42532258 6.21,8 L2.84,8 C3.69646146,6.04164481 5.15327275,4.40623405 7,3.33 Z M2.84,16 L6.21,16 C6.35276023,17.5746774 6.61687835,19.1359833 7,20.67 C5.15327275,19.5937659 3.69646146,17.9583552 2.84,16 L2.84,16 Z M9.45,21.66 C8.81544096,19.8292228 8.4024986,17.9290165 8.22,16 L15.78,16 C15.5975014,17.9290165 15.184559,19.8292228 14.55,21.66 C13.7176518,21.8799743 12.8609057,21.9942071 12,22 C11.1390943,21.9942071 10.2823482,21.8799743 9.45,21.66 Z" id="Shape"></path>
                                </g>
                            </g>
                        </g>
                    </svg> 
                  </span>
                  <span className='text-box'>Join Public Chat</span>
                </div>
              </Link>
              <Link href='/room'>
              <div className='button'>
                <span className='svg-box'>
                <svg width="18px" height="24px" viewBox="0 0 18 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <title>lock-alt-1-lock</title>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Password-Chat" transform="translate(-789.000000, -29.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g id="lock-alt-1-lock" transform="translate(789.000000, 29.000000)">
                                <g id="Group">
                                    <path d="M15,24 L3,24 C1.34314575,24 0,22.6568542 0,21 L0,15 C0,13.3431458 1.34314575,12 3,12 L15,12 C16.6568542,12 18,13.3431458 18,15 L18,21 C18,22.6568542 16.6568542,24 15,24 Z M3,14 C2.44771525,14 2,14.4477153 2,15 L2,21 C2,21.5522847 2.44771525,22 3,22 L15,22 C15.5522847,22 16,21.5522847 16,21 L16,15 C16,14.4477153 15.5522847,14 15,14 L3,14 Z" id="Shape"></path>
                                    <path d="M14,14 C13.4477153,14 13,13.5522847 13,13 L13,6 C13,3.790861 11.209139,2 9,2 C6.790861,2 5,3.790861 5,6 L5,13 C5,13.5522847 4.55228475,14 4,14 C3.44771525,14 3,13.5522847 3,13 L3,6 C3,2.6862915 5.6862915,0 9,0 C12.3137085,0 15,2.6862915 15,6 L15,13 C15,13.2652165 14.8946432,13.5195704 14.7071068,13.7071068 C14.5195704,13.8946432 14.2652165,14 14,14 Z" id="Path"></path>
                                    <path d="M9,19 C7.8954305,19 7,18.1045695 7,17 C7,15.8954305 7.8954305,15 9,15 C10.1045695,15 11,15.8954305 11,17 C11,18.1045695 10.1045695,19 9,19 Z" id="Path"></path>
                                    <path d="M9,21 C8.44771525,21 8,20.5522847 8,20 L8,18 C8,17.4477153 8.44771525,17 9,17 C9.55228475,17 10,17.4477153 10,18 L10,20 C10,20.5522847 9.55228475,21 9,21 Z" id="Path"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg> 
                </span>
                <span className='text-box'>Join My Room</span>
                </div>
                </Link>
            </div>
          </div>
        </SplashPageStyle>
    );
}


export default SplashPage; 