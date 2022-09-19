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
import { useEffect } from "react"

import { useTranslation } from "react-i18next"

const Header = () => {



    const navigate = useNavigate()

    const { 
        leaveModal, 
        openOrClose,
        closeModalInitial
    } = useModal()

    useEffect(()=>{closeModalInitial()},[])

    const { t, i18n } = useTranslation()

    return (
        <Styled>  
            <Limiter layoutPosition="rowExtremity">
                <Switch onChange={()=> {}}/>
                <Select 
                    placeholder={i18n.language == "pt" ? "Português" : "English"}
                    arrayOptions={[t("headerSelectEnglish"), t("headerSelectPortuguese")]}
                    onClick={( text )=>{

                        const value = 
                            text == "English" ? "en" 
                            : 
                            text == "Inglês" ? "en"
                            :
                            "pt"

                        i18n.changeLanguage( value )
                    }}
                />
            </Limiter>
            <Limiter layoutPosition="rowExtremity">
                <Nav 
                    firstAxle="x"
                    secondAxle="x"
                    firstNegative="-200%"
                    secondNegative="-200%"
                    firstName={t("headerButtonPortfolio")}
                    firstOnClick={()=>navigate("/home/portifolio")}
                    secondName={t("headerButtonResume")}
                    secondOnClick={()=>navigate("/home/resume")}
                />
                <Logo/>
                <Nav 
                    firstAxle="x"
                    secondAxle="x"
                    firstNegative="200%"
                    secondNegative="200%"
                    firstName={t("headerButtonAbout")}
                    firstOnClick={()=>navigate("/home/about")}
                    secondName={t("headerButtonContact")}
                    secondOnClick={()=>navigate("/home/contact")}
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