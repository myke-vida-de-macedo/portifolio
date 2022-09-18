import { useTranslation } from "react-i18next"

export const Experience = () => {

    const { t } = useTranslation()

    return  [
        {   
            company:t("resumeExperienceCompany1"),
            title:t("resumeExperienceTitle1"),
            description:t("resumeExperienceDescription1"),
        },
        {   
            company:t("resumeExperienceCompany2"),
            title:t("resumeExperienceTitle2"),
            description:t("resumeExperienceDescription2"),
        },
    ]
}