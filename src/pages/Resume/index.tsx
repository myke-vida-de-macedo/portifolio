import Block from "../../components/Block"
import Header from "../../components/Header"
import Category from "./components/Category"
import ProgressBar from "./components/ProgressBar"
import Section from "./components/Section"
import Text from "./components/Text"
import Title from "./components/Title"

import { Styled } from "./style"

import { interest } from "./Data/interest"
import { experience } from "./Data/Experience"
import { language } from "./Data/language"
import { tools } from "./Data/Tools"
import { Technologies } from "./Data/Technologies"
import { education } from "./Data/education"
import Button from "../../components/Button"

const Resume = () => {
    
    return(
        <Styled>
            <Header/>
            <Block> 

                <Title margin="60px" position="center">Sou desenvolvedor Front-End</Title>

                <Button size="medium">Baixar PDF</Button>

                <Section name="Resumo">
                    <Text>Sou um desenvolvedor Front-End, estudando o Back-End no momento, adoro um código limpo e sempre evoluir nisso, sou apaixonado por programação desde que tive contato em 2022, ambisioso por aprender novas tecnologias e aperfeisoar as que sei.</Text>
                </Section>

                <Section name="Experiência">

                    {
                        experience.map( ({ company, title, description }) => 

                            <>
                                <Title size="medium">{ company }</Title>
                                <Title size="low">{ title }</Title>
                                <Text margin={"0px 0px 30px 10px"}>{ description }</Text>
                            </>
                        )
                    }

                </Section>

                <Section name="Educação">

                    {   
                        education.map( ({ school, title, description }) => 

                            <>
                                <Title size="medium">{ school }</Title>
                                <Title size="low">{ title }</Title>
                                <Text margin={"0px 0px 30px 10px"}>{ description }</Text>
                            </>
                        )
                    }

                </Section>

                <Section name="Tecnologias">
                    
                    {   
                        Technologies.map( ({ title, percentage }) => 

                            <>
                                <Title size="medium">{title}</Title>
                                <ProgressBar 
                                    percentage={percentage}
                                    margin={"0px 0px 30px 0px"}
                                />
                            </>
                        )
                    }

                </Section>

                <Section name="Ferramentas">

                    {   
                        tools.map( ({ title, percentage }) => 

                            <>
                                <Title size="medium">{title}</Title>
                                <ProgressBar 
                                    percentage={percentage}
                                    margin={"0px 0px 30px 0px"}
                                />
                            </>
                        )
                    }

                </Section>

                <Section name="Língua">

                    {   
                        language.map( ({ title, percentage }) => 

                            <>
                                <Title size="medium">{title}</Title>
                                <ProgressBar 
                                    percentage={percentage}
                                    margin={"0px 0px 30px 0px"}
                                />
                            </>
                        )
                    }

                </Section>

                <Section name="Interesse">

                    <div className="section__wrap"> 

                        {
                            interest.map( ({ name, SVG }) => 

                                <Category 
                                    margin={"10px"}
                                    name={name}
                                >
                                    <SVG/>
                                </Category>
                            )
                        }
                
                    </div>

                </Section>
            
                <Button size="medium">Baixar PDF</Button>

            </Block>    
        </Styled>
    )
}

export default Resume