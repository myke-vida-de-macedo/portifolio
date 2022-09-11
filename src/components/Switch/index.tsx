import { useState } from "react"
import { motion } from "framer-motion"

import { Styled } from "./style"

import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

interface IPropsSwitch {
    onChange:( on:boolean ) => void;
}

const Switch = ( { onChange }:IPropsSwitch ) => {

    const [ isOn, setIsOn ] = useState(false)

    return(
        <Styled isOn={isOn} onClick={()=>{onChange(!isOn); setIsOn(!isOn)}}>
            <motion.div
                className="blockButton"
                initial={{x: isOn ? "0%" : "100%"}}
                animate={{x: isOn ? "100%" : "0%"}}
            >
               {isOn ? <BsFillSunFill/> : <BsFillMoonFill/>} 
            </motion.div>
        </Styled>
    )
}

export default Switch