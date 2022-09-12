import { ReactNode } from "react"
import { Styled } from "./styled"

interface IPropsButton {
    children:ReactNode;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
    axle: "x" | "y";
    negative: string;
    mediaQuerry?:string;
    maxWidth?:boolean;
    positionChildren?: "top" | "left" | "bottom" |"right" ;
    radius?: "low" | "medium" | "large";
    duration?:number;
}

const Button = ( { children, onClick, axle, negative, mediaQuerry, maxWidth, positionChildren, radius, duration }:IPropsButton ) => {


    return (
        <Styled 
            initial={axle === "x" ? {x:negative, opacity:0} : {y:negative, opacity:0} }
            animate={axle === "x" ? {x:"0%", opacity:1} : {y:"0%", opacity:1}}
            whileHover={{ scale: 1.05 }}
            whileTap={{
                scale: 0.9,
            }}
            transition={{duration:duration ? duration : 1}}
            onClick={onClick}
            mediaQuerry={mediaQuerry}
            maxWidth={maxWidth}
            positionChildren={positionChildren}
            radius={radius}
        >
            { children }
        </Styled>
    )
}

export default Button