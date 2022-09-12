import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.div)`
    box-sizing: border-box;

    position: sticky;

    width: 100%;
    height: calc(100% - 120px);

    padding: 0px 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    background-color: transparent;
`