import { useState } from "react"
import { Styled, Label, Text } from "./style"

interface IPropsInput {
    placeholder?:string;
    message?:string;
    onChange?:( text:string )=>void;
    register?:any;
    name?:string;
    maxX?:string;
    minX?:string;
}

const Input = ( { 
    placeholder, 
    message, 
    onChange, 
    register, 
    name, 
    maxX, 
    minX 
}:IPropsInput ) => {

    const [ isFocus, setIsFocus ] = useState(false)
    const [ value, setValue ] = useState("")

    onChange&&onChange( value )

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
                        height: "48px",
                        backgroundColor:message ? "#d32f2f" : "#1976d2 "
                    }
                }
                htmlFor={ name ? name : "input" }
            >{ message ? message : placeholder }</Label>
            <Text
                {...register&&register(name, {
                    setValueAs: ( text:any ) => {setValue(text) 
                        return text
                    }
                })}
                focus={isFocus}
                message={message}
                id={ name ? name : "input" }
                type="text" 
                onBlur={()=>!value&&setIsFocus(false)}
                onFocus={()=>!value&&setIsFocus(true)}
            />
        </Styled>
    )
}

export default Input