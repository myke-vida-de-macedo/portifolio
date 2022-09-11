import Logo from "./components/Logo"
import Nav from "./components/Nav"
import { Styled } from "./style"

const Header = () => {

    return (
        <Styled>  
            <Nav 
                firstAxle="x"
                secondAxle="y"
                firstNegative="-200%"
                secondNegative="-100%"
                firstName="PORTIFOLIO"
                firstOnClick={()=>{}}
                secondName="RESUMO"
                secondOnClick={()=>{}}
            />
            <Logo/>
            <Nav 
                firstAxle="y"
                secondAxle="x"
                firstNegative="-100%"
                secondNegative="200%"
                firstName="SOBRE"
                firstOnClick={()=>{}}
                secondName="CONTATO"
                secondOnClick={()=>{}}
            />
        </Styled>   
    )
}

export default Header