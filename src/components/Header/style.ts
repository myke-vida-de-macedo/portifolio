import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.header)`
    box-sizing: border-box;

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0px 10px;

    width: 100%;
    height: 120px;

    z-index: 999;

    background-color: rgba(23,26,33,0.5);

`