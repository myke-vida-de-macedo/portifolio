import { motion } from "framer-motion"
import styled  from "styled-components"

export const Styled = styled(motion.button)`
    box-sizing: border-box;

    margin: 0px 5px;

    outline: 0;
    border: none;
    padding: 0px 20px;

    height: 60px;

    background-color: transparent;
    color: #F5F5F5;

    border-radius: 8px;

    font-size: 17px;
    font-weight: 600;
    
    :hover{
        background-color:rgba(2,2,2,0.1);
    }
`