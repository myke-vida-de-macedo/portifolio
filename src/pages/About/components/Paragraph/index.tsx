import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsParagraph {
    children:ReactNode
}

const Paragraph = ( { children }:IPropsParagraph ) => {
    return(
        <Styled>
            { children }
        </Styled>
    )
}

export default Paragraph