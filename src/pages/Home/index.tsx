import Block from "./components/Block"
import Header from "../../components/Header"
import Text from "./components/Text"
import { HomeStyled } from "./style"
import Limiter from "../../components/Limiter"

const Home = () => {

    return (
        <HomeStyled>
            <Header/>
            <Block>
                <Limiter>
                    <Text/>
                </Limiter>
            </Block>
        </HomeStyled>
    )
}

export default Home