import { ReactNode } from "react";
import Text from "../../../../components/Text";
import { Styled } from "./style"

interface IPropsText {
    children:ReactNode;
    margin?:string;
    name:string;
    size?: "cv" | "normal";
    colorName?:string;
    colorSVG?: "blue" | "white";
    border?:string;
}

const Category = ( { children, margin, name, size, colorName, colorSVG, border}:IPropsText ) => {
    return(
        <Styled margin={margin} size={size} colorSVG={colorSVG} border={border}>
            <div className="category__icon">
                { children }
            </div>
            <Text color={colorName} margin="5px 5px 5px 10px">{name}</Text>
        </Styled>
    )
}

export default Category