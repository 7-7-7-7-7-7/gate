import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/Projects.module.css'
import { useTranslation } from 'next-i18next'
import Header from '../components/header/header'
import { ProjectsData } from '../interfaces/project'

const Projects = () => {
    const { t } = useTranslation('projects')
    return (
        <>
            <Header title={t('header.title')} description={t('header.description')} />
            <div className={styles.projectsContainer}>
                <div className={styles.projectBox}>
                    <div className={styles.titlePage}>Proyectos</div>
                    <div className={styles.projects}>
                        {
                            ProjectsData.map((project) => (
                                <div key={project.name} className={styles.project}>
                                    <div className={styles.projectName}>{project.name}</div>
                                    <div className={styles.projectIcon}><i className={`fa-solid ${project.icon}`}></i></div>
                                    <div className={styles.projectDescription}>{t(project.description)}</div>
                                    <div className={styles.projectTech}>
                                        {
                                            project.technologies.map((tech) => (<span key={tech}>{tech}</span>))
                                        }
                                    </div>
                                    <div className={styles.projectLink}><a href={project.repoUrl} target="_blank" rel="noreferrer">Repo <i className="fa-solid fa-up-right-from-square"></i></a></div>
                                </div>
                            ))
                        }
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
