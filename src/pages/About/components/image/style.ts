import styled from "styled-components"
import { motion } from "framer-motion"

export const Figure = styled(motion.figure)`

    box-sizing: border-box;

    width: 100%;
    min-width: 150px;
    max-width: 300px;
    height: auto;

    border-radius: 16px;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
    }
`
