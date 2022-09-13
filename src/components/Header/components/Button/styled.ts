import { motion } from "framer-motion"
import styled, { css }  from "styled-components"

interface IPropsStyled {
    mediaQuerry?:string;
    maxWidth?:boolean;
    positionChildren?: "top" | "left" | "bottom" |"right";
    radius?: "low" | "medium" | "large";
    color?: "blue" 
}

export const Styled = styled(motion.button)<IPropsStyled>`
    box-sizing: border-box;

    margin: 0px 5px;

    ${({ maxWidth }) => maxWidth && css` width:100% `}
    
    outline: 0;
    border: none;
    padding: 0px 20px;

    height: 60px;

    display: flex;
    justify-content: ${({ positionChildren }) => positionChildren === "left" ? "flex-start" : positionChildren === "right" ? "flex-end" : "center" };
    align-items: ${({ positionChildren }) => positionChildren === "top" ? "flex-start" : positionChildren === "bottom" ? "flex-end" : "center" };

    background-color: ${({ color })=> color === "blue" ? "#1976d2" : "transparent"} ;
    color: #F5F5F5;

    border-radius: ${({ radius })=> radius === "low" ? "4px" : radius === "medium" ? "8px" : radius === "large" ? "16px" : "4px" };

    font-size: 17px;
    font-weight: 600;
    
   

    :hover{
        background-color:${({ color })=> color === "blue" ? "#2270bd" : "rgba(2,2,2,0.1)"};
    }

    @media(min-width:${({ mediaQuerry })=> mediaQuerry}){
        ${({ mediaQuerry })=> mediaQuerry&&css`display:none`}
    }
`