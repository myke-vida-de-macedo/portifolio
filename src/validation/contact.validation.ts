import * as yup from 'yup'

export const shemaContact = yup.object().shape({
    name:yup.string().required( "Nome obrigatorio" ),
    lastname:yup.string().required( "Sobrenome obrigatorio" ),
    email:yup.string().required( "Email obrigatorio" ).email("E-mail invalido"),
    message:yup.string().required( "Mensagem obrigatorio" ),
})