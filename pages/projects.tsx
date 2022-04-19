import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/Projects.module.css'
import { useTranslation } from 'next-i18next'
import Header from '../components/header/header'

const Projects = () => {
    const { t } = useTranslation('projects')
    return (
        <>
            <Header title={t('header.title')} description={t('header.description')} />
            <div className={styles.projectsContainer}>
                <div className={styles.projectBox}>
                    <div className={styles.titlePage}>Proyectos</div>
                    <div className={styles.projects}>
                        <div className={styles.project}>
                            <div className={styles.projectName}>Blog</div>
                            <div className={styles.projectIcon}><i className="fa-solid fa-book"></i></div>
                            <div className={styles.projectDescription}>
                                Aplicación RESTful básica que gestiona artículos de un blog.
                            </div>
                            <div className={styles.projectTech}>
                                <span>Ruby</span>
                                <span>Rails 5</span>
                            </div>
                            <div className={styles.projectLink}>Repo <i className="fa-solid fa-up-right-from-square"></i></div>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectName}>Pokédex</div>
                            <div className={styles.projectIcon}><i className="fa-solid fa-mobile-retro"></i></div>
                            <div className={styles.projectDescription}>
                                Aplicación web que consume una API que contiene los datos e imágenes de todos los Pokémon.
                            </div>
                            <div className={styles.projectTech}>
                                <span>Angular</span>
                                <span>REST</span>
                            </div>
                            <div className={styles.projectLink}>Repo <i className="fa-solid fa-up-right-from-square"></i></div>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectName}>Calculator.js</div>
                            <div className={styles.projectIcon}><i className="fa-solid fa-calculator"></i></div>
                            <div className={styles.projectDescription}>
                                Calculadora que realiza operaciones básicas programada usando código base.
                            </div>
                            <div className={styles.projectTech}>
                                <span>JavaScript</span>
                                <span>CSS 3</span>
                                <span>HTML 5</span>
                            </div>
                            <div className={styles.projectLink}>Repo <i className="fa-solid fa-up-right-from-square"></i></div>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectName}>Cookie importer</div>
                            <div className={styles.projectIcon}><i className="fa-solid fa-cookie"></i></div>
                            <div className={styles.projectDescription}>
                                Extensión de navegadores modernos que permite la importación de cookies.
                            </div>
                            <div className={styles.projectTech}>
                                <span>WebExtensions</span>
                                <span>JavaScript</span>
                            </div>
                            <div className={styles.projectLink}>Repo <i className="fa-solid fa-up-right-from-square"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale } : any) => {
    return {
        props: {
            ...await serverSideTranslations(
                locale,
                [
                    'projects',
                    'navigator'
                ]
            ),
        }
    }
}

export default Projects
