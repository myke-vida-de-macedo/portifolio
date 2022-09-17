import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled.figure`
    box-sizing: border-box;

    width: 100%;
    min-width: 0px;

    position: relative;

    height: auto;
    max-height: 500px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    overflow: hidden;

    margin: 5px;

    border-radius: 4px;

    @media(min-width:1260px){
        width:calc(50% - 10px);
        min-width: 600px;

        max-height: 400px;
    }

    img{
        width: 100%;

    }
`

export const View = styled(motion.div)`

    position: absolute;

    transition: 300ms;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(23,26,33,0.5);
    backdrop-filter: blur(5px);

    .view__title{
        font-size: 25px;
        font-weight: 700;

        color:#F5F5F5;

        margin-left: 10px;

        @media(min-width: 500px){
            font-size: 50px;
        }
    }

    .view__organization{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        width: auto;
        height: 100%;

        padding: 10px;
    }
`

export const Link = styled(motion.a)`

    text-decoration: none;
    transition: 300ms;

    position: relative;

    color: #f5f5f5;

    margin: 5px 0px;

    svg{
        font-size: 40px;
            
        :hover{
            transition: 300ms;

            color: #1976d2;
        }

        @media(min-width: 400px){
            font-size: 50px;
        }
    }
`

export const Info = styled(motion.div)`

    box-sizing: border-box;

    transition: 300ms;

    position: absolute;

    top: 0;
    right: 100%;

    white-space: nowrap;

    padding: 5px;

    width: auto;
    height: auto;

    background-color: #222;

    border-radius: 4px;

    p{
        padding: 5px;
    }

`