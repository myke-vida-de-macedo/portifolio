import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.div)`
    box-sizing: border-box;

    position: relative;

    margin-top: 120px;
    padding: 30px 10px;

    width: 100%;
    height:100%;
    min-height: calc(100vh - 120px);
    
    display: flex;
    align-items: center;
    flex-direction: column;

        
    @media(min-width:600px){
        padding: 40px 20px;
    }
`