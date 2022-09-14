import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.figure)`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: auto;
    height: auto;
    
    margin: 10px;

    .text__title{

        font-size: 35px;
        font-weight: 700;

        color: #F5F5F5;

        margin: 10px 0px;

        @media(min-width:420px){

            font-size: 40px;
            font-weight: 700;
        }

        @media(min-width:520px){

            font-size: 50px;
            font-weight: 700;
        }

        @media(min-width:620px){

            font-size: 60px;
            font-weight: 700;
        }
    }

    .text__description{
        
        font-size: 15px;
        font-weight: 500;

        color: #d4d4d4;

        margin: 10px 0px;

        align-self: flex-start;
    }

    button{
        margin: 10px 0px;

        align-self: flex-end;
    }
`