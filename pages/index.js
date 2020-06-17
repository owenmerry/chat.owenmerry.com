import { useState,useEffect } from 'react';
import SplashPage from '../components/SplashPage';

export default function Public() {


  return (
    <div>
      <style jsx global>{`
        html, body, textarea {
            font-family: 'Source Sans Pro', sans-serif;
            margin:0px;
            padding:0px;
            background-color: #282828;
            }
            a{text-decoration: none;}
        `}
      </style>
      <SplashPage />
    </div>
  )
}
