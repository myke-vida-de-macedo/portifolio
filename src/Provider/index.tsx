import { ReactNode } from "react"

interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (
    <>
        { children }
    </>
)
