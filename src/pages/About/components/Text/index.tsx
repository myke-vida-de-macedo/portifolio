import { useTransform, useViewportScroll } from "framer-motion"
import { ReactNode } from "react";
import { Styled } from "./style"

interface IPropsText {
    children:ReactNode;
}

const Text = ( { 
    children
}:IPropsText ) => {

    const { scrollYProgress } = useViewportScroll()

    const x = useTransform( scrollYProgress, [0.216, 0.390, 0.430, 0.600] , ["-100", "0%","0%", "100%"] )

    return(
        <Styled
            style={{
       
            }}
        >
            { children }
        </Styled>
    )
}

export default Text