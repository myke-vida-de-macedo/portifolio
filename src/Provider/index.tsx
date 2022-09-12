import { ReactNode } from "react"
import { ModalProvider } from "./Modal"

interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (
    <ModalProvider>
        { children }
    </ModalProvider>
)
