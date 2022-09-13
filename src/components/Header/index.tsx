import Select from "../Select"
import Switch from "../Switch"
import Button from "./components/Button"
import Limiter from "../Limiter"
import Logo from "./components/Logo"
import Modal from "./components/Modal"
import Nav from "./components/Nav"
import { Styled } from "./style"

import { HiViewList } from 'react-icons/hi';
import { useModal } from "../../Provider/Modal"

import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const { 
        leaveModal, 
        openOrClose
    } = useModal()

 

    return (
        <Styled>  
            <Limiter layoutPosition="rowExtremity">
                <Switch onChange={()=> {}}/>
                <Select 
                    arrayOptions={["English", "Português"]}
                    onClick={()=>{}}
                />
            </Limiter>
            <Limiter layoutPosition="rowExtremity">
                <Nav 
                    firstAxle="x"
                    secondAxle="x"
                    firstNegative="-200%"
                    secondNegative="-200%"
                    firstName="PORTIFOLIO"
                    firstOnClick={()=>navigate("/home/portifolio")}
                    secondName="RESUMO"
                    secondOnClick={()=>navigate("/home/resume")}
                />
                <Logo/>
                <Nav 
                    firstAxle="x"
                    secondAxle="x"
                    firstNegative="200%"
                    secondNegative="200%"
                    firstName="SOBRE"
                    firstOnClick={()=>navigate("/home/sobre")}
                    secondName="CONTATO"
                    secondOnClick={()=>navigate("/home/contato")}
                />
                <Button 
                    axle="x"
                    negative="100%"
                    onClick={openOrClose}
                    mediaQuerry="620px"
                >
                    <HiViewList size={30}/>
                </Button>
                {leaveModal&&<Modal/>}
            </Limiter>
        </Styled>   
    )
}

export default Header