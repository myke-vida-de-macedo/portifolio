import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.div)`
    box-sizing: border-box;

    width: 100%;
    min-width: 300px;
    max-width: 700px;

    padding: 0px 10px;

    margin: 10px 0px 10px 10px;

    @media(min-width:480px){
        margin: 0px 0px 10px 10px;
    }

    @media(min-width:600px){
        margin: 0px 0px 10px 20px;
    }
`