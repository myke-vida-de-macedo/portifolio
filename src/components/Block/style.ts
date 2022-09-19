import styled, { css } from "styled-components"
import { motion } from "framer-motion"

interface IPropsStyledBLock {
    postion?: "centerX" | "centerY";
    minHeigth?:string;
}

export const Styled = styled(motion.div)<IPropsStyledBLock>`
    box-sizing: border-box;

    position: relative;

    margin-top: ${({ minHeigth }) => !minHeigth &&"120px"};
    padding: 30px 10px;

    width: 100%;
    height:100%;
    min-height: ${({ minHeigth }) => minHeigth ? minHeigth : "100vh"};
    
    display: flex;
    align-items: center;
    flex-direction: column;
    ${({ postion }) =>
        postion === "centerY" && 
        css`
            justify-content: center;

        `
    }
        
    @media(min-width:600px){
        padding: 40px 20px;
    }
`