import { motion } from "framer-motion"

import { Styled } from "./style"

import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from "react"

interface IPropsSelect {
    placeholder?:string;
}

const Select = ( { placeholder }:IPropsSelect ) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    

    return(
        <Styled onClick={()=>setIsOpen(!isOpen)}>
            <p className="select__name">{placeholder}</p>
            {
                isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>
            }
            {isOpen&&<motion.div 
                initial={{y:"-50%", opacity:0}}
                animate={{y:"0%", opacity:1}}
                className="select__list"
            >
                
            </motion.div>}
        </Styled>
    )
}

export default Select