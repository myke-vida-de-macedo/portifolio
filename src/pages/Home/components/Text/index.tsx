import { useNavigate } from "react-router-dom"
import Button from "../../../../components/Button"
import { Styled } from "./style"

import { useTranslation } from "react-i18next"
 
const Text = () => {

    const navigate = useNavigate()

    const { t } = useTranslation()

    return (
        <Styled>
            <p className="text__title">{t("welcome")}</p>
            <p className="text__description">{t("welcomeDescription")}</p>
            <Button
                size="large"
                onClick={()=>navigate("/home/about")}
                marginRigth="200px"
            >
                {t("welcomeButton")}
            </Button>
        </Styled>
    )
}

export default Text