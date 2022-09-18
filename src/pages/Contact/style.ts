import { motion } from "framer-motion"
import styled from "styled-components"

export const Styled = styled(motion.div)`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #1b2838;

    overflow: hidden;

    .block__title{
        font-size: 27px;
        font-size: 700;

        color: #F5F5F5;

        text-rendering: optimizeLegibility;
        line-height: 1.4em;

        text-align: center;
        white-space: pre-wrap;

        align-self: flex-start;

        max-width: 900px;

        @media(min-width:400px){
            font-size: 30px;
        }

        @media(min-width:505px){
            font-size: 35px;
        }

        @media(min-width:630px){
            font-size: 40px;
        }
    }

    .form{
        width: 100%;
        max-width: 700px;
        height: 100%;

        padding:10px ;

        display: flex;
        flex-direction: column;
        align-items:flex-start;

        .form__organization{
            width: 100%;

            display: flex;
        }
    }
` 