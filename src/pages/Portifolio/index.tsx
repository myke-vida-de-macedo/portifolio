import Block from "../../components/Block"
import Header from "../../components/Header"
import List from "./components/List"
import { Styled } from "./style"

import { data } from "../../data/project"
import Select from "../../components/Select"
import Footer from "../../components/Footer/indes"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useProjects } from "../../Provider/Projects"

const Portifolio = () => {

    const navigate = useNavigate()

    const { project, filter } = useProjects()

    return(
        <Styled>
            <Header/>
            <Block> 
                <div className="block__navegation">
                    <h3 className="block__title">Projetos</h3>
                    <Select
                        onClick={( text )=>filter( text )}
                        arrayOptions={["All", "React", "JS Native", "Crescente", "Decrescente"]}
                    />
                </div>
                <List arrayObj={project}/>
                <Button
                    size="large"
                    onClick={()=>navigate("/home/resume")}
                    marginRigth="200px"
                >
                    RESUMO
                </Button>

            </Block>
            <Footer/>
        </Styled>
    )
}

export default Portifolio