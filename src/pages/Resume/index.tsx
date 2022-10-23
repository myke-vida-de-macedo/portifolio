import Block from "../../components/Block"
import Header from "../../components/Header"
import Category from "./components/Category"
import ProgressBar from "./components/ProgressBar"
import Section from "./components/Section"
import Text from "../../components/Text"
import Title from "../../components/Title"

import { Styled } from "./style"

import { Interest } from "./Data/interest"
import { Experience } from "./Data/Experience"
import { Language } from "./Data/language"
import { tools } from "./Data/Tools"
import { Technologies } from "./Data/Technologies"
import { Education } from "./Data/education"
import Button from "../../components/Button"
import Footer from "../../components/Footer/indes"

import { useTranslation } from "react-i18next"

import { useNavigate } from "react-router-dom"

const Resume = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    return(
        <Styled>
            <Header/>
            <Block> 

                <Title margin="60px" position="center">{t("resumeTitle")}</Title>

                {/* <Button size="medium" onClick={()=>navigate("/home/resume/cv")}>{t("resumeButtonPDF")}</Button> */}

                <Section name={t("resumeCategoryResume")}>
                    <Text>{t("resumeText")}</Text>
                </Section>

                <Section name={t("resumeCategoryExperience")}>

                    {
                        Experience().map( ({ company, title, description }) => 

                            <>
                                <Title size="medium">{ company }</Title>
                                <Title size="low">{ title }</Title>
                                <Text margin={"0px 0px 30px 10px"}>{ description }</Text>
                            </>
                        )
                    }

                </Section>

                <Section name={t("resumeCategoryEducation")}>

                    {   
                        Education().map( ({ school, title, description }) => 

                            <>
                                <Title size="medium">{ school }</Title>
                                <Title size="low">{ title }</Title>
                                <Text margin={"0px 0px 30px 10px"}>{ description }</Text>
                            </>
                        )
                    }

                </Section>

                <Section name={t("resumeCategoryTechnologies")}>
                    
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

                <Section name={t("resumeCategoryTools")}>

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

                <Section name={t("resumeCategoryLanguage")}>

                    {   
                        Language().map( ({ title, percentage }) => 

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

                <Section name={t("resumeCategoryInterest")}>

                    <div className="section__wrap"> 

                        {
                            Interest().map( ({ name, SVG }) => 

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
            
                {/* <Button onClick={()=>navigate("/home/resume/cv")} size="medium">{t("resumeButtonPDF")}</Button> */}

            </Block>    
            <Footer/>
        </Styled>
    )
}

export default Resume