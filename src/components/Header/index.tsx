import Select from "../Select"
import Switch from "../Switch"
import Limiter from "./components/Limiter"
import Logo from "./components/Logo"
import Nav from "./components/Nav"
import { Styled } from "./style"

const Header = () => {

    return (
        <Styled>  
            <Limiter>
                <Switch onChange={()=> {}}/>
                <Select placeholder="Teste"/>
            </Limiter>
            <Limiter>
                <Nav 
                    firstAxle="x"
                    secondAxle="y"
                    firstNegative="-200%"
                    secondNegative="-200%"
                    firstName="PORTIFOLIO"
                    firstOnClick={()=>{}}
                    secondName="RESUMO"
                    secondOnClick={()=>{}}
                />
                <Logo/>
                <Nav 
                    firstAxle="y"
                    secondAxle="x"
                    firstNegative="-200%"
                    secondNegative="200%"
                    firstName="SOBRE"
                    firstOnClick={()=>{}}
                    secondName="CONTATO"
                    secondOnClick={()=>{}}
                />
            </Limiter>
        </Styled>   
    )
}

export default Header