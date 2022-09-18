import { useState } from "react";
import { Styled, Label, Area } from "./style"

interface IPropsTextArea {
    placeholder?:string;
    message?:string;
    onChange?:( text:string )=>void;
    register?:any;
    name?:string;
    maxX?:string;
    minX?:string;
}

const TextArea = ( {
    placeholder,
    message, 
    onChange,
    register, 
    name, 
    maxX, 
    minX 
}:IPropsTextArea ) => {

    const [ isFocus, setIsFocus ] = useState(false)
    const [ value, setValue ] = useState("")

    onChange&&onChange(value)

    return(
        <Styled maxX={maxX} minX={minX}>    
            <Label 
                style={
                    isFocus ? {
                        y:"-120%",
                        padding: "5px",
                        height: "24px",
                        backgroundColor:message ? "#d32f2f" : "#1976d2 "
                    }:
                    {
                        y:"0%",
                        padding: "10px",
                        height: "calc(100% - 2px)",
                        backgroundColor:message ? "#d32f2f" : "#1976d2 "
                    }
                }
                htmlFor="textArea"
            >
                {placeholder}
            </Label>
            <Area
                {...register&&register(name, {
                    setValueAs: ( text:any ) => {setValue(text) 
                        return text
                    }
                })}
                maxX={maxX} 
                minX={minX}
                onFocus={()=>!value&&setIsFocus(true)}
                onBlur={()=>!value&&setIsFocus(false)}
                id="textArea"
                focus={isFocus}
                message={message}
            >
                
            </Area>
        </Styled>
    )
}

export default TextArea