import styled from 'styled-components';

export const ChatStyle = styled.div`

/* general */
.chat-messages{
    height: calc(100vh - 85px - 96px);
    background-color: #F8F8F8;
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
            margin-bottom: 5px;
            line-height:20px;
        }
        .status-time{
            align-self:center;
            border-radius:20px;
            padding:8px 15px;
            background-color:white;
            border: solid 1px #D6D6D6;
            color:#3F3F3F;
            margin-bottom:5px;
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
        }
        .message-other{
            text-align:left;
            align-self:flex-start;
            border-radius:15px 15px 15px 0px;
            background-color:white;
            border: solid 1px #D6D6D6;
            color:#3F3F3F;
        }
    }
}
.chat-box{
    background-color:white;
    box-shadow: rgba(0,0,0,0.15) 0px 0px 20px;
    .chat-box-content{
        display:flex;
        align-items: center;
        height:96px;
        .input{
            flex:1;
            input,textarea{
                outline: none;
                border:solid 0px #dcdcdc;
                font-size: 16px;
                width:100%;
            }
        }
        .button-box{
            width:126px;
            text-align:right;
            .button{
                padding: 15px 40px;
                background-color:#EA2B74;
                color:white;
                border-radius: 26px;
                display:inline-block;
                cursor: pointer;
            }
        }
    }
}


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
   
    }

`;
