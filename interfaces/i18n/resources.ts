import common from '../../public/locales/en/common.json'
import navigator from '../../public/locales/en/navigator.json'
import about from '../../public/locales/en/about.json'
import projects from '../../public/locales/en/projects.json'
import contact from '../../public/locales/en/contact.json'

export interface Resources {
    common: typeof common
    navigator: typeof navigator,
    about: typeof about,
    projects: typeof projects,
    contact: typeof contact
}
