import { ReactNode, useState } from "react"
import { Styled, Btn, LoadingSVG } from "./style"

import { GoCheck } from 'react-icons/go';

interface IPropsButton {
    children:ReactNode;
    size: "small" | "medium" | "large";
    message?:string;
    onClick?:React.MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit";
    concluded?:boolean;
    marginRigth?:string;
    loading?:boolean;
}

const Button = ( { 
    children,
    size,
    message,
    onClick,
    type,
    concluded,
    marginRigth,
    loading
}:IPropsButton ) => {

    const [ hover, setHover ] = useState(false)


    return(
        <Styled marginRigth={marginRigth} message={message} size={size} >
            <Btn    
                disabled={concluded}
                type={type ? type : "button"}
                message={message}
                style={
                    hover ? {
                        x:"21%"
                    }:
                    {
                        x:"0%"
                    }
                }
                onMouseEnter={()=>!concluded&&setHover(true)}
                onMouseLeave={()=>!concluded&&setHover(false)}
                onClick={onClick}
                size={size} 
            >
                { concluded ? <GoCheck size={30}/> : loading ? <LoadingSVG size={30}/> :message ? message :  children }
                
            </Btn>
        </Styled>
    )
}

export default Button