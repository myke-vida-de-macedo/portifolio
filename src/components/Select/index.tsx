import { motion } from "framer-motion"
import { v4 as uuid } from "uuid"

import { Option, Styled } from "./style"

import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from "react"

interface IPropsSelect {
    arrayOptions:string[]
    onClick?:( value:string ) => void
}

const Select = ( { arrayOptions, onClick }:IPropsSelect ) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ name, setName ] = useState<string>(arrayOptions[0] as string)

    return(
        <Styled 
            onBlur={()=> isOpen&&setIsOpen(false)}
            onFocus={()=> !isOpen&&setIsOpen(true)}
        >
            <p className="select__name">{ name }</p>
            {
                isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>
            }
            {isOpen&&<motion.div 
                initial={{y:"-50%", opacity:0}}
                animate={{y:"0%", opacity:1}}
                className="select__list"
            >
                { arrayOptions.map( value => 
                    <Option 
                        style={{
                            backgroundColor:value === name ? "#edf4fb" : "#FFF"
                        }}
                        key={uuid()} 
                        onClick={()=>{setName(value); onClick&&onClick( value )}}
                    >
                        {value}
                    </Option> )}
            </motion.div>}
        </Styled>
    )
}

export default Select