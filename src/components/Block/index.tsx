import { ReactNode } from "react"
import Limiter from "../Limiter"
import { Styled } from "./style"

interface IPropsBlock {
    children:ReactNode;
    layoutPosition?: "rowCenter" | "rowExtremity" | "columnCenter" | "columnExtremity";
}

const Block = ( { children, layoutPosition }:IPropsBlock ) => {

    return(
        <Styled
            initial={{ x:"-40%" }}
            animate={{ x: "0%" }}
            transition={{ type: "spring", duration: 0.8 }}
        >
            <Limiter layoutPosition={layoutPosition}>
                { children } 
            </Limiter>
        </Styled>
    )
}

export default Block