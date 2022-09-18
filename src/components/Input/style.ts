import styled, { css } from "styled-components"
import { motion } from "framer-motion"

interface IPropsStyled {
    maxX?:string;
    minX?:string;
}

export const Styled = styled.div<IPropsStyled>`
    box-sizing: border-box;

    width: 100%;
    max-width: ${({ maxX }) => maxX ? maxX : "none"};
    min-width: ${({ minX }) => minX ? minX : "none"};
    height: auto;
    
    display: flex;
    flex-direction: row;

    position: relative;

    padding: 0px 5px 5px 5px;
    margin-top: 35px;
`

export const Label = styled(motion.label)`
    box-sizing: border-box;

    transition: 200ms;

    position: absolute;
    top: 0;
    left: 0;

    width: auto;

    background-color: #1976d2;

    color: #F5F5F5;

    margin-left: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`
interface IPropsText {
    focus:boolean;
    message?:string;
}

export const Text = styled(motion.input)<IPropsText>`
    box-sizing: border-box;

    transition: 200ms;

    border:none;
    outline: none;
    padding: none;

    width: 100%;
    height: 48px;

    font-size: 22px;

    ${({ focus, message }) => focus ?
            css`border-right:${message ? "3px solid #d32f2f" : "3px solid #1976d2"}`
                :
            css`border-right: ${message ? "3px solid #d32f2f" : "3px solid transparent"}` 
    }
`