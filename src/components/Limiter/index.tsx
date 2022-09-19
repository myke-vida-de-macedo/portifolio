import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsLimiter {
    children:ReactNode;
    layoutPosition?: "rowCenter" | "rowExtremity" | "columnCenter" | "columnExtremity";
}

const Limiter = ( { children, layoutPosition }:IPropsLimiter ) => {

    return(
        <Styled layoutPosition={layoutPosition}>
            { children }
        </Styled>
    )
}

export default Limiter