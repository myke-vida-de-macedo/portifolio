import { Styled } from "./style"

interface IPropsText {
    children:string;
    margin?:string;
    color?:string;
}

const Text = ( { children, margin, color }:IPropsText ) => {
    return(
        <Styled margin={margin} color={color}>
            { children }
        </Styled>
    )
}

export default Text