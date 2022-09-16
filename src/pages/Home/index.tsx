import Block from "../../components/Block"
import Header from "../../components/Header"
import Text from "./components/Text"

import { HomeStyled } from "./style"

const Home = () => {

    return (
        <HomeStyled>
            <Header/>
            <Block layoutPosition="columnCenter">
                <Text/>
            </Block>
        </HomeStyled>
    )
}

export default Home