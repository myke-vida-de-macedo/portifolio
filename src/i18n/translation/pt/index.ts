import HomePT from "./home.json"
import AboutPT from "./about.json"
import ContactPT from "./contact.json"
import ResumePT from "./resume.json"

export const ptJSON = {
    translation:{
        ...HomePT,
        ...AboutPT,
        ...ContactPT,
        ...ResumePT
    }
}