import { useTranslation } from "react-i18next"

export const Language = () => {

    const { t } = useTranslation()

    return [
        {
            title:t("resumeLanguageTitle1"),
            percentage:100,
        },
    ]
}