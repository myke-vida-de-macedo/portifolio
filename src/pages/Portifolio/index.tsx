import Block from "../../components/Block"
import Header from "../../components/Header"
import List from "./components/List"
import { Styled } from "./style"

import { data } from "../../data/project"
import Select from "../../components/Select"
import Footer from "../../components/Footer/indes"

const Portifolio = () => {

    return(
        <Styled>
            <Header/>
            <Block> 
                <div className="block__navegation">
                    <h3 className="block__title">Projetos</h3>
                    <Select
                        arrayOptions={["All", "React", "JS Native"]}
                    />
                </div>
                <List arrayObj={data}/>
            </Block>
            <Footer/>
        </Styled>
    )
}

export default Portifolio