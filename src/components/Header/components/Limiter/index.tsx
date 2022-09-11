import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsLimiter {
    children:ReactNode
}

const Limiter = ( { children }:IPropsLimiter ) => {

    return(
        <Styled>
            { children }
        </Styled>
    )
}

export default Limiter