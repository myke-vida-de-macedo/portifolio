import styled from "styled-components"
import { motion } from "framer-motion"

export const Styled = styled(motion.div)`
    box-sizing: border-box;

    position: fixed;
    top: 120px;
    right: 0;

    width: 100%;
    height: calc(100vh - 120px);

    display: flex;
    justify-content: flex-end;

    background-color: rgba(2,2,2,0.1);

    .background__modal{
        width: 250px;
        height: calc(100vh - 120px);

        border-radius: 16px 0px 0px 16px;

        background-color: #171a21;

        display: flex;
        flex-direction: column;
    }

    @media(min-width:620px){
        display: none;
    }
`