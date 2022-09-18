import { Styled } from "./style"

interface IPropsText {
    children:string;
}

const Title = ( { children }:IPropsText ) => {
    return(
        <Styled>
            { children }
        </Styled>
    )
}

export default Title