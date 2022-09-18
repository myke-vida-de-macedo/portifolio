import Block from "../../components/Block"
import Footer from "../../components/Footer/indes"
import Header from "../../components/Header"
import Text from "./components/Text"

import { HomeStyled } from "./style"

const Home = () => {

    return (
        <HomeStyled>
            <Header/>
            <Block layoutPosition="columnCenter" postion="centerY">
                <Text/>
            </Block>
            <Footer/>
        </HomeStyled>
    )
}

export default Home