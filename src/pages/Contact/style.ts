import { motion } from "framer-motion"
import styled from "styled-components"

export const Styled = styled(motion.div)`
    width: 100%;
    height: 100vh;

    position: relative;

    display: flex;
    justify-content: center;

    background-color: #1b2838;

    overflow: hidden;

    .form{
        width: 100%;
        max-width: 600px;
        height: 100%;

        padding:10px ;

        display: flex;
        flex-direction: column;
        align-items:flex-start;

        .form__organization{
            display: flex;
        }
    }
` 