import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Block from "../../components/Block"

import { Styled } from "./style"

import { ShemaContact } from "../../validation/contact.validation"
import Footer from "../../components/Footer/indes"

import { useTranslation } from "react-i18next"

const Contact = () => {
    const [ send, setSend ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const { t } = useTranslation()

    const navigate = useNavigate()

    const { 
        register, 
        handleSubmit, 
        formState:{
            errors:{  
                name,
                lastname,
                email,
                message
            }
        } 
    } = useForm({
        resolver:yupResolver(ShemaContact())
    })


    const error = 
        name?.message ? true : 
        lastname?.message ? true : 
        email?.message ? true : 
        message?.message ? true : false 

    const onSubmit = (data:any ) => {

        setLoading(true)

        fetch("https://formsubmit.co/ajax/c85ea8dcf1b751e477b5bbd366ff6cbc", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then( _ =>{setSend(true); setTimeout(()=>navigate("/home/contact/thank"), 1000 )})
            .catch( _ => console.log(error));  
    }

    return(
        <Styled>
            <Header/>
            <Block>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className="form"
                >   
                    <h2 className="block__title">{t("contactTitle")}</h2>

                    <div className="form__organization">
                        <Input
                                placeholder={t("contactName")}
                                message={name?.message as string}
                                maxX="700px"
                                name="name"
                                register={register}
                        />
                        <Input
                            placeholder={t("contactLastName")}
                            message={lastname?.message as string}
                            maxX="700px"
                            name="lastname"
                            register={register}
                        />
                    </div>
                    <Input
                        placeholder={t("contactEmail")}
                        message={email?.message as string}
                        maxX="700px"
                        name="email"
                        register={register}
                    />
                    <TextArea
                        placeholder={t("contactMessage")}
                        message={message?.message as string}
                        maxX="700px"
                        name="message"
                        register={register}
                    />
                    <Button
                        type="submit"
                        size="large"
                        message={ error ? t("contactButtonValid"): "" }
                        concluded={send}
                        loading={loading}
                    >
                        {t("contactButton")}
                    </Button>
                </form>
            </Block>
            <Footer/>
        </Styled>
    )
}

export default Contact