import { ReactNode } from "react"
import { Styled } from "./style"

interface IPropsSection {
    name:string;
    children:ReactNode;
}

const Section = ( { name, children }:IPropsSection ) => {
    return(
        <Styled>
            <h2 className="section__title">
                {name}
            </h2>
            <div className="section__list">
                { children }
            </div>
        </Styled>
    )
}

export default Section