import { Styled } from "./style"

interface IPropsText {
    children:string;
    size?: "low" | "medium" | "large" | "extraLarge" | "bigLarge";
    margin?:string;
    position?: "start" | "center" | "end";
}

const Title = ( { children, size, margin, position }:IPropsText ) => {
    return(
        <Styled size={size} margin={margin} position={position}>
            { children }
        </Styled>
    )
}

export default Title