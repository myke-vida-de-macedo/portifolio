import * as yup from 'yup'

import { useTranslation } from "react-i18next"

export const ShemaContact = () => {

    const { t } = useTranslation()

    return yup.object().shape({
        name:yup.string().required( t("contactRequiredName") ),
        lastname:yup.string().required( t("contactRequiredLastName") ),
        email:yup.string().required( t("contactRequiredEmail") ).email( t("contactValidEmail") ),
        message:yup.string().required( t("contactRequiredMessage") ),
    })
}

