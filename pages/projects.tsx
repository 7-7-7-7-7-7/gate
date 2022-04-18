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
            <div className={styles.projectsBox}>
                <div className={styles.projectBox}>

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
