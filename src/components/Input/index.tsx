import { useState } from "react"
import { Styled, Label, Text } from "./style"

interface IPropsInput {
    placeholder?:string;
    message?:string;
    onChange?:( text:string )=>void;
    register?:any;
    name?:string;
}

const Input = ( { placeholder, message, onChange, register, name }:IPropsInput ) => {

    const [ isFocus, setIsFocus ] = useState(false)
    const [ value, setValue ] = useState("")

    onChange&&onChange( value )

    return(
        <Styled >
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
                htmlFor="input"
            >{ message ? message : placeholder }</Label>
            <Text
                focus={isFocus}
                message={message}
                id="input"
                type="text" 
                onBlur={()=>!value&&setIsFocus(false)}
                onFocus={()=>!value&&setIsFocus(true)}
                onChange={( e )=>setValue( e.target.value )}
                {...register&&register(name)}
            />
        </Styled>
    )
}

export default Input