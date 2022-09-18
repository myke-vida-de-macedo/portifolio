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

import { shemaContact } from "../../validation/contact.validation"
import Footer from "../../components/Footer/indes"

const Contact = () => {
    const [ send, setSend ] = useState(false)
    const [ loading, setLoading ] = useState(false)

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
        resolver:yupResolver(shemaContact)
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
            .then( _ =>{setSend(true); setTimeout(()=>navigate("/home"), 1000 )})
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
                    <h2 className="block__title">Contato Profissional</h2>

                    <div className="form__organization">
                        <Input
                                placeholder="Nome"
                                message={name?.message as string}
                                maxX="700px"
                                name="name"
                                register={register}
                        />
                        <Input
                            placeholder="Sobrenome"
                            message={lastname?.message as string}
                            maxX="700px"
                            name="lastname"
                            register={register}
                        />
                    </div>
                    <Input
                        placeholder="E-mail"
                        message={email?.message as string}
                        maxX="700px"
                        name="email"
                        register={register}
                    />
                    <TextArea
                        placeholder="Mensagem"
                        message={message?.message as string}
                        maxX="700px"
                        name="message"
                        register={register}
                    />
                    <Button
                        type="submit"
                        size="large"
                        message={ error ? "Dados invalidos" : "" }
                        concluded={send}
                        loading={loading}
                    >
                        ENVIAR
                    </Button>
                </form>
            </Block>
            <Footer/>
        </Styled>
    )
}

export default Contact