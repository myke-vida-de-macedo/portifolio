import styled from "styled-components"
import { motion } from "framer-motion"

const Styled = styled(motion.div)`

    width: 80px;
    height: 80px;

    display: flex;

    place-content: center;
    overflow: hidden;
    border-radius: 30px;
   

    .item {
        width: 56%;

        overflow: visible;
        
        stroke: #F5F5F5;
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
`

export default Styled