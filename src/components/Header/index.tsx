import Select from "../Select"
import Switch from "../Switch"
import Button from "./components/Button"
import Limiter from "../Limiter"
import Logo from "./components/Logo"
import Modal from "./components/Modal"
import Nav from "./components/Nav"
import { Styled } from "./style"

import { HiViewList } from 'react-icons/hi';

const Header = () => {

    return (
        <Styled>  
            <Limiter>
                <Switch onChange={()=> {}}/>
                <Select 
                    arrayOptions={["English", "Português"]}
                    onClick={()=>{}}
                />
            </Limiter>
            <Limiter>
                <Nav 
                    firstAxle="x"
                    secondAxle="x"
                    firstNegative="-200%"
                    secondNegative="-200%"
                    firstName="PORTIFOLIO"
                    firstOnClick={()=>{}}
                    secondName="RESUMO"
                    secondOnClick={()=>{}}
                />
                <Logo/>
                <Nav 
                    firstAxle="x"
                    secondAxle="x"
                    firstNegative="200%"
                    secondNegative="200%"
                    firstName="SOBRE"
                    firstOnClick={()=>{}}
                    secondName="CONTATO"
                    secondOnClick={()=>{}}
                />
                <Button 
                    axle="x"
                    negative="100%"
                    onClick={()=>{}}
                    mediaQuerry="620px"
                >
                    <HiViewList size={30}/>
                </Button>
            </Limiter>
        </Styled>   
    )
}

export default Header