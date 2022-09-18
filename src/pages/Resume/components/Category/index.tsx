import { ReactNode } from "react";
import Text from "../../../../components/Text";
import { Styled } from "./style"

interface IPropsText {
    children:ReactNode;
    margin?:string;
    name:string;
}

const Category = ( { children, margin, name}:IPropsText ) => {
    return(
        <Styled margin={margin}>
            <div className="category__icon">
                { children }
            </div>
            <Text margin="5px 5px 5px 15px">{name}</Text>
        </Styled>
    )
}

export default Category