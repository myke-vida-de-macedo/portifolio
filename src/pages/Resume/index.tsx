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

const Resume = () => {
    
    return(
        <Styled>
            <Header/>
            <Block> 

                <Section name="Resumo">
                    <Text>Lorem ipsum dolor sit amet. Aut odit culpa aut delectus accusantium eos cupiditate vitae eum doloribus enim ex modi iure ea beatae consequuntur. Ut error maxime qui assumenda nisi aut voluptatem alias sed voluptates velit 33 fugiat molestias aut repellendus eius ab voluptates quisquam. Quo dolorem quidem aut enim facilis nobis aspernatur. Ex dolorem dolorem et voluptas adipisci qui saepe iure in doloribus corporis qui sunt facere ut inventore nemo.</Text>
                </Section>

                <Section name="Experiência">

                    {
                        experience.map( ({ title, description }) => 

                            <>
                                <Title>{ title }</Title>
                                <Text margin={"0px 0px 30px 10px"}>{ description }</Text>
                            </>
                        )
                    }

                </Section>

                <Section name="Educação">

                    {   
                        education.map( ({ title, description }) => 

                            <>
                                <Title>{ title }</Title>
                                <Text margin={"0px 0px 30px 10px"}>{ description }</Text>
                            </>
                        )
                    }

                </Section>

                <Section name="Tecnologias">
                    
                    {   
                        Technologies.map( ({ title, percentage }) => 

                            <>
                                <Title>{title}</Title>
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
                                <Title>{title}</Title>
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
                                <Title>{title}</Title>
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
            
            </Block>    
        </Styled>
    )
}

export default Resume