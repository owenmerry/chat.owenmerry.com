import styled from 'styled-components';

export const HeaderAppStyle = styled.div`

/* general */
background-color: #282828;
color:white;
font-size:16px;
.content{
    display:flex;
    align-items: center;
    height:85px;
}
.back{width:150px;cursor: pointer;}
.center{
    flex:1;
    text-align:center;
    font-size:21px;
}
.buttons{
    width:180px;
    text-align:right;
    .button{
        padding: 10px 30px;
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


/** Device Styles */

  /* mobile styles */
  @media only screen and (max-width: 720px) {
    .back{width:100px;}
    .center{
        font-size:16px;
    }
    .buttons{
        width:100px;
        .button{
            padding: 10px 10px;
            font-size:14px;
            .svg-box{
                display:none;
            }
            .text-box{
                bottom:0px;
            }
        }
    }

    }

`;
