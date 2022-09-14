import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsBlock {
    children:ReactNode
}

const Block = ( { children }:IPropsBlock ) => {

    return(
        <Styled
            initial={{ x:"-40%" }}
            animate={{ x: "0%" }}
            transition={{ type: "spring", duration: 0.8 }}
        >
            { children } 
        </Styled>
    )
}

export default Block