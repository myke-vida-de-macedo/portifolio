import { ReactNode } from "react"
import { Styled } from "./styled"

interface IPropsButton {
    children:ReactNode;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    axle: "x" | "y";
    negative: string
}

const Button = ( { children, onClick, axle, negative }:IPropsButton ) => {


    return (
        <Styled 
            initial={axle === "x" ? {x:negative} : {y:negative}}
            animate={axle === "x" ? {x:"0%"} : {y:"0%"}}
            whileHover={{ scale: 1.05 }}
            whileTap={{
                scale: 0.9,
            }}
            transition={{duration:1}}
            onClick={onClick}>
            { children }
        </Styled>
    )
}

export default Button