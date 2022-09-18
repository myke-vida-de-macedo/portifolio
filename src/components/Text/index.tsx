import { Styled } from "./style"

interface IPropsText {
    children:string;
    margin?:string;
}

const Text = ( { children, margin}:IPropsText ) => {
    return(
        <Styled margin={margin}>
            { children }
        </Styled>
    )
}

export default Text