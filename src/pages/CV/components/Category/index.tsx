import { Styled } from "./style"

interface IPropsTitle {
    children:string;
}

const Category = ( { children }:IPropsTitle ) => {

    return(
        <Styled>
            { children }
        </Styled>
    )
}

export default Category