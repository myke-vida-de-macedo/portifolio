import { TbDeviceGamepad } from 'react-icons/tb';
import { GiSpaceship } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { CgTrees } from 'react-icons/cg';
import { GiMusicalNotes } from 'react-icons/gi';
import { RiMovieLine } from 'react-icons/ri';

import { useTranslation } from "react-i18next"

export const Interest = () => {

    const { t } = useTranslation()

    return [
        {
            name:t("resumeInterestName1"),
            SVG:TbDeviceGamepad,
        }, 
        {
            name:t("resumeInterestName2"),
            SVG:GiSpaceship,
        },
        {
            name:t("resumeInterestName3"),
            SVG:FaLaptopCode,
        },
        {
            name:t("resumeInterestName4"),
            SVG:CgTrees,
        },
        {
            name:t("resumeInterestName5"),
            SVG:GiMusicalNotes,
        },
        {
            name:t("resumeInterestName6"),
            SVG:RiMovieLine,
        },
    ]
}
