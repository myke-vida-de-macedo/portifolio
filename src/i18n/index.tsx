import i18n from "i18next"

import { initReactI18next } from "react-i18next"

import { enJSON } from "./translation/en/index"
import { ptJSON } from "./translation/pt/index"

i18n.use(initReactI18next).init({
    fallbackLng:"en",
    interpolation:{
        escapeValue:false
    },
    resources:{
        en:enJSON,
        pt:ptJSON,
    }
})

export default i18n