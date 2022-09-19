import { ReactNode } from "react"
import { ModalProvider } from "./Modal"
import { ProjectsProvider } from "./Projects"

interface IPropsProvider {
    children:ReactNode
}

export const Provider = ( { children }:IPropsProvider ) => (
    <ModalProvider>
        <ProjectsProvider>
            { children }
        </ProjectsProvider>
    </ModalProvider>
)
