import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsHighlight {
    children:ReactNode
}

const Highlight = ( { children }:IPropsHighlight  ) => {

    return(
        <Styled>
            { children }
        </Styled>
    )
}

export default Highlight