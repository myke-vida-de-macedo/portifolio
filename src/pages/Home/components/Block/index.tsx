import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsBLock {
    children:ReactNode
}

const Block = ( { children }:IPropsBLock ) => {

    return (
        <Styled>
            { children }
        </Styled>
    )
}

export default Block