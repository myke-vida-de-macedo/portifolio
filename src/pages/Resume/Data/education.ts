import { useTranslation } from "react-i18next"

export const Education = () => {

    const { t } = useTranslation()

    return [
        {   
            school:t("resumeEducationSchool1"),
            title:t("resumeEducationTitle1"),
            description:t("resumeEducationDescription1"),
        },
        {   
            school:t("resumeEducationSchool2"),
            title:t("resumeEducationTitle2"),
            description:t("resumeEducationDescription2"),
        },
    ]
}
