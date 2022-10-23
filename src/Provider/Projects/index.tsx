import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast"
import { data } from "../../data/project"
import { IProject } from "../../pages/Portifolio/components/List";

interface IPropsProjectsProvider {
    children:ReactNode
}

interface IPropsProjectsContext {
    project:IProject[];
    filter:( category:string ) => void;
}

const ProjectsContext = createContext<IPropsProjectsContext>({} as IPropsProjectsContext)

export const ProjectsProvider = ( { children }:IPropsProjectsProvider ) => {

    const [ project, setProject ] = useState([...data])
    const filter = ( category:string ) => {

        if( category === "All" || category === "Todos"){
            setProject(data)
        }

        if( category === "React" || category.includes("JS")  ){
            
            const filterProject = data.filter( ({ level }) => category.includes("JS") ? level.includes("JS") : level.includes(category))

            if( filterProject.length != 0 ){
                setProject(filterProject)
            }else{
                toast.error("Ops, não exitem produtos nessa categoria")
            }
        }

        if( category === "Crescente" || category === "Crescent" ){

            const filterProject = [...project].sort( ( a, b ) => a.id - b.id)
            setProject( filterProject )
        }

        if( category === "Decrescente" || category === "Descending"){

            const filterProject = [...project].sort( ( a, b ) => b.id - a.id)
            setProject( filterProject )
        }
    }

    return(
        <ProjectsContext.Provider value={{
            project,
            filter
        }}>
            { children }
        </ProjectsContext.Provider>
    )
} 

export const useProjects = () => useContext(ProjectsContext)

