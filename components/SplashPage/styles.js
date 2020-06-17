import styled from 'styled-components';

export const SplashPageStyle = styled.div`

/* general */
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: #282828;

.wrapper{
    width: 100%;
    max-width: 500px;
    .logo{
        font-size:16px;
        text-align:center;
        color:#525252;
    }
    .title{
        font-size:40px;
        margin-bottom:10px;
        text-align:center;
        color:#ffffff;
        font-family: 'Varela Round', sans-serif;
    }

    .chat-messages{
    font-size:16px;
    overflow-y: scroll;
    .message-list{
        padding:15px;
        display:flex;
        flex-direction: column;
        align-content: flex-end;
        .message{
            border-radius:15px 15px 0px 15px;
            background-color: #EA2B74;
            padding:15px;
            color:white;
            max-width:60%;
            margin-bottom: 10px;
            line-height:20px;
        }
        .status-time{
            align-self:center;
            border-radius:20px;
            padding:8px 15px;
            background-color:white;
            border: solid 1px #D6D6D6;
            color:#3F3F3F;
            margin-bottom:10px;
        }
        .status-user{
            font-size:12px;
            align-self:center;
            border-radius:20px;
            padding:6px 13px;
            background-color:whitesmoke;
            border: solid 1px #D6D6D6;
            color:#868686;
            margin-bottom:5px;
        }
        .message-me{
            text-align:right;
            align-self:flex-end;
            background-image: linear-gradient(#e22c45, #EA2B74);
        }
        .message-other{
            text-align:left;
            align-self:flex-start;
            border-radius:15px 15px 15px 0px;
            background-color:#383737;
            border: solid 0px #D6D6D6;
            color:#a5a5a5;
        }
    }
}
.buttons{
    text-align:center;
    color:white;
    .button{
        padding: 10px 30px;
        margin: 0px 5px 10px 5px;
        background-color:#EA2B74;
        background-image: linear-gradient(#e22c45, #EA2B74);
        border-radius: 26px;
        display:inline-block;
        cursor: pointer;
        .svg-box{
            margin-right:10px;
        }
        .text-box{
            position:relative;
            bottom:5px;
        }
    }
}

}


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    align-items:normal;
    margin-top:50px;
    }

`;
