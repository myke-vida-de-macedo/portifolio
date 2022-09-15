import styled, { css } from "styled-components"
import { motion } from "framer-motion"

interface IPropsStyled {
    maxX?:string;
    minX?:string;
}

export const Styled = styled.div<IPropsStyled>`
    box-sizing: border-box;
    
    position: relative;

    width:  100%;
    max-width: ${({ maxX }) => maxX ? maxX : "none"};
    min-width: ${({ minX }) => minX ? minX : "none"};
    height: auto;

    padding: 0px 5px;

    margin: 35px 0px 0px 0px;
`
export const Label = styled(motion.label)`
    box-sizing: border-box;

    transition: 200ms;

    position: absolute;
    top: 0;
    left: 0;

    width: auto;
    height: calc(100% - 2px);

    background-color: #1976d2;

    color: #F5F5F5;

    margin-left: 5px;

    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`

interface iPropsArea extends IPropsStyled{
    focus:boolean;
    message?:string
}

export const Area = styled(motion.textarea)<iPropsArea>`
    box-sizing: border-box;

    border: none;
    outline: 0;
    padding: none;

    width:  100%;
    max-width: ${({ maxX }) => maxX ? maxX : "100%"};
    min-width: ${({ minX }) => minX ? minX : "100%"};
    height: 100px;
    min-height: 48px;

    font-size: 20px;

    ${({ focus, message }) => focus ?
            css`border-right:${message ? "3px solid #d32f2f" : "3px solid #1976d2"}`
                :
            css`border-right: ${message ? "3px solid #d32f2f" : "3px solid transparent"}` 
    }
`