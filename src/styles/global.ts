import { createGlobalStyle } from 'styled-components';
import back from '../assets/imgs/back.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, button {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
    }
    body {
        height: 100%;
        background-image: url(${back});
        background-repeat: no-repeat;
        background-color: #F8E5D6;
    }
    input, textarea {
        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;
        margin-top: 29px;
        padding: 12px;
        ::placeholder {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        }
    }
    span {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        line-height: 39px;
        text-decoration: underline;
        color: #834825;
        font-size: 12px;
        cursor: pointer;
    }
 `;
