import Header from "../../components/Header"
import Input from "../../components/Input"
import Limiter from "../../components/Limiter"
import Block from "../About/components/Block"
import { Styled } from "./style"

const Contact = () => {

    return(
        <Styled>
            <Header/>
            <Block>
                <Limiter>
                    <h2>E-mail: myke.programacao@gmail.com</h2>
                    <form action="" className="teste">
                        <Input
                            placeholder="PllaceHOlder"
                            message=""
                        />
                    </form>
                </Limiter>
            </Block>
        </Styled>
    )
}

export default Contact