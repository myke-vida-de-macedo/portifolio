import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.header)`
    box-sizing: border-box;

    position: fixed;
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 80px;

    z-index: 999;

    padding: 0px 50px;

    background-color: rgba(23,26,33,0.5);

`