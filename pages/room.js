import { useState,useEffect } from 'react';
import RoomPage from '../components/RoomPage';

export default function Public() {


  return (
    <div>
      <style jsx global>{`
        html, body, textarea {
            font-family: 'Source Sans Pro', sans-serif;
            margin:0px;
            padding:0px;
            }
            a{text-decoration: none;}
        `}
      </style>
      <RoomPage />
    </div>
  )
}
