import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface IPropsStyled {
    size: "small" | "medium" | "large";
    message?:string;
    marginRigth?:string;
    position?: "start" | "end" 
}

export const Styled = styled(motion.div)<IPropsStyled>`
    box-sizing: border-box;

    position: relative;

    width: 72px;
    height: ${({ size }) => 
        size === "small" ? "38px"           
            :
        size === "medium" ? "48px"
            :
            "58px"
    };

    background-color: #F5F5F5;

    display: flex;
    justify-content: center;
    align-items: center;

    align-self:${({ position }) => 
        
        position === "start" ? "flex-start"
        :
        position === "end" ? "flex-end" 
        :
        "none"

    };

    margin: 20px ${({ marginRigth })=> marginRigth ? marginRigth : "123px" } 40px 5px;


    border-left: 2px solid ${({ message }) => message ? "#d32f2f" : "#1976d2"};
`

interface IPropsBtn extends IPropsStyled {
    message?:string;
}

export const Btn = styled(motion.button)<IPropsBtn>`
    box-sizing: border-box;

    transition: 1s;

    position: absolute;
    top:0;
    left: 2px;

    width: auto;
    height: ${({ size }) => 
        size === "small" ? "38px"           
            :
        size === "medium" ? "48px"
            :
            "58px"
    };

    border: none;
    outline: 0;
    padding: ${({ size }) => 
        size === "small" ? "5px 25px"          
            :
        size === "medium" ? "10px 30px"
            :
            "15px 35px"
    };

    background-color: ${({ message }) => message ? "#d32f2f" : "#1976d2"};
    color: #F5F5F5;

    white-space: nowrap;

    font-size: ${({ size }) => 
        size === "small" ? "18px"           
            :
        size === "medium" ? "20px"
            :
            "22px"
    };
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        transition: 200ms;

        background-color: ${({ message }) => message ? "#e42424" : "#2270bd"};
    }
`

const animationLoading = keyframes`
        to{
        transform: rotate(360deg);
        }
        from{
            transform: rotate(0deg);
        }
`

export const LoadingSVG = styled(AiOutlineLoading3Quarters)`

    animation:${ animationLoading} infinite 500ms linear;

`
